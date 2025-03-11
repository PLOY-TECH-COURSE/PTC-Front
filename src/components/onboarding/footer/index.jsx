import * as S from "./style.jsx";
import { useState } from "react";
import Xmark from '../../../assets/header/xmark.svg'
import FooterComponent from '../../../components/footer'

export default function Footer({change}){
    const data = [

        {
            id:2,
            title:"전공 관련 지식이 부족한데 신청해도 무리가 없을까요?",
            content:'기술적인 부분을 모르겠다면 자신에 대한 내용을 더욱 많이 써주세요.',
        },
        {
            id:1,
            title:"선발기준이 어떻게 되나요?",
            content:'본인의 장단점을 잘 파악하고 있는 학생, 발표를 할때 청중을 바라보고 하는 학생을 우선시합니다.',
        },
        {
            id:3,
            title:"테크코스에 들어가면 무엇을 하게 되나요?",
            content:'총 16주에 걸쳐 선배들이 제공하는 과제로 수업하게 되고 2주마다 공식적인 오프라인 미팅을 갖게 됩니다. 이때는 2주간 배운 내용 중 한 부분을 선택해 프레젠테이션을 진행하게 됩니다. 상세 일정은 합격 후 공지해드리도록 하겠습니다.',
        },
        {
            id:4,
            title:"테크코스에서 불합격해도 과제 내용 공유해주시면 안 되나요?",
            content:'불합격하신 경우, 과제공유는 따로 해주지 않습니다. 하지만 학습한 내용을 정리하여 수강생들이 플테코 블로그에 공유할 예정이니 참고하시면 좋을 것 같습니다.',
        },
        {
            id:5,
            title:"서비스 사용에 문제가 생겼어요 어떻게 해야 하나요?",
            content:'서비스 이용 중 문제가 발생하면 이메일 또는 인스타그램 bssm_ploy를 통해 문의해 주세요.',
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
            <S.UnBox />
            <S.FAQ>
            <p>자주묻는질문</p>
            {data.map((item, idx)=>{
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
                    })}
            </S.FAQ>
            <FooterComponent change={change} />
        </S.FooterContainer>
    )
}