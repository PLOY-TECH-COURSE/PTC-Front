import * as S from "./style.jsx";
import Logo from '../../assets/header/Logo.svg';
import Hambuger from '../../assets/header/hambuger.svg'
import {useState} from "react";
import HeaderModal from '../modal/header'

function Header() {
    function alert1() {
        alert("아직 준비되지 않음!");
    }
    const [nav, setNav] = useState(false);
    return (
        <S.Container>
            {nav ? <HeaderModal isModal={nav} setIsModal={setNav}/> : null}
            <S.LogoImg src={Logo} alt="Logo" />
            <S.Hambuger onClick={()=>setNav(true)}>
                <img src={Hambuger} alt={'hambuger'} width={35}/>
            </S.Hambuger>
            <S.TextBox>
                <S.SelectText>홈</S.SelectText>
                <S.Text onClick={alert1}>글목록</S.Text>
                <S.Text onClick={alert1}>공지사항</S.Text>
                <S.LoginBox>
                    <S.LoginButton onClick={alert1}>로그인</S.LoginButton>
                    <S.SignUpButton>회원가입</S.SignUpButton>
                </S.LoginBox>
            </S.TextBox>
        </S.Container>
    );
}

export default Header;