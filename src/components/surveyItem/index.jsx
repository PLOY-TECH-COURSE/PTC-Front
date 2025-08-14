import * as S from './style';
import Order from "../order/index.jsx";
import {useState} from "react";
import Complete from "../../assets/survey/complete.svg"
import InComplete from "../../assets/survey/incomplete.svg"

const SurveyItem = ({ post, onClick }) => {
    const [complete, setComplete] = useState(false);
    const [isClick, setIsClick] = useState(false);
    const handleClick = () => {
        setIsClick(!isClick);
    }
    return (
        <S.RowData onClick={() => onClick(post.documents_id)}>
            <S.PostMainData>
                <S.PostRightTopData>
                    <S.PostData>{post.title}</S.PostData>
                    <p>{post.introduction}</p>
                </S.PostRightTopData>
                <S.CompleteImage src={!complete ? Complete : InComplete} alt="채점" />
                <S.PostRightBottomData>
                    <S.OrderSelector>
                        <div onClick={handleClick}>순서 정하기</div>
                        {isClick && <Order />}
                    </S.OrderSelector>
                    <S.PostbottomData>
                        <span>{post.date}</span>
                    </S.PostbottomData>
                </S.PostRightBottomData>
            </S.PostMainData>
        </S.RowData>
    );
};

export default SurveyItem;