import * as S from "./style.jsx";
import Logo from '../../assets/Logo.svg';
import Hambuger from '../../assets/header/hambuger.svg'
import HeaderModal from '../modal/header'
import {useRecoilState, useRecoilValue} from "recoil";
import {modalAtom} from "../../recoil/modalAtom.js";
import Down from '../../assets/down.svg';
import {useState} from "react";
import {useNavigate} from "react-router-dom";
import {authAtom} from "../../recoil/authAtom.js";
import {logout} from '../../api/auth.js';

function Header() {
    function alert1() {
        alert("아직 준비되지 않음!");
    }
    const [isModal, setIsModal] = useRecoilState(modalAtom);

    const [isOpen, setIsOpen] = useState([false, false]);
    const change = () =>{
        if(!isOpen[0]) setIsOpen([true, false]);
        else if(isOpen[0]) setIsOpen([false, true]);
    }

    const user = useRecoilValue(authAtom);
    const navigate = useNavigate()

    return (
        <S.Container>
            {isModal ? <HeaderModal isModal={isModal} setIsModal={setIsModal}/> : null}
            <S.LogoImg onClick={()=>navigate('/')} src={Logo} alt="Logo" />
            <S.Hambuger onClick={()=>setIsModal(true)}>
                <img src={Hambuger} alt={'hambuger'} width={35}/>
            </S.Hambuger>
            <S.TextBox>
                <S.SelectText>홈</S.SelectText>
                <S.Text onClick={()=>navigate('/postList')}>글목록</S.Text>{/* navigate('/') */}
                <S.Text onClick={alert1}>공지사항</S.Text>{/* navigate('/') */}
                {user.role === "ROLE_SUPERADMIN" ?
                    <S.Text onClick={alert1}>권한관리</S.Text>
                    : null}{/* navigate('/') */}

                {user.role === "ROLE_ADMIN" || user.role === "ROLE_SUPERADMIN" ?
                    <S.Text onClick={alert1}>신청자</S.Text>
                    : null}{/* navigate('/') */}

                {user.role === "ROLE_USER" ?
                    <S.Text onClick={()=>navigate('/apply')}>신청하기</S.Text>
                    : null}

                {user.role === "ROLE_ADMIN" || user.role === "ROLE_SUPERADMIN" || user.role === "ROLE_STUDENT" ?
                    <S.Text onClick={alert1}>새글작성</S.Text>
                    : null}{/* navigate('/write') */}

                {!user.uid &&
                    <S.LoginBox>
                        <S.LoginButton onClick={()=>navigate('/login')}>로그인</S.LoginButton>
                        <S.SignUpButton onClick={()=>navigate('/signup')}>회원가입</S.SignUpButton>
                    </S.LoginBox>
                }

                {user.uid &&
                    <S.Info onClick={()=>change()}>
                        <S.Text>{user.uid}</S.Text>
                        <S.DownImg src={Down} $isOpen = {isOpen[0]} $isOpen2 = {isOpen[1]} alt={'down'} width={18}/>
                        <S.Dropdown $isOpen = {isOpen[0]}>
                            <S.Text2 onClick={alert1}>내 정보</S.Text2>{/* navigate('/mypage') */}
                            <S.Text2 onClick={()=> {
                                if(logout()){
                                    navigate('/');
                                }
                            }}>로그아웃</S.Text2>
                        </S.Dropdown>
                    </S.Info>
                }
                {isOpen[0] ? <S.Cancel onClick={()=>setIsOpen([false, true])}/> :null}
            </S.TextBox>
        </S.Container>
    );
}

export default Header;