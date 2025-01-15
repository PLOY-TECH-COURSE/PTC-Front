import * as S from '../style.jsx';
import JSIcon from '../../../../assets/javascript.svg'

export default function JS(){
    return(
        <S.Box>
            <S.Title>JavaScript</S.Title>
            <S.Section>
                <S.ContentName>
                    <img src={JSIcon} alt={'git'} width={100}/>
                    <h1>JavaScript</h1>
                </S.ContentName>
                <S.Content>
                    <S.Text>웹을 동적으로 만들어주는 자바스크립트의 기본개념을 알려드려요</S.Text>
                    <S.Text>다양한 자바스크립트의 문법이나<br/>
                        네임 컨벤션, 자료형 등등을 알려드려요</S.Text>
                </S.Content>
            </S.Section>
        </S.Box>
    )
}