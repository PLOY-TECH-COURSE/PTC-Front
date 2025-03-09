import React, { useState } from 'react';
import styled from 'styled-components';
import { postLogin } from '../../../../api/auth.js';
import { useNavigate } from 'react-router-dom';
import icon from '../../../../assets/Logo.svg';

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
  z-index: 1000;
`;

const ModalContent = styled.div`
  background-color: white;
  padding: 50px;
  border-radius: 12px;
  width: 90%;
  max-width: 600px; 
  box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.3);
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Img = styled.img`
  display: block;
  width: 220px;
  height: 40px;
  margin-bottom: 30px;  
  object-fit: contain;
`;

const Text1 = styled.div`
  color: #000;
  font-family: "Pretendard","Noto Sans KR", "Apple SD Gothic Neo", "Malgun Gothic", Arial, sans-serif;
  font-size: 28px;  
  font-weight: 700;
  margin-top: 10px;
  margin-bottom: 30px;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

const Inp1 = styled.div`
  display: flex;
  flex-direction: column-reverse;
  width: 100%;
  margin: 0 auto 40px auto;
  position: relative;
`;

const Smalltext2 = styled.label`
  font-size: 16px;  
  color: #555;
  position: absolute;
  left: 4%;
  top: -13%;
  background-color: #FFF;
`;

const Input = styled.input`
  width: 100%;
  height: 50px;  
  border-radius: 6px;
  border: 1px solid #8A8A8A;
  background: #FFF;
  padding: 15px;
  font-size: 16px;  
  margin-bottom: 20px;
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
  border: none;
  justify-content: center;
  cursor: pointer;
`;

const Text2 = styled.div`
  color: #000;
  font-size: 16px;  
  margin-top: 20px;
  display: flex;
  justify-content: center;
  cursor: pointer;
  &:hover {
    text-decoration: underline;
  }
`;

const Login = ({ setIsModal, setIsSignupModal, setIsPwChangeModal }) => {  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    const loginResponse = await postLogin({ email, password });
    if (loginResponse) {
      setIsModal(false); 
      navigate('/');
    } else {
      alert('이메일이나 비밀번호가 틀렸습니다.');
    }
  };

  const closeModal = () => {
    setIsModal(false);  
  };

  return (
    <ModalBackground onClick={closeModal}>
      <ModalContent onClick={(e) => e.stopPropagation()}>
        <Container>
          <Img src={icon} />
          <Text1>로그인</Text1>
          <Form onSubmit={handleLogin}>
            <Inp1>
              <Input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="이메일"
              />
              <Smalltext2>이메일</Smalltext2>
            </Inp1>
            <Inp1>
              <Input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="비밀번호"
              />
              <Smalltext2>비밀번호</Smalltext2>
            </Inp1>
            <Button type="submit" onClick={handleLogin}>
              로그인
            </Button>
          </Form>
          <Text2
          onClick={() => {
            setIsModal(false);
            setIsSignupModal(true);
          }}
        >
          회원가입
        </Text2>
         <Text2 onClick={() => {
           setIsModal(false);
           setIsPwChangeModal(true);
         }}>
           비밀번호 변경
         </Text2>
        </Container>
      </ModalContent>
    </ModalBackground>
  );
};

export default Login;
