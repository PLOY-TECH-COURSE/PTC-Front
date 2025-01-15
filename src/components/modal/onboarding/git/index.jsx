import * as S from '../style.jsx';
import GitImg from '../../../../assets/github.svg'
import Record from '../../../../assets/skill2.svg';

export default function Git(){
    return(
        <S.Box>
            <S.Title>버전관리와 과제제출</S.Title>
            <S.Section>
                <S.ContentName>
                    <img src={GitImg} alt={'git'} width={50}/>
                    <h1>Git hub</h1>
                </S.ContentName>
                <S.Content>
                    <S.Text>GitHub를 이용하여 버전관리하는 방법을 알려드려요</S.Text>
                    <S.Text>GitHub로 팀 프로젝트 협업을 실습하고<br/>
                        브랜치 전략과 병합 과정을 통해 실전을 경험해봅시다. </S.Text>
                </S.Content>
            </S.Section>
            <S.Section>
                <S.ContentName>
                    <img src={Record} alt={'skill'} width={50}/>
                    <h1>기록</h1>
                </S.ContentName>
                <S.Content>
                    <S.Text>선배님의 포트폴리오를 보여주며 어떤것이 있는지 알려줘요</S.Text>
                    <S.Text>노션이나 벨로그에 직접 공부한것을 기록하고<br/>
                        포트폴리오 작성법에 대해서도 알려드려요</S.Text>
                </S.Content>
            </S.Section>
        </S.Box>
    )
}