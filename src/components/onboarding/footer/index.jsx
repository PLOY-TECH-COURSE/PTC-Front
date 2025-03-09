import * as S from "./style.jsx";
import { useState } from "react";
import Xmark from '../../../assets/header/xmark.svg'
import FooterComponent from '../../../components/footer'

export default function Footer({change}){
    const data = [
        {
            id:1,
            title:"자습감독 자동배정",
            content:'AI를 활용하여 선생님들의 일정과 학교 일정을 반영한 자습 감독 자동 배정 기능입니다. 필요한 경우, 자습 감독 관리 선생님께서 수동으로 수정할 수도 있습니다.',
            blueText:'자습감독 자동 배정하러 가기'
        },
        {
            id:2,
            title:"자습 관리",
            content:'기존 구글 시트의 낮은 가독성을 보완하기 위해 학교 도면을 활용하여 한눈에 보기 쉽게 구성되어 있습니다. 이를 통해 학생들의 이석 상태도 직관적으로 확인할 수 있습니다.',
            blueText:'자습감독 하러가기'
        },
        {
            id:3,
            title:"자습감독 알림",
            content:'선생님들께서는 매일 바쁜 일정을 소화하시느라 가끔 자습 감독을 잊으실 때가 있습니다. 이를 방지하기 위해 홈페이지에서 자습 감독까지의 남은 날짜와, 전날 에는 메시지로 알림을 보냅니다.',
            blueText:'자습감독 일정'
        },
        {
            id:4,
            title:"학생이석 관리",
            content:'기존 구글 시트에서는 이석 관리와 학생 관리 페이지가 분리되어 있어 확인 및 기록에 불편함이 있었습니다. 이를 개선하여, 학생 이석 관리 페이지에서 수정 하면 학생 관리 페이지에도 자동 반영되도록 구현하였습니다.',
        },
        {
            id:5,
            title:"학생이석 관리",
            content:'기존 구글 시트에서는 이석 관리와 학생 관리 페이지가 분리되어 있어 확인 및 기록에 불편함이 있었습니다. 이를 개선하여, 학생 이석 관리 페이지에서 수정 하면 학생 관리 페이지에도 자동 반영되도록 구현하였습니다.',
        },
        
    ]
    const [skillShow, setSkillShow] = useState(Array(data.length).fill(false));
    const [skillHide, setSkillHide] = useState(Array(data.length).fill(false))

    // 클릭으로 활성화되어야할 요소가 바뀜 idx를 이용하여 활성화시킬 요소를 만듦
    const changeSkill = (idx) =>{
        const newSkill = Array(data.length).fill(false);

        if(idx > 4){
            const hide = Array(data.length).fill(false);
            hide[idx-data.length] = true;
            setSkillHide(hide);

            setTimeout(() => {
                const newSkill = [...skillShow];
                newSkill[idx - data.length] = false;
                setSkillShow(newSkill);
                setSkillHide(Array(data.length).fill(false));
            }, 300);
        }
        else {
            newSkill[idx] = true;
            setSkillShow(newSkill);
        }
    }
    return (
        <S.FooterContainer>
            <S.FAQ>
            <p>자주묻는질문</p>
            {/* {data.map((item, idx)=>{
                        if(!skillShow[idx]){
                            return(
                                <S.Section key={item.id} onClick={()=>changeSkill(idx)}>
                                    <p>{item.title}</p>
                                    <img src={Xmark} alt={'downIcon'} />
                                </S.Section>
                            )
                        }
                        else {
                            return(
                                <S.Dis key={item.id} $skill = {skillShow[idx]} $hide = {skillHide[idx]} onClick={()=>changeSkill(idx+5)}>
                                    <S.Name>
                                        <p>{item.title}</p>
                                        <img src={Xmark} alt={'upIcon'} />
                                    </S.Name>
                                    <p>{item.content}</p>
                                </S.Dis>
                            )}
                    })} */}
            </S.FAQ>
            <FooterComponent change={change} />
        </S.FooterContainer>
    )
}