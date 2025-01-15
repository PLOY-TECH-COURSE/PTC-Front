import * as S from '../style.jsx';
import HTMLIcon from '../../../../assets/html.svg'

export default function Html(){
    return(
        <S.Box>
            <S.Title>HTML</S.Title>
            <S.Section>
                <S.ContentName>
                    <img src={HTMLIcon} alt={'git'} width={60}/>
                    <h1>HTML</h1>
                </S.ContentName>
                <S.Content>
                    <S.Text>웹의 기본인 HTML의 기본개념에 대해서 알려드려요</S.Text>
                    <S.Text>시멘틱태그, 블록태그, img태그 등등<br/>
                        HTML의 각종 태그들을 알려드려요 </S.Text>
                </S.Content>
            </S.Section>
        </S.Box>
    )
}