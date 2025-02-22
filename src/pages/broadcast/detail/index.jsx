import * as S from './style';
import Header from '../../../components/header';
import { useParams } from 'react-router-dom';
import Bullhorn from '../../../assets/bullhorn.svg';

export default function Detail() {
    const { id } = useParams();
    const postId = parseInt(id);

    const PostDetail = [
        {
            "document": {
                "id": 1,
                "title": "서비스 점검 안내",
                "content": "2024년 12월 26일 02:00부터 04:00까지 시스템 점검이 예정되어 있습니다.",
                "date": "2024-12-25 10:30:00"
            },
            "user": {
                "mentor": "멘토",
                "name": "한태영",
                "profile": "https://velog.velcdn.com/images/huhon/post/5c510375-11a6-4fcf-864d-70db704c667f/image.png"
            }
        },
        {
            "document": {
                "id": 2,
                "title": "새로운 기능 출시!",
                "content": "사용자 피드백을 반영한 신규 기능이 추가되었습니다.",
                "date": "2024-12-20 14:15:00"
            },
            "user": {
                "name": "한태영",
                "mentor": "멘토",
                "profile": "https://velog.velcdn.com/images/huhon/post/5c510375-11a6-4fcf-864d-70db704c667f/image.png"
            }
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
                                    <span>{post.user.mentor}</span>
                                    <p>{post.user.name}</p>
                                </S.RightProfile>
                            </S.ProfileTop>
                            <S.ProfileBottom>
                                <span>생성일자 {new Date(post.document.date).toISOString().split('T')[0]}</span>
                            </S.ProfileBottom>
                        </S.Profile>
                        <S.PostDetailData>
                            <S.PostDetailDataTop>
                                <img src={Bullhorn} />
                                <h1>{post.document.title}</h1>
                                <S.Edit>
                                    <p>삭제</p>
                                    <p>수정</p>
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