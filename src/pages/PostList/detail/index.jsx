import { useState } from "react";
import * as S from './style';
import Header from '../../../components/header';
import { useParams } from 'react-router-dom';
import Like2 from '../../../assets/like2.svg';
import Star from '../../../assets/star.svg';

export default function Detail() {
    const { id } = useParams();
    const postId = parseInt(id);

    const PostDetail = [
        {
            "document": {
                "id": 10,
                "title": "플테코 첫 수업",
                "content": "소마고 선배님들께 배운 재미난 HTML 이야기",
                "date": "2024-12-25 10:24:34"
            },
            "user": {
                "id": 12,
                "name": "허온",
                "profile": "https://velog.velcdn.com/images/huhon/post/5c510375-11a6-4fcf-864d-70db704c667f/image.png"
            },
            "hash_tag": [
                "혼공컴운",
                "HTML"
            ],
            "likes": 10,
            "like_on": true,
            "favorite_on": false,
            "generation": 1
        },
        {
            "document": {
                "id": 11,
                "title": "두 번째 수업",
                "content": "CSS를 배우고 스타일링에 대해 고민한 시간",
                "date": "2025-01-10 14:00:00"
            },
            "user": {
                "id": 13,
                "name": "윤도훈",
                "profile": "https://cdn.newsworks.co.kr/news/photo/202002/433057_327801_345.jpg"
            },
            "hash_tag": [
                "CSS",
                "디자인"
            ],
            "likes": 5,
            "like_on": false,
            "favorite_on": true,
            "generation": 2
        },
        {
            "document": {
                "id": 12,
                "title": "JavaScript 기초",
                "content": "변수, 함수, 이벤트 핸들링 기초 학습",
                "date": "2025-01-15 09:30:00"
            },
            "user": {
                "id": 14,
                "name": "박소은",
                "profile": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAT4AAACfCAMAAABX0UX9AAAAA1BMVEVKT1omKN7sAAAASElEQVR4nO3BMQEAAADCoPVPbQ0PoAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABODcYhAAEl463hAAAAAElFTkSuQmCC"
            },
            "hash_tag": [
                "JavaScript",
                "프로그래밍"
            ],
            "likes": 750,
            "like_on": true,
            "favorite_on": false,
            "generation": 3
        },
        {
            "document": {
                "id": 13,
                "title": "React 시작하기",
                "content": "React의 기본 개념과 컴포넌트 이해",
                "date": "2025-02-01 16:45:00"
            },
            "user": {
                "id": 15,
                "name": "이효준",
                "profile": "https://velog.velcdn.com/images/huhon/post/5c510375-11a6-4fcf-864d-70db704c667f/image.png"
            },
            "hash_tag": [
                "React",
                "프론트엔드"
            ],
            "likes": 10,
            "like_on": false,
            "favorite_on": true,
            "generation": 4
        },
        {
            "document": {
                "id": 14,
                "title": "API와 데이터 통신",
                "content": "REST API와 Fetch 사용법 학습",
                "date": "2025-02-10 13:20:00"
            },
            "user": {
                "id": 16,
                "name": "허동운",
                "profile": "https://velog.velcdn.com/images/huhon/post/5c510375-11a6-4fcf-864d-70db704c667f/image.png"
            },
            "hash_tag": [
                "API",
                "백엔드",
                "프론트엔드"
            ],
            "likes": 80,
            "like_on": true,
            "favorite_on": false,
            "generation": 5
        },
        {
            "document": {
                "id": 15,
                "title": "React 시작하기",
                "content": "React의 기본 개념과 컴포넌트 이해",
                "date": "2025-02-01 16:45:00"
            },
            "user": {
                "id": 17,
                "name": "조재민",
                "profile": "https://velog.velcdn.com/images/huhon/post/5c510375-11a6-4fcf-864d-70db704c667f/image.png"
            },
            "hash_tag": [
                "React",
                "프론트엔드"
            ],
            "likes": 60,
            "like_on": false,
            "favorite_on": true,
            "generation": 6
        },
        {
            "document": {
                "id": 16,
                "title": "API와 데이터 통신",
                "content": "REST API와 Fetch 사용법 학습",
                "date": "2025-02-10 13:20:00"
            },
            "user": {
                "id": 18,
                "name": "조아라",
                "profile": "https://velog.velcdn.com/images/huhon/post/5c510375-11a6-4fcf-864d-70db704c667f/image.png"
            },
            "hash_tag": [
                "API",
                "프론트엔드"
            ],
            "likes": 9,
            "like_on": true,
            "favorite_on": true,
            "generation": 7
        }
    ]


    const post = PostDetail.find(post => post.document.id === postId);

    return (
        <S.Container>
            <Header />
            <S.Content>
                {post && (
                    <S.PostDetailMain>
                        <S.Profile>
                            <S.ProfileTop>
                                <img src={post.user.profile} alt={post.user.name} />
                                <S.RightProfile>
                                    <span>{post.generation}기</span>
                                    <p>{post.user.name}</p>
                                </S.RightProfile>
                            </S.ProfileTop>
                            <S.ProfileBottom>
                                <span>생성일자 {new Date(post.document.date).toISOString().split('T')[0]}</span>
                                <S.PostLike><img src={Like2} /><p>{post.likes}</p></S.PostLike>
                            </S.ProfileBottom>
                        </S.Profile>
                        <S.PostDetailData>
                            <S.PostDetailDataTop>
                                <h1>{post.document.title}</h1>
                                <img src={Star} />
                                <S.Edit>
                                    <p>삭제</p>
                                    <p>수정</p>
                                </S.Edit>
                            </S.PostDetailDataTop>
                            <span>{post.hash_tag.map(tag => `#${tag}`).join(' ')}</span>
                            <p>{post.document.content}</p>
                        </S.PostDetailData>
                    </S.PostDetailMain>
                )}
            </S.Content>
        </S.Container>
    );
}