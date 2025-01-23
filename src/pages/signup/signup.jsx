import { useState, useEffect } from "react";
import styled from "styled-components";  
import icon from '../../assets/Logo.svg';
import { useNavigate} from 'react-router-dom';
import { signupData } from "../../api/signlogin";
import { emailcode } from "../../api/signlogin";

const Login = () => {
  const [time, setTime] = useState(600);
  const [min, setMin] = useState(Math.floor(600 / 60));
  const [sec, setSec] = useState(600 % 60);
  const [email, setEmail] = useState("");
  const [intervalId, setIntervalId] = useState(null);
  const [passwordError, setPasswordError] = useState("");
  const [emailValid, setEmailValid] = useState(true);
  const [name, setName] = useState("");
  const [id, setId] = useState("");
  const [code, setCode] = useState("");
  const [profile, setProfile] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmpassword] = useState("");
  const [ban, setBan] = useState(1);
  const [bunho, setBunho] = useState(1);
  const [old, setold] = useState(1);
  const navigate = useNavigate();
  const pwPattern = /^(?=.*[a-zA-Z])(?=.*[~!@#$%^&*+=()-])(?=.*[0-9]).+$/;
  
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
    setId("");
    setName("");
    setPassword("");
    setCode("");
    setProfile("");
  };
  

  const handleInputChange = (e) => {
    const { id, value } = e.target;
    switch (id) {
      case "bunho":
        setBunho((value));
        break;
      case "old":
        setold((value));
        break;
      case "ban":
        setBan((value));
        break;
      case "name":
        setName(value);
        break;
      case "id":
        setId(value);
        break;
      case "email":
        setEmail(value);
        break;
      case "code":
        setCode(value);
        break;
      case "password":
        setPassword(value);
        break;
      case "confirmPassword":
        setConfirmpassword(value);
        if (password !== value) {
          setPasswordError("비밀번호가 일치하지 않습니다.");
        } else {
          setPasswordError("");
        }
        break;
      case "profile":
        setProfile(value);
        break;
      default:
        break;
    }
  };
  
 

  return (
    <Box11>
      <Container>
        <Img src={icon} alt="Logo" />
        <Text1>회원가입</Text1>
        <Form>
          <Inp1>
            <Input id="name" placeholder={"이름을 입력해주세요"} value={name} onChange={handleInputChange} />
            <Smalltext0>이름</Smalltext0>
          </Inp1>
          <Inp1>
            <Input id="id" placeholder={"아이디를 5자이상 15자이하로 입력해주세요"} value={id} onChange={handleInputChange} />
            <Smalltext0>아이디</Smalltext0>
          </Inp1>

          <Inp1>
            <Inptie>
              <Input1
                id="email"
                type="email"
                value={email}
                placeholder={"이메일을 입력해주세요"}
                onChange={(e)=>setEmail(e.target.value)}
                style={{ borderColor: emailValid ? "" : "red" }}
              />
              <Ingk
              type="button"
              onClick={(e) => {
                e.preventDefault();
                start(e); 
                emailcode(email);  
              }}
            > 인증하기</Ingk>
            </Inptie>
            <Smalltext0>이메일</Smalltext0>
          </Inp1>

          <Inp1>
            <Inptie>
              <Input
                id="code"
                type="text"
                placeholder={`${min}:${sec}`}
                value={code}
                onChange={handleInputChange}
              />
            </Inptie>
            <Smalltext0>이메일 인증</Smalltext0>
          </Inp1>

          <Inp1>
            <Input id="password" placeholder={"대문자와 소문자 하나이상, 특수문자, 숫자를 포함시켜주세요"} type="password" value={password} onChange={handleInputChange} />
            <Smalltext0>비밀번호</Smalltext0>
          </Inp1>

          <Inp1>
            <Input id="confirmPassword" placeholder={"비밀번호를 다시 입력해주세요"} type="password" value={confirmPassword} onChange={handleInputChange} />
            <Smalltext0>비밀번호 확인</Smalltext0>
            {passwordError && <ErrorText>{passwordError}</ErrorText>}
          </Inp1>

          <Inp1>
            <Input id="profile" placeholder={"프로필에들어갈 소개를 입력해주세요"} type="text" value={profile} onChange={handleInputChange} />
            <Smalltext0>프로필 소개</Smalltext0>
          </Inp1>
          <Tie>
          <Inp2 name="old" value={old} onChange={(e) => setold(parseInt(e.target.value))}>
            <option value="1">1학년</option>
            <option value="2">2학년</option>
            <option value="3">3학년</option>
          </Inp2>

          <Inp2 name="ban" value={ban} onChange={(e) => setBan(parseInt(e.target.value))}>
            <option value="1">1반</option>
            <option value="2">2반</option>
            <option value="3">3반</option>
            <option value="4">4반</option>
          </Inp2>

          <Inp2 name="bunho" value={bunho} onChange={(e) => setBunho(parseInt(e.target.value))}>
            <option value="1">1번</option>
            <option value="2">2번</option>
            <option value="3">3번</option>
            <option value="4">4번</option>
            <option value="5">5번</option>
            <option value="6">6번</option>
            <option value="7">7번</option>
            <option value="8">8번</option>
            <option value="9">9번</option>
            <option value="10">10번</option>
            <option value="11">11번</option>
            <option value="12">12번</option>
            <option value="13">13번</option>
            <option value="14">14번</option>
            <option value="15">15번</option>
            <option value="16">16번</option>
          </Inp2>
          </Tie>
          <p style={{ marginTop: '20px' }}>학년반 번호가 없다면 그대로 놔두어주세요</p>
          <Button 
                type="submit" 
                onClick={(e) => {
                  e.preventDefault();
                  if(!name || !id || !email || !code || !password || !confirmPassword || !profile){
                      alert("데이터를 완성해주세요.");
                  }
                  else if(id.length > 15){
                      alert("id 15자를 초과했습니다.");
                  }
                  else if(pwPattern.test(password) === false){
                      alert("비밀번호에 대문자와 소문자 하나이상, 특수문자, 숫자를 포함시켜주세요");
                  }
                  else if (password !== confirmPassword) {
                    alert("비밀번호가 일치하지 않습니다.");
                    return;
                  }
                  else {
                    if(signupData(name, id, email, code, password, confirmPassword, profile,old,ban,bunho)) navigate('/login');
                  }
                }}
              >회원가입</Button>
        </Form>
        <Text2 onClick={()=>navigate('/login')}>로그인</Text2>
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
  padding: 10px 20px; 
  background-color: #f0f0f0; 
`;

export const Container = styled.div`
  width: 90%; 
  max-width: 515px; 
  height: auto; 
  border-radius: 5.4px;
  background: #FFF;
  box-shadow: 0px 0px 5.4px 0px rgba(0, 0, 0, 0.25);
  padding: 20px 40px;
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
  padding: 2px;
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
  display: flex;
  justify-content: center;
  width: max-content;
  margin: 0 auto;
  margin-top: 20px;
  cursor: pointer;
  &:hover{
    text-decoration-line: underline;
  }
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
  font-size: 12px;
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
