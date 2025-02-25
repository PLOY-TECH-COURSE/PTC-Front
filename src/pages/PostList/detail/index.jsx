import { useState, useEffect } from "react";
import * as S from './style';
import Header from '../../../components/header';
import { useParams, useNavigate } from 'react-router-dom';
import Like2 from '../../../assets/like2.svg';
import Star from '../../../assets/star.svg';
import { getPostDetail } from "../../../api/postList";

export default function Detail() {
    const { id } = useParams();
    const postId = parseInt(id);
    const navigate = useNavigate();
    const [post, setPost] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

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
    }, [postId]);


    return (
        <S.Container>
            <Header />
            <S.Content>
                {post && (
                    <S.PostDetailMain>
                        <S.Profile>
                            <S.ProfileTop>
                                <img src={post.userInfoDTO.profile} alt={post.userInfoDTO.uid} />
                                <S.RightProfile>
                                    <span>{post.generation}기</span>
                                    <p>{post.userInfoDTO.uid}</p>
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
                                    <p>삭제</p>
                                    <p onClick={() => navigate(`/write/${postId}`)}>수정</p>
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