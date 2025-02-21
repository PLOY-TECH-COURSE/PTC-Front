import { useState } from "react";
import * as S from './style';
import Header from '../../components/header';
import Search from '../../assets/search.svg';
import Like from '../../assets/like.svg';
import { useNavigate } from "react-router-dom";

export default function () {
    const [activeSort, setActiveSort] = useState("recent");
    const navigate = useNavigate();

    const handlePostClick = (id) => {
        navigate(`/post/${id}`);
    };

    const PostList = [
        {
            "document_id": 10,
            "title": "플테코 첫 수업",
            "introduction": "소마고 선배님들께 배운 재미난 HTML 이야기",
            "date": "2024-12-25 10:24:34",
            "user_id": 12,
            "name": "허온",
            "profile": "https://velog.velcdn.com/images/huhon/post/5c510375-11a6-4fcf-864d-70db704c667f/image.png",
            "thumbnail": "https://velog.velcdn.com/images/huhon/post/5c510375-11a6-4fcf-864d-70db704c667f/image.png",
            "likes": 10,
            "hash_tag": ["혼공컴운", "HTML"]
        },
        {
            "document_id": 11,
            "title": "두 번째 수업",
            "introduction": "CSS를 배우고 스타일링에 대해 고민한 시간",
            "date": "2025-01-10 14:00:00",
            "user_id": 13,
            "name": "윤도훈",
            "profile": "https://cdn.newsworks.co.kr/news/photo/202002/433057_327801_345.jpg",
            "thumbnail": "https://velog.velcdn.com/images/huhon/post/5c510375-11a6-4fcf-864d-70db704c667f/image.png",
            "likes": 5,
            "hash_tag": ["CSS", "디자인"]
        },
        {
            "document_id": 12,
            "title": "JavaScript 기초",
            "introduction": "변수, 함수, 이벤트 핸들링 기초 학습",
            "date": "2025-01-15 09:30:00",
            "user_id": 14,
            "name": "박소은",
            "profile": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAT4AAACfCAMAAABX0UX9AAAAA1BMVEVKT1omKN7sAAAASElEQVR4nO3BMQEAAADCoPVPbQ0PoAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABODcYhAAEl463hAAAAAElFTkSuQmCC",
            "thumbnail": "https://velog.velcdn.com/images/huhon/post/5c510375-11a6-4fcf-864d-70db704c667f/image.png",
            "likes": 750,
            "hash_tag": ["JavaScript", "프로그래밍"]
        },
        {
            "document_id": 13,
            "title": "React 시작하기",
            "introduction": "React의 기본 개념과 컴포넌트 이해",
            "date": "2025-02-01 16:45:00",
            "user_id": 15,
            "name": "이효준",
            "profile": "https://velog.velcdn.com/images/huhon/post/5c510375-11a6-4fcf-864d-70db704c667f/image.png",
            "thumbnail": "https://velog.velcdn.com/images/huhon/post/5c510375-11a6-4fcf-864d-70db704c667f/image.png",
            "likes": 10,
            "hash_tag": ["React", "프론트엔드"]
        },
        {
            "document_id": 14,
            "title": "API와 데이터 통신",
            "introduction": "REST API와 Fetch 사용법 학습",
            "date": "2025-02-10 13:20:00",
            "user_id": 16,
            "name": "허동운",
            "profile": "https://velog.velcdn.com/images/huhon/post/5c510375-11a6-4fcf-864d-70db704c667f/image.png",
            "thumbnail": "https://velog.velcdn.com/images/huhon/post/5c510375-11a6-4fcf-864d-70db704c667f/image.png",
            "likes": 80,
            "hash_tag": ["API", "백엔드", "프론트엔드"]
        },
        {
            "document_id": 15,
            "title": "React 시작하기",
            "introduction": "React의 기본 개념과 컴포넌트 이해",
            "date": "2025-02-01 16:45:00",
            "user_id": 17,
            "name": "조재민",
            "profile": "https://velog.velcdn.com/images/huhon/post/5c510375-11a6-4fcf-864d-70db704c667f/image.png",
            "thumbnail": "https://velog.velcdn.com/images/huhon/post/5c510375-11a6-4fcf-864d-70db704c667f/image.png",
            "likes": 60,
            "hash_tag": ["React", "프론트엔드"]
        },
        {
            "document_id": 16,
            "title": "API와 데이터 통신",
            "introduction": "REST API와 Fetch 사용법 학습",
            "date": "2025-02-10 13:20:00",
            "user_id": 18,
            "name": "조아라",
            "profile": "https://velog.velcdn.com/images/huhon/post/5c510375-11a6-4fcf-864d-70db704c667f/image.png",
            "thumbnail": "https://velog.velcdn.com/images/huhon/post/5c510375-11a6-4fcf-864d-70db704c667f/image.png",
            "likes": 9,
        }
    ];



    return (
        <S.Container>
            <Header />
            <S.Content>
                <S.PostListTop>
                    <S.Search>
                        <img src={Search} width={20} />
                        <S.Input type="text" placeholder="검색어를 입력하세요" />
                    </S.Search>
                </S.PostListTop>

                <S.Sort>
                    <S.Recent
                        onClick={() => setActiveSort("recent")}
                        active={activeSort === "like"}
                    >
                        <button /><p>최신순</p>
                    </S.Recent>

                    <S.Like
                        onClick={() => setActiveSort("like")}
                        active={activeSort === "recent"}
                    >
                        <button /><p>좋아요순</p>
                    </S.Like>
                </S.Sort>
                <S.PostListMain>
                    {PostList.map((row, index) => (
                        <S.RowData key={index}  onClick={() => handlePostClick(row.document_id)}>
                            <S.PostImg><img src={row.thumbnail} /></S.PostImg>
                            <S.PostRightData>
                                <S.PostRightTopData>
                                    <S.PostData>{row.title}</S.PostData>
                                    <p>{row.introduction}</p>
                                </S.PostRightTopData>
                                <span />
                                <S.PostRightBottomData>
                                    <S.PostProfile><img src={row.profile} /></S.PostProfile>
                                    <S.PostbottomData>
                                        <S.Name>{row.name}</S.Name>
                                        <span>{new Date(row.date).toISOString().split('T')[0]}</span>
                                    </S.PostbottomData>
                                    <S.PostLike><img src={Like} /><p>{row.likes}</p></S.PostLike>
                                </S.PostRightBottomData>
                            </S.PostRightData>
                        </S.RowData>
                    ))}
                </S.PostListMain>

            </S.Content>
        </S.Container>
    );
}
