import * as S from "./style.jsx";
import LogoIcon from '../../../assets/onboarding/introduce/Group 8782.svg';


export default function PTCIntroduce({isAnimation}){
    const Skills = [
        {name : "IT 기초 배우기", des : "Git & GitHub, HTML, CSS, JavaScript, 네트워크 기초 등을<br/> 익힐 수 있어요.",  time:0.7, emote : '🖥️' },
        {name : "실습과 프로젝트", des : "직접 코드를 작성해 보고,<br/> 간단한 프로젝트를 통해 배운 내용을  실습하면서 익힐 수 있어요.",  time:0.9, emote: '🛠️'},
        {name : "1:1 멘토링", des : "선배들의 도움을 받아<br/> IT 공부와 학교 생활에 적응해요.",  time:1.1, emote: '🤝'},
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
                        <S.Title $isAnimation={isAnimation}>여러분에게 다음과 같은 도움을 줄 수 있어요</S.Title>
                    </S.Section>
                    <S.Skill>
                        {Skills.map((item, index)=>{
                            return(
                                <S.SkillBox $isAnimation={isAnimation} $time={item.time} key={index}>
                                    <S.Emote>{item.emote}</S.Emote>
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