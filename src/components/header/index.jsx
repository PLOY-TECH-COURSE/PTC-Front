import React, { useState, useEffect } from "react";
import * as S from "./style.jsx";  
import icon from '../../assets/Logo.svg';
import Hambuger from '../../assets/header/hambuger.svg';
import { useRecoilState, useRecoilValue } from "recoil";
import { modalAtom } from "../../recoil/modalAtom.js";
import Down from '../../assets/down.svg';
import { useNavigate } from "react-router-dom";
import { authAtom } from "../../recoil/authAtom.js";
import { logout } from '../../api/auth.js';
import Login from '../modal/signlogin/login/login.jsx';  
import Signup from '../modal/signlogin/signup/signup.jsx';  
import ChangePw from '../modal/pass/password.jsx';
import Apply from "../../pages/apply";
import {isApplyAtom} from "../../recoil/isApply.js";

function Header() {
  const [isOpen, setIsOpen] = useState([false, false]);
  const [isModal, setIsModal] = useRecoilState(modalAtom);
  const [isSignupModal, setIsSignupModal] = useState(false);
  const [isPwChangeModal, setIsPwChangeModal] = useState(false);
  const [isApply, setIsApply] = useRecoilState(isApplyAtom);
  const change = () => {
    if (!isOpen[0]) setIsOpen([true, false]);
    else if (isOpen[0]) setIsOpen([false, true]);
  };

  const routing = [
    { id: 1, path: "/", name: "홈", role: "ALL" },
    { id: 2, path: "/postList", name: "글목록", role: "ALL" },
    { id: 3, path: "/broadcast", name: "공지사항", role: "ALL" },
    { id: 4, path: "/authority", name: "권한관리", role: "ROLE_SUPERADMIN" },
    { id: 5, path: "/proposer", name: "신청자", role: "ROLE_SUPERADMIN, ROLE_ADMIN" },
    { id: 6, path: "/write/new", name: "새글작성", role: "ROLE_SUPERADMIN, ROLE_ADMIN, ROLE_STUDENT" },
  ];

  const user = useRecoilValue(authAtom);
  const navigate = useNavigate();

  const closeModal = () => {
    setIsModal(false);
  };

  const closeSignupModal = () => {
    setIsSignupModal(false); 
  };
  const closeApplyModal = () => {
    setIsApply(false);
  };

  return (
    <S.Container>
      {isModal && <Login setIsModal={setIsModal} setIsSignupModal={setIsSignupModal} closeModal={closeModal} setIsPwChangeModal={setIsPwChangeModal}  />}
      {isSignupModal && <Signup setIsSignupModal={setIsSignupModal} setIsModal={setIsModal} closeSignupModal={closeSignupModal} />}
      {isPwChangeModal && (
        <ChangePw setIsPwChangeModal={setIsPwChangeModal} />
      )}
      {isApply && <Apply onClose={closeApplyModal} />}
      <S.LogoImg onClick={() => navigate('/')} src={icon} alt="Logo" />
      <S.Hambuger onClick={() => setIsModal(true)}>
        <img src={Hambuger} alt={'hambuger'} width={35} />
      </S.Hambuger>
      <S.TextBox>
        {
          location.pathname === "/" ?
            routing.map((item) => {
              if (item.path === "/") {
                return (
                  <S.SelectText key={item.id} onClick={() => navigate(item.path)}>{item.name}</S.SelectText>
                )
              } else if (user.role !== '' && item.role.includes(user.role) || item.role === "ALL") {
                return (
                  <S.Text key={item.id} onClick={() => navigate(item.path)}>{item.name}</S.Text>
                )
              }
            }) :
            routing.map((item) => {
              const isActive = location.pathname.slice(1).includes(item.path.slice(1));
              if (item.path === "/") {
                return (
                  <S.Text key={item.id} onClick={() => navigate(item.path)}>{item.name}</S.Text>
                )
              }
              if (isActive) {
                return (
                  <S.SelectText key={item.id} onClick={() => navigate(item.path)}>{item.name}</S.SelectText>
                )
              }
              else if (user.role !== '' && item.role.includes(user.role) || item.role === "ALL") {
                return (
                  <S.Text key={item.id} onClick={() => navigate(item.path)}>{item.name}</S.Text>
                )
              }
            })
        }
        {user.role === "ROLE_USER" && (
          <S.Text onClick={() => setIsApply(true)}>신청하기</S.Text>
        )}

        {!user.uid &&
          <S.LoginBox>
            <S.LoginButton
  onClick={() => {
    setIsModal(true);
    setIsSignupModal(false);
  }}
>
  로그인
</S.LoginButton>

<S.SignUpButton
  onClick={() => {
    setIsModal(false);
    setIsSignupModal(true);
  }}
>
  회원가입
</S.SignUpButton>

        </S.LoginBox>
        }

        {user.uid &&
          <S.Info onClick={() => change()}>
            <S.Text>{user.uid}</S.Text>
            <S.DownImg src={Down} $isOpen={isOpen[0]} $isOpen2={isOpen[1]} alt={'down'} width={18} />
            <S.Dropdown $isOpen={isOpen[0]}>
              <S.Text2 onClick={() => { navigate(`/user/${user.uid}`) }}>내 정보</S.Text2>
              <S.Text2 onClick={() => {
                if(localStorage.getItem('temporary')){
                  if(confirm('현재 임시저장 되어있는 글이 있습니다. \n로그아웃을 한다면 글은 사라집니다. 로그아웃 하시겠습니까?')){
                    if (logout()) {
                      navigate('/');
                    }
                    localStorage.removeItem('temporary')
                  }
                }else{
                  if (logout()) {
                    navigate('/');
                  }
                }
              }}>로그아웃</S.Text2>
            </S.Dropdown>
          </S.Info>
        }
        {isOpen[0] ? <S.Cancel onClick={() => setIsOpen([false, true])} /> : null}
      </S.TextBox>
    </S.Container>
  );
}

export default Header;