import * as S from './style';

const SurveyItem = ({ post, onClick }) => {

    return (
        <S.RowData onClick={() => onClick(post.documents_id)}>
            <S.PostRightData>
                <S.PostRightTopData>
                    <S.PostData>{post.title}</S.PostData>
                    <p>{post.introduction}</p>
                </S.PostRightTopData>
                {/*채점 이미지*/}
                <S.PostRightBottomData>
                    {/*순서 정하기 컴포넌트 호출*/}
                    <S.PostbottomData>
                        <span>{post.date}</span>
                    </S.PostbottomData>
                </S.PostRightBottomData>
            </S.PostRightData>
        </S.RowData>
    );
};

export default SurveyItem;