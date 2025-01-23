import * as S from "./style.jsx";
import Header from '../../header/index.jsx'
import Logo from '../../../assets/header/Logo.svg';
import Icon from '../../../assets/onboarding/first/main.svg'


export default function First(){
    return(
        <S.FirstContainer>
            <S.HeaderBox>
                <Header/>
            </S.HeaderBox>
            <S.Wrap>
                <S.Section>
                    <S.Description>
                        <S.Title>신입생을 위한 선물, 플테코</S.Title>
                        <img src={Logo} alt={"logo"} width={280} />
                        <S.SubText>신입생을 위한 첫걸음, 개발 기초부터 협업까지</S.SubText>
                        <S.SubText>신입생 여러분이 헤매지 않도록 친절하게 알려드립니다!</S.SubText>
                        <S.Btn onClick={()=>alert('아직 준비중입니다')}>신청하기</S.Btn>
                    </S.Description>
                    <S.ImgBox>
                        <S.Img src={Icon} alt={'Icon'} width={560}/>
                    </S.ImgBox>
                </S.Section>
            </S.Wrap>
        </S.FirstContainer>
    )
}