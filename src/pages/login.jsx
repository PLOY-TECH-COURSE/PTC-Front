import React from "react";
import styled from "styled-components";  
import icon from "../assets/Logo.svg";
import {Link} from 'react-router-dom';

const Login = () => {
  return (
    <Box11>
      <Container>
        <Img src={icon} />
        <Text1>로그인</Text1>
        <Form>
          <Inp1>
            <Input id="id" />
            <Smalltext1>로그인</Smalltext1>
          </Inp1>
          <Inp1>
            <Input id="password" type="password"  />
            <Smalltext2>비밀번호</Smalltext2>
          </Inp1>
          <Button>로그인</Button>
        </Form>
        <Link to="/signup"><Text2>회원가입</Text2></Link>
      </Container>
    </Box11>
  );
};

export default Login;

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
  line-height: normal;
  margin-left: 25px;
  margin-top: 15px;
  
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  margin-top: 50px;
`;

export const Inp1 = styled.div`
  display: flex;
  flex-direction: column-reverse;
  width: 90%;
  margin: 0 auto 40px auto;
`;

export const Smalltext1 = styled.label`
  font-size: 14px;
  margin-bottom: 5px; 
  color: #555;
  position: absolute;
  left:37.5%;
  top: 40%;
  background-color:#FFF;
  
`;
export const Smalltext2 = styled.label`
  font-size: 14px;

  color: #555;
  position: absolute;
  left:37.5%;
  top: 51.7%;
  background-color:#FFF;

`;
export const Input = styled.input`
  width: 100%;
  height: 40px;
  border-radius: 4px;
  border: 0.5px solid #8A8A8A;
  background: #FFF;
  padding: 10px;
  font-size: 14px;
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
  justify-content: center;
`;

export const Text2 = styled.div`
  color: #000;
  font-size: 14px;
  margin-top: 20px;
  display: flex;
  justify-content: center;
`;
