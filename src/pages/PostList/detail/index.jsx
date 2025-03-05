import { useState, useEffect } from "react";
import * as S from './style';
import Header from '../../../components/header';
import { useParams, useNavigate } from 'react-router-dom';
import Like2 from '../../../assets/like2.svg';
import NotLike2 from '../../../assets/not_like2.svg';
import Star from '../../../assets/like-ing.svg';
import Unstar from '../../../assets/star.svg';
import { getPostDetail, deletePost, toggleFavorite, togglePostLike } from "../../../api/postList";
import { getComments, createComment, deleteComment, updateComment, toggleCommentLike } from "../../../api/comment.js";
import makeDocument from "../../../utils/makeDocument.jsx";
import { useRecoilValue } from 'recoil';
import { authAtom } from "../../../recoil/authAtom.js";


export default function Detail() {
    const { id } = useParams();
    const postId = parseInt(id);
    const navigate = useNavigate();
    const [post, setPost] = useState(null);
    const [comments, setComments] = useState([]);
    const [newComment, setNewComment] = useState('');
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [editCommentId, setEditCommentId] = useState(null);
    const [editCommentText, setEditCommentText] = useState('');
    const [isFavorite, setIsFavorite] = useState(false);
    const [likeOn, setLikeOn] = useState(false);
    const user = useRecoilValue(authAtom);

    useEffect(() => {
        if (post) {
            console.log('dsfsadfa', post.userInfoDTO.uid);
            console.log('hfdhġd',post.userInfoDTO.id)
        }
    }, [post]);    
    
    const [commendLike, setCommendLike] = useState([]);

    useEffect(() => {
        console.log('댓글 좋아요 리스트', commendLike);
    }, [commendLike]);

    useEffect(() => {
        setLoading(true);
        setError(null);

        getPostDetail(postId)
            .then((data) => {
                console.log("게시글 데이터:", data);
                setPost(data);
                setIsFavorite(data.favorite_on);
                setLikeOn(data.like_on);
            })
            .catch(() => setError('게시물을 불러오는 데 실패했습니다.'))
            .finally(() => setLoading(false));

        getComments(postId).then((data) => {
            console.log("댓글 데이터:", data);
            setComments(
                data.map((comment) => ({
                    ...comment,
                    liked: comment.liked || false
                }))
            );
            setCommendLike(data.map((comment) => comment.liked || false));
        })
            .catch(err => console.error('댓글을 불러오는 데 실패했습니다.', err));
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

    const handleCommentChange = (e) => {
        setNewComment(e.target.value);
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

    const handleFavoriteClick = async () => {
        try {
            await toggleFavorite(postId, isFavorite);
            setIsFavorite(prev => !prev);
            console.log(isFavorite);
        } catch (error) {
            console.error("즐겨찾기 변경 실패:", error);
        }
    };
    const handleCommentDelete = async (commentId) => {
        if (window.confirm('정말로 삭제하시겠습니까?')) {
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

    const handleCommentSubmit = async (e) => {
        if (e) e.preventDefault(); 
        if (!newComment.trim()) return;
    
        try {
            const userId = post.userInfoDTO.id;
            await createComment(postId, newComment, userId);
            setNewComment('');
            const updatedComments = await getComments(postId);
            setComments(updatedComments);
        } catch (error) {
            console.error('댓글 작성 실패', error);
        }
    };
    

    const handleCommentKeyPress = (e) => {
        if (e.key === 'Enter' && !e.shiftKey) {
            e.preventDefault();
            setTimeout(() => {
                handleCommentSubmit();
            }, 1000);
        }
    };
    
    
    const handleCommentUpdate = async () => {
        if (!editCommentText.trim()) return;
    
        try {
            await updateComment(editCommentId, editCommentText);
            setComments((prevComments) =>
                prevComments.map(comment =>
                    comment.id === editCommentId
                        ? { ...comment, comment: editCommentText }
                        : comment
                )
            );
            setEditCommentId(null);
            setEditCommentText('');
        } catch (error) {
            console.error('댓글 수정 실패', error);
        }
    };
    
    const handleEditCommentKeyPress = (e) => {
        if (e.key === 'Enter' && !e.shiftKey) {
            e.preventDefault();
            handleCommentUpdate();
        }
    };
    
    const handlePostLikeClick = async () => {
        try {
            await togglePostLike(postId, likeOn);
            setLikeOn(prev => !prev);
            setPost(prevPost => ({
                ...prevPost,
                likes: likeOn ? prevPost.likes - 1 : prevPost.likes + 1,
            }));
        } catch (error) {
            console.error("좋아요 변경 실패:", error);
        }
    };

    const handleCommentLikeClick = async (commentId, index) => {
        try {
            await toggleCommentLike(commentId, commendLike[index]);
            setCommendLike(prevLikes =>
                prevLikes.map((liked, i) => (i === index ? !liked : liked))
            );
            setComments(prevComments =>
                prevComments.map((comment, i) =>
                    i === index
                        ? {
                            ...comment,
                            liked: !comment.liked,
                            likeCount: comment.liked
                                ? comment.likeCount - 1
                                : comment.likeCount + 1,
                        }
                        : comment
                )
            );
        } catch (error) {
            console.error("댓글 좋아요 변경 실패:", error);
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
                                <img onClick={() => navigate(`/user/${post.userInfoDTO.id}`, { state: { uid: post.userInfoDTO.uid } })} src={post.userInfoDTO.profile} alt={post.userInfoDTO.name} />
                                <S.RightProfile>
                                    <span>{post.generation}</span>
                                    <p onClick={() => navigate(`/user/${post.userInfoDTO.id}`, { state: { uid: post.userInfoDTO.uid } })} >{post.userInfoDTO.name}</p>
                                </S.RightProfile>
                            </S.ProfileTop>
                            <S.ProfileBottom>
                                <span>생성일자 {new Date(post.document.createAt).toISOString().split('T')[0]}</span>
                                <S.PostLike isLike={likeOn}>
                                    <img src={likeOn ? Like2 : NotLike2}
                                        alt="글 좋아요"
                                        onClick={handlePostLikeClick}
                                    />
                                    <p>{post.likes}</p>
                                </S.PostLike>
                            </S.ProfileBottom>
                        </S.Profile>
                        <S.PostDetailData>
                            <S.PostDetailDataTop>
                                <h1>{post.document.title}</h1>
                                <img
                                    src={isFavorite ? Star : Unstar}
                                    alt="즐겨찾기"
                                    onClick={handleFavoriteClick}
                                    style={{ cursor: "pointer" }}
                                />
                                {post.userInfoDTO.uid === user.uid && (
                                    <S.Edit>
                                        <p onClick={handleDelete}>삭제</p>
                                        <p onClick={handleEdit}>수정</p>
                                    </S.Edit>
                                )}
                            </S.PostDetailDataTop>
                            <span>{post.hash_tag?.length ? post.hash_tag.map(tag => `#${tag}`).join(' ') : ''}</span>
                            <div>{makeDocument(post.document.content)}</div>
                        </S.PostDetailData>
                    </S.PostDetailMain>
                )}
                    <S.CommentSection>
                    <h3>{comments.length}개의 댓글</h3>

                    {user && user.uid !== "" && user.role !== "" ? (
                        <S.CommentInputWrapper>
                        <input
                            type="text"
                            value={newComment}
                            onChange={handleCommentChange}
                            onKeyDown={handleCommentKeyPress}  
                            placeholder="댓글을 입력해주세요"
                        />
                        <button onClick={handleCommentSubmit}>댓글 작성</button>
                        </S.CommentInputWrapper>
                    ) : (
                        <p>로그인 후 댓글을 작성하실 수 있습니다.</p> 
                    )}

                    {comments.length ? comments.map((comment, index) => {
                        return (
                        <S.CommentItem key={comment.id}>
                            <S.CommentProfile 
                            src={comment.userProfile || ""} 
                            onClick={() => navigate(`/user/${comment.userId}`)}
                            />
                            <S.CommentContent>
                            <p><strong>{comment.userName}</strong></p>
                            {editCommentId === comment.id ? (
                                <S.EditCommentContainer>
                                <S.EditCommentInput
                                    type="text"
                                    value={editCommentText}
                                    onChange={(e) => setEditCommentText(e.target.value)}
                                    onKeyDown={handleEditCommentKeyPress}  // 🔹 수정 중 Enter 키 입력 처리 추가
                                    placeholder="댓글을 수정하세요."
                                />
                                <S.CommentButtonWrapper>
                                    <S.CommentUpdateButton onClick={handleCommentUpdate}>
                                    수정 완료
                                    </S.CommentUpdateButton>
                                    <S.CommentCancelButton onClick={() => {
                                    setEditCommentId(null);
                                    setEditCommentText("");
                                    }}>
                                    취소
                                    </S.CommentCancelButton>
                                </S.CommentButtonWrapper>
                                </S.EditCommentContainer>
                            ) : (
                                <p>{comment.comment}</p>
                            )}

                            <S.CommentBottom>
                                <S.Like isCommentLike={commendLike[index]}>
                                <img 
                                    onClick={() => handleCommentLikeClick(comment.id, index)} 
                                    src={commendLike[index] ? Like2 : NotLike2} 
                                    style={{ cursor: "pointer" }} 
                                    width="20px" 
                                />
                                <p>{comment.likeCount}</p>
                                </S.Like>
                                <S.CommentActions>
                                {comment.uid === user.uid && (
                                    <>
                                    <p onClick={() => handleCommentDelete(comment.id)}>삭제</p>
                                    <p onClick={() => handleCommentEdit(comment.id, comment.comment)}>수정</p>
                                    </>
                                )}
                                </S.CommentActions>
                            </S.CommentBottom>
                            </S.CommentContent>
                        </S.CommentItem>
                        );
                    }) : <p>댓글이 없습니다.</p>}
                    </S.CommentSection>


            </S.Content>
        </S.Container>
    );
}
