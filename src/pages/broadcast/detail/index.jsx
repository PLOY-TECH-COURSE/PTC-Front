import * as S from './style';
import Header from '../../../components/header';
import { useParams } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';
import Bullhorn from '../../../assets/bullhorn.svg';
import { getBroadcastDetail, deleteBroadcast } from '../../../api/broadcast';

export default function Detail() {
    const navigate = useNavigate();
    const { id } = useParams();
    const postId = parseInt(id);
    const [post, setPost] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        setLoading(true);
        setError(null);

        getBroadcastDetail(postId)
            .then((data) => {
                setPost(data);
                setLoading(false);
            })
            .catch((err) => {
                setError('게시물을 불러오는 데 실패했습니다.');
                setLoading(false);
            });
    }, [postId]);

    const handleDelete = () => {
        if (window.confirm('정말로 삭제하시겠습니까?')) {
            deleteBroadcast(postId)
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

    const handleEdit = () => {
        navigate(`/write/${postId}`, {
            state: {
                title: post.document.title,
                content: post.document.content,
                thumbnail: post.document.thumbnail,
                introduction: post.document.introduction,
                isAnnouncements: true,
                hash_tag: post.document.hash_tag || [],
            },
        });
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
                            </S.ProfileBottom>
                        </S.Profile>
                        <S.PostDetailData>
                            <S.PostDetailDataTop>
                                <img src={Bullhorn} />
                                <h1>{post.document.title}</h1>
                                <S.Edit>
                                    <p onClick={handleDelete}>삭제</p>
                                    <p onClick={handleEdit}>수정</p>
                                </S.Edit>
                            </S.PostDetailDataTop>
                            <span>{post.document.content}</span>
                        </S.PostDetailData>
                    </S.PostDetailMain>
                )}
            </S.Content>
        </S.Container>
    );
}