import * as S from "./style.jsx";
import LogoIcon from '../../../assets/onboarding/introduce/Group 8782.svg';
import Skill1 from '../../../assets/onboarding/introduce/skill1.svg';
import Skill2 from '../../../assets/onboarding/introduce/skill2.svg';
import Skill3 from '../../../assets/onboarding/introduce/skill3.svg';

export default function PTCIntroduce({isAnimation}){
    const Skills = [
        {name : "기초 지식", des : "학교생활이나 전공과목에대한 <br/> 기초 지식을 향상시킬 수 있어요", src: Skill1, time:0.7},
        {name : "1대1 멘토링", des : "1대1 멘토링을 통해 <br/> 더욱 집중적인 멘토링이 가능해요", src: Skill2, time:0.9},
        {name : "발표 능력", des : "버벅이지않고 말 할 수 있도록 <br/> 발표 능력을 향상시킬 수 있어요", src: Skill3, time:1.1},
    ]
    return(
        <S.PTCContainer>
            <S.BlueBox >
                <S.LogoIcon src={LogoIcon} alt={'logoIcon'} />
            </S.BlueBox>
            <S.Wrap>
                <S.Main>
                    <S.Section >
                        <S.BlueText $isAnimation={isAnimation}>플로이테크코스란?</S.BlueText>
                        <S.Title $isAnimation={isAnimation}>선배들이 멘토가 되어</S.Title>
                        <S.Title $isAnimation={isAnimation}>다음과 같은 이점을 줄 수 있어요</S.Title>
                    </S.Section>
                    <S.Skill>
                        {Skills.map((item, index)=>{
                            return(
                                <S.SkillBox $isAnimation={isAnimation} $time={item.time} key={index}>
                                    <S.SkillImg src={item.src} alt={'skillIcon'} />
                                    <S.BlueText2>{item.name}</S.BlueText2>
                                    <S.Text dangerouslySetInnerHTML={{ __html: item.des }} />
                                </S.SkillBox>
                            )
                        })}
                    </S.Skill>
                </S.Main>
            </S.Wrap>
        </S.PTCContainer>
    )
}