import { useState, useEffect } from "react";
import * as S from './style';
import Header from '../../../components/header';
import { useParams, useNavigate } from 'react-router-dom';
import Like2 from '../../../assets/like2.svg';
import Star from '../../../assets/star.svg';
import { getPostDetail, deletePost } from "../../../api/postList";

import { getComments, createComment, deleteComment, updateComment } from "../../../api/comment.js";


export default function Detail() {
    const { id } = useParams();
    const postId = parseInt(id);
    const navigate = useNavigate();
    const [post, setPost] = useState(null);

    const [comments, setComments] = useState([]);

    const [newComment, setNewComment] = useState('');
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [editCommentId, setEditCommentId] = useState(null);  // 수정 중인 댓글 ID
    const [editCommentText, setEditCommentText] = useState(''); // 수정 중인 댓글 텍스트
    const token = localStorage.getItem('accessToken');
    
    useEffect(() => {
        setLoading(true);
        setError(null);
        getPostDetail(postId)
            .then((data) => {
                setPost(data);
                setLoading(false);
            })
            .catch((err) => {
                setError('게시물을 불러오는 데 실패했습니다.');
                setLoading(false);
            });
        getComments(postId)
            .then((data) => {
                setComments(data);
            })
            .catch((err) => {
                console.error('댓글을 불러오는 데 실패했습니다.', err);
            });
    }, [postId]);

    const handleEdit = () => {
        navigate(`/write/${postId}`, {
            state: {
                title: post.document.title,
                content: post.document.content,
                thumbnail: post.document.thumbnail,
                introduction: post.document.introduction,
                isPost: true,
                hash_tag: post.hash_tag || [],
            },
        });
    };

    const handleDelete = () => {
        if (window.confirm('정말로 삭제하시겠습니까?')) {
            console.log(postId)
            deletePost(postId)
                .then(() => {
                    alert('게시물이 삭제되었습니다.');
                    navigate(-1);
                })
                .catch((err) => {
                    console.error('삭제 실패', err);
                    alert('삭제에 실패했습니다.');
                });
        }
    };

    const handleCommentChange = (e) => {
        setNewComment(e.target.value);
    };

    const handleCommentSubmit = async () => {
        if (!newComment.trim()) return;

        try {
            await createComment(postId, newComment); 
            setNewComment('');
            const updatedComments = await getComments(postId); 
            setComments(updatedComments);
        } catch (error) {
            console.error('댓글 작성 실패', error);
        }
    };

    const handleCommentDelete = async (commentId) => {
        if (window.confirm('정말로 삭제하시겠습니까?')){
            try {
                await deleteComment(commentId);
                const updatedComments = await getComments(postId);
                setComments(updatedComments);
            } catch (error) {
                console.error('댓글 삭제 실패', error);
            }
        }
    };

    const handleCommentEdit = (commentId, currentText) => {
        setEditCommentId(commentId); 
        setEditCommentText(currentText); 
    };

    const handleCommentUpdate = async () => {

        if (!editCommentText.trim()) return;
    
        try { 
            await updateComment(editCommentId, editCommentText);
            setComments((prevComments) => 
                prevComments.map(comment =>
                    comment.id === editCommentId
                        ? { ...comment, comment: editCommentText } // 수정된 댓글 내용으로 업데이트
                        : comment
                )
            );
            setEditCommentId(null);  // 수정 중인 댓글 ID 초기화
            setEditCommentText('');  // 수정 중인 댓글 텍스트 초기화
        } catch (error) {
            console.error('댓글 수정 실패', error);
        }
    };
    
   
    return (
        <S.Container>
            <Header />
            <S.Content>
                {post && (
                    <S.PostDetailMain>
                        <S.Profile>
                            <S.ProfileTop>
                                <img src={post.userInfoDTO.profile} alt={post.userInfoDTO.name} />
                                <S.RightProfile>
                                    <span>{post.generation}기</span>
                                    <p>{post.userInfoDTO.name}</p>
                                </S.RightProfile>
                            </S.ProfileTop>
                            <S.ProfileBottom>
                                <span>생성일자 {new Date(post.document.createAt).toISOString().split('T')[0]}</span>
                                <S.PostLike><img src={Like2} /><p>{post.likes}</p></S.PostLike>
                            </S.ProfileBottom>
                        </S.Profile>
                        <S.PostDetailData>
                            <S.PostDetailDataTop>
                                <h1>{post.document.title}</h1>
                                <img src={Star} />
                                <S.Edit>
                                    <p onClick={handleDelete}>삭제</p>
                                    <p onClick={handleEdit}>수정</p>
                                </S.Edit>
                            </S.PostDetailDataTop>
                            <span>
                                {post.hash_tag && Array.isArray(post.hash_tag) && post.hash_tag.length > 0
                                    ? post.hash_tag.map(tag => `#${tag}`).join(' ')
                                    : 'No tags available'}
                            </span>
                            <p>{post.document.content}</p>
                        </S.PostDetailData>
                    </S.PostDetailMain>
                )}
                <S.CommentSection>
                    <h3>{comments.length}개의 댓글</h3>
                    <S.CommentInputWrapper>
                        <input
                            type="text"
                            value={newComment}
                            onChange={handleCommentChange}
                            placeholder="댓글을 입력해주세요"
                        />
                        <button onClick={handleCommentSubmit}>댓글 작성</button>
                    </S.CommentInputWrapper>

                    {comments.length > 0 ? (
                        comments.map((comment) => (
                            <S.CommentItem key={comment.id}>
                                <S.CommentProfile />
                                <S.CommentContent>

                                    <p><strong>{comment.userName}</strong></p>
                                    {editCommentId === comment.id ? (
                                        <>
                                            <input
                                                type="text"
                                                value={editCommentText}
                                                onChange={(e) => setEditCommentText(e.target.value)}
                                            />
                                            <button onClick={handleCommentUpdate}>수정 완료</button>
                                        </>
                                    ) : (
                                        <p>{comment.comment}</p>
                                    )}

                                    <S.CommentBottom>
                                        <S.Like>
                                            <img src={Like2} width="20px" />
                                            {comment.likeCount}
                                        </S.Like>
                                        <S.CommentActions>
                                            <p onClick={() => handleCommentDelete(comment.id)}>삭제</p>

                                            <p onClick={() => handleCommentEdit(comment.id, comment.comment)}>수정</p>

                                        </S.CommentActions>
                                    </S.CommentBottom>
                                </S.CommentContent>
                            </S.CommentItem>
                        ))
                    ) : (
                        <p>댓글이 없습니다.</p>
                    )}
                </S.CommentSection>
            </S.Content>
        </S.Container>
    );
}
