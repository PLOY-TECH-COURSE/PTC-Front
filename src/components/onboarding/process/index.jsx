import * as S from './style.jsx'
import Mail from '../../../assets/onboarding/process/mail.svg'
import BlueArrow from '../../../assets/onboarding/process/blueArrow.svg'
import UpWhite from '../../../assets/onboarding/process/upBlack.svg';
import DownWhite from '../../../assets/onboarding/process/downBlack.svg';

export default function Process({change, isAnimation}) {
    const content = [
        {id : 1, title : "참가 신청", subText : "03.10(월) ~ 03.21(금)<br /> 23:59:59 마감", status : true},
        {id : 2, title : "1차 합격 발표", subText : "03.24(월) <br /> 22시", status : false},
        {id : 3, title : "오프라인 면접", subText : "03.25(화)<br />상세일정 이메일로 안내", status : true},
        {id : 4, title : "최종 합격 발표", subText : "03.30(일)<br />22시", status : false},
    ]
    return (
        <S.ProcessContainer>
            <S.Wrap>
                <S.ArrowUp onClick={()=>change(3)}>
                    <S.Black>
                        <img src={UpWhite} alt={'up'}/>
                    </S.Black>
                    <p>Track</p>
                </S.ArrowUp>
                <S.Title $isAnimation = {isAnimation}>
                    <S.BlueText>Recruiting Process</S.BlueText>
                    <S.Text>최종적으로 7명을 선정하여 멘토링을 진행해요</S.Text>
                </S.Title>
                <S.Main $isAnimation = {isAnimation}>
                    {content.map((item)=>
                       <>
                           <S.Section $status = {item.status}>
                               <S.Circle $status = {item.status}>{item.id}</S.Circle>
                               <S.MainText $status = {item.status}>{item.title}</S.MainText>
                               <S.SubText $status = {item.status} dangerouslySetInnerHTML={{ __html: item.subText}} />
                           </S.Section>
                           {item.id !== 4 && <img src={BlueArrow} alt={'arrow'} />}
                       </>
                    )}
                </S.Main>
                <S.Mail $isAnimation = {isAnimation}>
                    <img src={Mail} alt={"mailIcon"} />
                    궁금한 내용은 ploytechcourse@gmail.com 로 문의해주세요
                </S.Mail>
                <S.ArrowDown onClick={()=>change(5)}>
                    <p>Mento</p>
                    <S.Black >
                        <img src={DownWhite} alt={'down'}/>
                    </S.Black>
                </S.ArrowDown>
            </S.Wrap>
        </S.ProcessContainer>
    )
}