import * as S from "./style.jsx";
import Logo from "../../assets/onboarding/footer/logoBlack.svg";
import Instargram from "../../assets/onboarding/footer/instargram.svg";
import Git from "../../assets/onboarding/footer/git.svg";

export default function Footer({change}){
    return(
        <S.Footer>
            <S.SectionLeft>
                <img src={Logo} alt='logo' />
                <p>주소 : 부산광역시 강서구 가락대로 1393 봉림동 15 (46708)</p>
                <p>이메일 : ploytechcourse@gmail.com</p>
                <div>
                    <img width={20} src={Instargram} />
                    <p>문의 : bssm_ploy</p>
                </div>
            </S.SectionLeft>
            <S.SectionRight>
                {change &&
                    <S.Navbar>
                        <p onClick={()=>change(1)}>홈</p>
                        <p onClick={()=>change(2)}>소개</p>
                        <p onClick={()=>change(3)}>트랙</p>
                        <p onClick={()=>change(4)}>참가지원</p>
                        <p onClick={()=>change(4)}>팀</p>
                    </S.Navbar>
                }
                <S.ImgBox>
                    <S.Git onClick={()=>window.open("https://github.com/PLOY-TECH-COURSE", "_blank")} src={Git}  alt={'gitIcon'}/>
                    <S.Git onClick={()=>window.open("https://www.instagram.com/bssm_ploy/", "_blank")} src={Instargram} alt={'instargramIcon'} />
                </S.ImgBox>
            </S.SectionRight>
        </S.Footer>
    )
}