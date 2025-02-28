import { useState, useEffect } from "react";
import * as S from './style';
import Header from '../../../components/header';
import { useParams, useNavigate } from 'react-router-dom';
import Like2 from '../../../assets/like2.svg';
import Star from '../../../assets/star.svg';
import { getPostDetail, deletePost } from "../../../api/postList";
import { authAtom } from "../../../recoil/authAtom.js";
import { useRecoilValue } from 'recoil';


export default function Detail() {
    const { id } = useParams();
    const postId = parseInt(id);
    const navigate = useNavigate();
    const [post, setPost] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const user = useRecoilValue(authAtom);

    console.log(user.uid)

    useEffect(() => {
        setLoading(true);
        setError(null);
    
        getPostDetail(postId)
            .then((data) => {
                console.log("Fetched post data:", data);
                setPost(data);
                setLoading(false);
            })
            .catch((err) => {
                setError('게시물을 불러오는 데 실패했습니다.');
                setLoading(false);
            });
    }, [postId]);
    

    const currentUserId = Number(localStorage.getItem("userId"));
    console.log(currentUserId)



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
                                    <span>{post.generation}</span>
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
                                {post.userInfoDTO.id === user.uid && (
                                    <S.Edit>
                                        <p onClick={handleDelete}>삭제</p>
                                        <p onClick={handleEdit}>수정</p>
                                    </S.Edit>
                                )}

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
                    <h3>2개의 댓글</h3>
                    <S.CommentInputWrapper>
                        <input type="text" placeholder="댓글을 입력해주세요" />
                        <button>댓글 작성</button>
                    </S.CommentInputWrapper>

                    <S.CommentItem>
                        <S.CommentProfile />
                        <S.CommentContent>
                            <p><strong>heodongun</strong></p>
                            <p>허온 대머리</p>
                            <S.CommentBottom>
                                <S.Like>
                                    <img src={Like2} width="20px"></img>12
                                </S.Like>
                                <S.CommentActions>
                                    <p>삭제</p>
                                    <p>수정</p>
                                </S.CommentActions>
                            </S.CommentBottom>
                        </S.CommentContent>
                    </S.CommentItem>

                    <S.CommentItem>
                        <S.CommentProfile />
                        <S.CommentContent>
                            <p><strong>huhon123</strong></p>
                            <p>허동운 대머리</p>
                            <S.CommentBottom>
                                <S.Like>
                                    <img src={Like2} width="20px"></img>12
                                </S.Like>
                                <S.CommentActions>
                                    <p>삭제</p>
                                    <p>수정</p>
                                </S.CommentActions>
                            </S.CommentBottom>
                        </S.CommentContent>
                    </S.CommentItem>
                </S.CommentSection>
            </S.Content>
        </S.Container>
    );
}