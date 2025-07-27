import * as S from "./style.jsx";
import NoteBook from "../../../assets/onboarding/introduce/notebook.svg"
import NoteBook2 from "../../../assets/onboarding/introduce/notebook2.svg"


export default function PTCIntroduce({isAnimation}){
    const Skills = [
        {name : "IT 기초 배우기", des : "Git & GitHub, HTML, CSS, JavaScript, 네트워크 기초 등을<br/> 익힐 수 있어요.",  time:0.7, emote : '🖥️' },
        {name : "실습과 프로젝트", des : "직접 코드를 작성해 보고,<br/> 간단한 프로젝트를 통해 배운 내용을  실습하면서 익힐 수 있어요.",  time:0.9, emote: '🛠️'},
        {name : "1:1 멘토링", des : "선배들의 도움을 받아<br/> IT 공부와 학교 생활에 적응해요.",  time:1.1, emote: '🤝'},
    ]
  console.log(isAnimation)
    return(
        <S.PTCContainer>
            <S.BlueBox />
            <S.Wrap>
                <S.Main>
                  <S.SkillBox
                    $isAnimation = {isAnimation}
                    $isLeft = {true}
                    $time={0.9}
                  >
                    <S.Title>🖥️ 기초 지식</S.Title>
                    <h4>#베이스</h4>
                    <S.Sub $isLeft={true}>학교생활이나 전공과목에대한<br/>
                      기초 지식을 향상시킬 수 있어요</S.Sub>
                  </S.SkillBox>
                  <S.SkillBox />
                  <S.SkillBox />
                  <S.SkillBox />
                  <S.SkillBox />
                  <S.SkillBox />
                  <S.SkillBox />
                  <S.SkillBox
                    $isLeft = {false}
                    $isAnimation = {isAnimation}
                    $time={1}
                  >
                    <S.Title>🤝 1대1 멘토링</S.Title>
                    <h4>#베이스</h4>
                    <S.Sub $isLeft={false}>1대1 멘토링을 통해<br/>
                      더욱 집중적인 멘토링이 가능해요</S.Sub>
                  </S.SkillBox>
                  <S.NoteBook
                    $width="50vw"
                    $top="5%"
                    $right="15%"
                    $isAnimation={isAnimation}
                    $time={1.1}
                  >
                    <img src={NoteBook} alt="notebook" />
                  </S.NoteBook>
                  <S.NoteBook
                    $width="50vw"
                    $top="25%"
                    $left="15%"
                    $isAnimation={isAnimation}
                    $time={1.3}
                  >
                    <img src={NoteBook2} alt="notebook" />
                  </S.NoteBook>
                </S.Main>
            </S.Wrap>
        </S.PTCContainer>
    )
}