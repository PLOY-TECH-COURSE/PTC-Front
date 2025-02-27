import * as S from './style';
import Like from '../../assets/like.svg';

const PostItem = ({ post, onClick }) => {

    return (
        <S.RowData onClick={() => onClick(post.documents_id)}>
            <S.PostImg><img src={post.thumbnail} alt="Thumbnail" /></S.PostImg>
            <S.PostRightData>
                <S.PostRightTopData>
                    <S.PostData>{post.title}</S.PostData>
                    <p>{post.introduction}</p>
                </S.PostRightTopData>
                <span />
                <S.PostRightBottomData>
                    <S.PostProfile><img src={post.profile} alt="Profile" /></S.PostProfile>
                    <S.PostbottomData>
                        <S.Name>{post.name}</S.Name>
                        <span>{new Date(post.date).toISOString().split('T')[0]}</span>
                    </S.PostbottomData>
                    <S.PostLike><img src={Like} alt="Like" /><p>{post.likes}</p></S.PostLike>
                </S.PostRightBottomData>
            </S.PostRightData>
        </S.RowData>
    );
};

export default PostItem;