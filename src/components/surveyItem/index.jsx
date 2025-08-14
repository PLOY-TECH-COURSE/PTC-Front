import * as S from './style';
import Order from "../order/index.jsx";
import {useState} from "react";

const SurveyItem = ({ post, onClick }) => {
    const [isClick, setIsClick] = useState(false);
    const handleClick = () => {
        setIsClick(!isClick);
    }
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
                    <div>
                        <div onClick={handleClick}>순서 정하기</div>
                        {isClick && <Order />}
                    </div>
                    <S.PostbottomData>
                        <span>{post.date}</span>
                    </S.PostbottomData>
                </S.PostRightBottomData>
            </S.PostRightData>
        </S.RowData>
    );
};

export default SurveyItem;