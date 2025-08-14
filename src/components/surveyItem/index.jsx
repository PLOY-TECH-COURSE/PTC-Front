import * as S from './style';
import Order from "../order/index.jsx";
import {useState} from "react";
import Complete from "../../assets/survey/complete.svg"
import InComplete from "../../assets/survey/incomplete.svg"
import {useRecoilValue} from "recoil";
import {authAtom} from "../../recoil/authAtom.js";
import OrderList from "../orderList/index.jsx";
import Toggle from "../../assets/survey/toggle.svg"
import ReverseToggle from "../../assets/survey/reverseToggle.svg"

const SurveyItem = ({ post, onClick,form_id }) => {
    const auth = useRecoilValue(authAtom)
    const [complete, setComplete] = useState(false);
    const [isClick, setIsClick] = useState(false);
    const handleClick = () => {
        setIsClick(!isClick);
    }
    return (
        <S.RowData onClick={() => onClick(post.id)}>
            <S.PostMainData>
                <S.PostRightTopData>
                    <S.PostData>{post.title}</S.PostData>
                    <p>{post.description}</p>
                </S.PostRightTopData>
                <S.CompleteImage src={!post.completed ? Complete : InComplete} alt="채점" />
                <S.PostRightBottomData>
                    <S.OrderSelector>
                        {auth.role === "ROLE_SUPERADMIN" ? (
                            <>
                                <S.OrderToggle onClick={handleClick}>
                                    <div>순서 정하기</div>
                                    <img src={isClick?Toggle:ReverseToggle} alt={"토글"}/>
                                </S.OrderToggle>
                                {isClick && <Order form_id={form_id}/>}
                            </>
                        ) : (
                            <>
                                <S.OrderToggle onClick={handleClick}>
                                    <div>순서</div>
                                    <img src={isClick?Toggle:ReverseToggle} alt={"토글"}/>
                                </S.OrderToggle>
                                {isClick && <OrderList/>}
                            </>
                        )}
                    </S.OrderSelector>
                    <S.PostbottomData>
                        <span>{post.createdAt}</span>
                    </S.PostbottomData>
                </S.PostRightBottomData>
            </S.PostMainData>
        </S.RowData>
    );
};

export default SurveyItem;