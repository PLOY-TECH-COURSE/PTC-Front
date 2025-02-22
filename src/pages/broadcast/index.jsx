import * as S from './style';
import Header from '../../components/header/index';
import { useNavigate } from "react-router-dom";

export default function () {
    const navigate = useNavigate();

    const handlePostClick = (id) => {
        navigate(`/announcement/${id}`);
    };

    const PostList = [
        {
            "announcements_id": 1,
            "title": "서비스 점검 안내",
            "content": "2024년 12월 26일 02:00부터 04:00까지 시스템 점검이 예정되어 있습니다.",
            "thumbnail": "https://velog.velcdn.com/images/huhon/post/5c510375-11a6-4fcf-864d-70db704c667f/image.png",
            "date": "2024-12-25T10:30:00Z",
            "name": "한태영"
        },
        {
            "announcements_id": 2,
            "title": "새로운 기능 출시!",
            "content": "사용자 피드백을 반영한 신규 기능이 추가되었습니다.",
            "thumbnail": "https://velog.velcdn.com/images/huhon/post/5c510375-11a6-4fcf-864d-70db704c667f/image.png",
            "date": "2024-12-20T14:15:00Z",
            "name": "한태영"
        }
    ]


    return (
        <S.Container>
            <Header />
            <S.Content>
                <S.PostListTop>
                    <h1>공지사항</h1>
                </S.PostListTop>
                <S.PostListMain>
                    {PostList.map((row, index) => (
                        <S.RowData key={index} onClick={() => handlePostClick(row.announcements_id)}>
                            <S.PostImg><img src={row.thumbnail} /></S.PostImg>
                            <S.PostRightData>
                                <S.PostRightTopData>
                                    <S.PostData>{row.title}</S.PostData>
                                    <p>{row.content}</p>
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
                    ))}
                </S.PostListMain>

            </S.Content>
        </S.Container>
    );
}