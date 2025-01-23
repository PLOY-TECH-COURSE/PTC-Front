import * as S from '../style.jsx';
import CSSIcon from '../../../../assets/onboarding/track-introduce/css.svg'

export default function Css(){
    return(
        <S.Box>
            <S.Title>CSS</S.Title>
            <S.Section>
                <S.ContentName>
                    <img src={CSSIcon} alt={'git'} width={40}/>
                    <h1>CSS</h1>
                </S.ContentName>
                <S.Content>
                    <S.Text>HTML을 꾸며주는 CSS의 기본개념을 알려드려요</S.Text>
                    <S.Text>flex, 그리드 레이아웃, 반응형, transform 등<br/>
                        다양한 css 활용을 알려드려요</S.Text>
                </S.Content>
            </S.Section>
        </S.Box>
    )
}