import React, { useState, useEffect } from "react";
import styled from "styled-components";  
import icon from "../assets/Logo.svg";
import { Link } from 'react-router-dom';
import axios from "axios";
const Login = () => {
  axios.get('/signup')
  const [time, setTime] = useState(600);
  const [min, setMin] = useState(Math.floor(600 / 60));
  const [sec, setSec] = useState(600 % 60);
  const [email, setEmail] = useState("");
  const [intervalId, setIntervalId] = useState(null);
  const [passwordError, setPasswordError] = useState("");
  const [emailValid, setEmailValid] = useState(true);

  const [formData, setFormData] = useState({
    name: "",
    id: "",
    email: "",
    code: "",
    password: "",
    confirmPassword: "",
    profile: ""
  });

  useEffect(() => {
    if (time <= 0) {
      clearInterval(intervalId);
      setIntervalId(null);
      resetForm();
    } else {
      setMin(Math.floor(time / 60));
      setSec(time % 60);
    }
  
    return () => {
      if (intervalId === null) {
        clearInterval(intervalId);
      }
    };
  }, [time]);
  
  const start = (e) => {
    e.preventDefault();
  
    if (intervalId) {
      setTime(600);
      setMin(10);
      setSec(0);
      return;
    }
  
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      setEmailValid(false);
      alert("올바른 이메일 형식을 입력하세요.");
      return;
    }
    setEmailValid(true);
  
    setTime(600);
    setMin(10);
    setSec(0);
  
    const id = setInterval(() => {
      setTime((prevTime) => prevTime - 1);
    }, 1000);
  
    setIntervalId(id);
  };

  const resetForm = () => {
    setFormData({
      name: "",
      id: "",
      email: "",
      code: "",
      password: "",
      confirmPassword: "",
      profile: ""
    });
    setEmail("");
    setTime(600);
    setMin(10);
    setSec(0);
    setPasswordError("");
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });

    if (e.target.id === "confirmPassword") {
      if (formData.password !== e.target.value) {
        setPasswordError("비밀번호가 일치하지 않습니다.");
      } else {
        setPasswordError("");
      }
    }
  };

  const handleVerification = (e) => {
    e.preventDefault();
    alert("correct");
  };

  return (
    <Box11>
      <Container>
        <Img src={icon} alt="Logo" />
        <Text1>회원가입</Text1>
        <Form>
          <Inp1>
            <Input id="name" value={formData.name} onChange={handleInputChange} />
            <Smalltext0>이름</Smalltext0>
          </Inp1>
          <Inp1>
            <Input id="id" value={formData.id} onChange={handleInputChange} />
            <Smalltext0>아이디</Smalltext0>
          </Inp1>

          <Inp1>
            <Inptie>
              <Input1
                id="email"
                type="email"
                value={email}
                onChange={handleEmailChange}
                style={{ borderColor: emailValid ? "" : "red" }}
              />
              <Ingk type="button" onClick={start}>이메일보내기</Ingk>
            </Inptie>
            <Smalltext0>이메일</Smalltext0>
          </Inp1>

          <Inp1>
            <Inptie>
              <Input1
                id="code"
                type="text"
                placeholder={`${min}:${sec}`}
                value={formData.code}
                onChange={handleInputChange}
              />
              <Ingk type="button" onClick={handleVerification}>인증하기</Ingk>
            </Inptie>
            <Smalltext0>이메일 인증</Smalltext0>
          </Inp1>

          <Inp1>
            <Input id="password" type="password" value={formData.password} onChange={handleInputChange} />
            <Smalltext0>비밀번호</Smalltext0>
          </Inp1>

          <Inp1>
            <Input id="confirmPassword" type="password" value={formData.confirmPassword} onChange={handleInputChange} />
            <Smalltext0>비밀번호 확인</Smalltext0>
            {passwordError && <ErrorText>{passwordError}</ErrorText>}
          </Inp1>

          <Inp1>
            <Input id="profile" type="text" value={formData.profile} onChange={handleInputChange} />
            <Smalltext0>프로필 소개</Smalltext0>
          </Inp1>

          <Button type="submit">회원가입</Button>
        </Form>
        <Link to="/login"><Text2>뒤로가기</Text2></Link>
      </Container>
    </Box11>  
  );
};

export default Login;

const ErrorText = styled.div`
  font-size: 12px;
  color: red;
  position:absolute;
  top: 100%;
`;

export const Box11 = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh; 
  padding: 20px; 
  background-color: #f0f0f0; 
`;

export const Container = styled.div`
  width: 90%; 
  max-width: 515px; 
  height: auto; 
  border-radius: 5.4px;
  background: #FFF;
  box-shadow: 0px 0px 5.4px 0px rgba(0, 0, 0, 0.25);
  padding: 40px;
`;

export const Img = styled.img`
  display: block;
  width: 200px; 
  height: 30px; 
  margin-left: 25px;
  object-fit: contain; 
`;

export const Text1 = styled.div`
  color: #000;
  font-family: Pretendard;
  font-size: 24px;
  font-style: normal;
  font-weight: 700;
  line-height:  normal;
  margin-left: 25px;
  margin-top: 15px;
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  margin-top: 20px;
  justify-content:center;
  align-items: center;
`;

export const Inp1 = styled.div`
  display: flex;
  flex-direction: column-reverse;
  position: relative;
  width: 90%;
  margin: 0 auto 20px auto; 
`;

export const Smalltext0 = styled.label`
  font-size: 14px;
  color: #555;
  position: absolute;
  background-color: #FFF;
  padding: 0 5px; 
  left:5%;
  top: -15%;
`;

export const Input = styled.input`
  width: 100%;
  height: 40px;
  border-radius: 4px;
  border: 0.5px solid #8A8A8A;
  background: #FFF;
  padding: 10px;
  font-size: 14px;
  position: relative; 
`;

export const Button = styled.button`
  width: 70%;
  height: 45px;
  border-radius: 28px;
  background: #000;
  color: #FFF;
  font-size: 16px;
  font-weight:medium;
  margin: 0 auto;
  border: none;
  margin-top: 20px;
  justify-content: center;
`;

export const Text2 = styled.div`
  color: #000;
  font-size: 14px;
  margin-top: 20px;
  display: flex;
  justify-content: center;
`;

export const Inp2 = styled.select`
  border-radius: 4px;
  border: 1.8px solid var(--n-02, #CCC);
  background: var(--White, #FFF);
  width: 100px;
  height: 30px;
`;

export const Tie = styled.div`
  height: 30px;
  width: 320px;
  display: flex;
  justify-content: center;
  align-items:center;
  gap: 30px;
`;

export const Ingk = styled.button`
  border-radius: 4px;
  height:40px;
  width: 60px;
  font-size: 10px;
  background: #4970FB;
  margin-left: 16px;
  border: none;
  color: #FFF;
  cursor: pointer;
`;

export const Inptie = styled.div`
  width: 100%;
  height: 30px;
  color:#FFF;
`;

export const Input1 = styled.input`
  width: 80%;
  height: 40px;   
  border-radius: 4px;
  border: 1.8px solid var(--n-02, #CCC);
  background-color:#FFF;
  padding: 10px;
`;  
