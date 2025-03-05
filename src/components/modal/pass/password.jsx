import React, { useState, useEffect } from "react";
import styled from "styled-components";
import icon from "../../../assets/Logo.svg";
import { emailcode, valid,change } from "../../../api/password";


function EmailAuthModal({ setIsPwChangeModal }) {
  const [step, setStep] = useState(1);
  const [time, setTime] = useState(600);
  const [min, setMin] = useState(Math.floor(600 / 60));
  const [sec, setSec] = useState(600 % 60);
  const [intervalId, setIntervalId] = useState(null);
  const [email, setEmail] = useState("");
  const [emailValid, setEmailValid] = useState(true);
  const [code, setCode] = useState("");
  const [newPw, setNewPw] = useState("");
  const [confirmPw, setConfirmPw] = useState("");
  const [pwError, setPwError] = useState("");

  useEffect(() => {
    if (time <= 0) {
      clearInterval(intervalId);
      setIntervalId(null);
    } else {
      setMin(Math.floor(time / 60));
      setSec(time % 60);
    }
    return () => {
      if (intervalId === null) {
        clearInterval(intervalId);
      }
    };
  }, [time, intervalId]);

  const closeModal = (e) => {
    if (e.target === e.currentTarget) {
      setIsPwChangeModal(false);
    }
  };

  const handleEmailCode = async (e) => {
    e.preventDefault();
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      setEmailValid(false);
      alert("올바른 이메일 형식을 입력하세요.");
      return;
    }
    setEmailValid(true);
    const isValid = await emailcode(email);
    if (isValid) {
      if (intervalId) {
        setTime(600);
        setMin(10);
        setSec(0);
        return;
      }
      setTime(600);
      setMin(10);
      setSec(0);
      const id = setInterval(() => {
        setTime((prevTime) => prevTime - 1);
      }, 1000);
      setIntervalId(id);
      alert("인증코드가 발송되었습니다.");
    } else {
      alert("이메일 인증에 실패했습니다.");
    }
  };

  const handleValidateCode = async (e) => {
    e.preventDefault();
    if (!email) {
      alert("이메일을 먼저 입력하세요.");
      return;
    }
    if (!code) {
      alert("코드를 입력하세요.");
      return;
    }
    const result = await valid(email, code);
    if (result) {
      alert("인증 성공!");
      setStep(2);
    } else {
      alert("인증 실패! (코드가 틀리거나 만료됨)");
    }
  };


  const handleChangePassword = async (e) => {
    console.log("d");
    e.preventDefault();
    if (!newPw || !confirmPw) {
      alert("비밀번호를 입력하세요.");
      return;
    }
    if (newPw !== confirmPw) {
      setPwError("비밀번호가 일치하지 않습니다.");
      return;
    }
    setPwError("");
    const ok = await change(email, newPw);
    if (ok) {
      alert("비밀번호가 변경되었습니다.");
      setIsPwChangeModal(false);
    } else {
      alert("비밀번호 변경에 실패했습니다.");
    }
  };

  return (
    <ModalBackground onClick={closeModal}>
      <ModalContent onClick={(e) => e.stopPropagation()}>
        <LogoImg src={icon} alt="로고" />

        {step === 1 && (
          <>
            <EmailInputContainer>
              <EmailInput
                type="email"
                value={email}
                placeholder="이메일을 입력해주세요"
                onChange={(e) => setEmail(e.target.value)}
                style={{ borderColor: emailValid ? "" : "red" }}
              />
              <AuthButton type="button" onClick={handleEmailCode}>
                코드발송
              </AuthButton>
            </EmailInputContainer>

            <CodeInputContainer>
              <CodeInput
                type="text"
                value={code}
                onChange={(e) => setCode(e.target.value)}
                placeholder={`${min}:${sec}`}
              />
              <SmallText>이메일로 발송된 인증코드를 입력하세요</SmallText>
            </CodeInputContainer>

            <Button type="button" onClick={handleValidateCode}>
              인증하기
            </Button>
          </>
        )}

        {step === 2 && (
          <>
            <Desc>인증 완료! 새 비밀번호를 입력해주세요.</Desc>
            <PwInput
              type="password"
              placeholder="새 비밀번호"
              value={newPw}
              onChange={(e) => setNewPw(e.target.value)}
            />
            <PwInput
              type="password"
              placeholder="비밀번호 확인"
              value={confirmPw}
              onChange={(e) => setConfirmPw(e.target.value)}
            />
            {pwError && <ErrorText>{pwError}</ErrorText>}

            <Button type="button" onClick={handleChangePassword}>
              비밀번호 변경
            </Button>
          </>
        )}
      </ModalContent>
    </ModalBackground>
  );
}

export default EmailAuthModal;


const ModalBackground = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.5); 
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 9999;
`;
const ModalContent = styled.div`
  background-color: white;
  padding: 30px;
  border-radius: 8px;
  width: 90%;
  max-width: 500px;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.25);
`;
const LogoImg = styled.img`
  display: block;
  width: 200px; 
  height: 30px; 
  margin: 0 auto 30px;
  object-fit: contain;
`;
const EmailInputContainer = styled.div`
  display: flex;
  gap: 10px;
  margin-bottom: 20px;
`;
const EmailInput = styled.input`
  flex: 1;
  height: 40px;
  padding: 10px;
  border: 0.5px solid #8A8A8A;
  border-radius: 4px;
`;
const AuthButton = styled.button`
  width: 90px;
  height: 40px;
  border-radius: 4px;
  background: #4970FB;
  border: none;
  color: #FFF;
  cursor: pointer;
`;
const CodeInputContainer = styled.div`
  position: relative;
  margin-bottom: 20px;
`;
const CodeInput = styled.input`
  width: 100%;
  height: 40px;
  padding: 10px;
  border: 0.5px solid #8A8A8A;
  border-radius: 4px;
`;
const SmallText = styled.div`
  font-size: 14px;
  color: #555;
  margin-top: 5px;
`;
const Button = styled.button`
  width: 80%;
  height: 50px;
  border-radius: 28px;
  background: #000;
  color: #FFF;
  font-size: 18px;  
  font-weight: medium;
  margin: 0 auto;
  margin-top: 10px;
  border: none;
  display: block;
  cursor: pointer;
`;
const Desc = styled.div`
  font-size: 16px;
  color: #333;
  margin-bottom: 20px;
  text-align: center;
`;
const PwInput = styled.input`
  width: 100%;
  height: 40px;
  border: 0.5px solid #8A8A8A;
  border-radius: 4px;
  margin-bottom: 10px;
  padding: 10px;
`;
const ErrorText = styled.div`
  font-size: 14px;
  color: red;
  margin-bottom: 10px;
`;

