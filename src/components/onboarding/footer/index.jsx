import * as S from "./style.jsx";
import Logo from '../../../assets/onboarding/footer/logoBlack.svg';
import Git from '../../../assets/onboarding/footer/git.svg';

export default function Footer({change}){
    return (
        <S.FooterContainer>
            <S.Footer>
                <S.SectionLeft>
                    <img src={Logo} alt='logo' />
                    <p>주소 : 부산광역시 강서구 가락대로 1393 봉림동 15 (46708)</p>
                    <p>이메일 : ploytechcourse@gmail.com</p>
                </S.SectionLeft>
                <S.SectionRight>
                    <S.Navbar>
                        <p onClick={()=>change(1)}>홈</p>
                        <p onClick={()=>change(2)}>플테코소개</p>
                        <p onClick={()=>change(3)}>트랙소개</p>
                        <p onClick={()=>change(4)}>팀소개</p>
                    </S.Navbar>
                    <S.Git onClick={()=>window.open("https://github.com/PLOY-TECH-COURSE", "_blank")} src={Git}  alt={'gitIcon'}/>
                </S.SectionRight>
            </S.Footer>
        </S.FooterContainer>
    )
}