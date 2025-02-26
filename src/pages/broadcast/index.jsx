import * as S from './style';
import Header from '../../components/header/index';
import { useNavigate } from "react-router-dom";
import { useState, useEffect } from 'react';
import { getBroadcastList } from '../../api/broadcast';
import Loading from "../../components/loading";
import makeDocument from '../../utils/makeDocument';

export default function () {
    const navigate = useNavigate();
    const [posts, setPosts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        setLoading(true);
    
        getBroadcastList({ start: 0 })
            .then((data) => {
                setPosts(data || []);
                console.log(data);
                setLoading(false);
            })
            .catch((error) => {
                console.error("게시물을 불러오는 데 실패했습니다.", error);
                setError(error.message || "게시물을 불러오는 데 실패했습니다.");
                setLoading(false);
            });
    }, []);    

    const handlePostClick = (id) => {
        navigate(`/announcement/${id}`);
    };

    return (
        <S.Container>
            {loading && <Loading />}
            <Header />
            <S.Content>
                <S.PostListTop>
                    <h1>공지사항</h1>
                </S.PostListTop>
                <S.PostListMain>
                    {posts.length === 0 ? (
                        <h2>등록된 공지사항이 없습니다.</h2>
                    ) : (
                        posts.map((row, index) => (
                            <S.RowData key={index} onClick={() => handlePostClick(row.announcements_id)}>
                                <S.PostImg><img src={row.thumbnail} alt="thumbnail" /></S.PostImg>
                                <S.PostRightData>
                                    <S.PostRightTopData>
                                        <S.PostData>{row.title}</S.PostData>
                                        <div>{makeDocument(row.content)}</div>
                                    </S.PostRightTopData>
                                    <span />
                                    <S.PostRightBottomData>
                                        <S.PostbottomData>
                                            <S.Name>{row.name}</S.Name>
                                            <span>{new Date(row.date).toISOString().split('T')[0]}</span>
                                        </S.PostbottomData>
                                    </S.PostRightBottomData>
                                </S.PostRightData>
                            </S.RowData>
                        ))
                    )}
                </S.PostListMain>
            </S.Content>
        </S.Container>
    );
}
