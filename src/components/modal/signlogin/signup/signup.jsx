import React, { useState, useEffect } from "react";
import styled from "styled-components";  
import icon from "../../../../assets/Logo.svg";
import { signupData, emailcode } from "../../../../api/signlogin";

const SignUpModal = ({ setIsModal, setIsSignupModal }) => {
  const [step, setStep] = useState(1);
  const [time, setTime] = useState(600);
  const [min, setMin] = useState(Math.floor(600 / 60));
  const [sec, setSec] = useState(600 % 60);
  const [intervalId, setIntervalId] = useState(null);
  const [loading, setLoading] = useState(false);

  const [email, setEmail] = useState("");
  const [emailValid, setEmailValid] = useState(true);
  const [passwordError, setPasswordError] = useState("");
  const [name, setName] = useState("");
  const [id, setId] = useState("");
  const [code, setCode] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmpassword] = useState("");
  const [n, setN] = useState("인증하기");
  const [profile, setProfile] = useState("");
  const [old, setOld] = useState(1);
  const [ban, setBan] = useState(1);
  const [bunho, setBunho] = useState(1);

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
  }, [time, intervalId]);

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

    // 타이머 시작
    const id = setInterval(() => {
      setTime((prevTime) => {
        if (prevTime <= 1) {
          clearInterval(id);
          alert("시간이 종료되었습니다.");
          window.location.reload();
          return 0;
        }
        return prevTime - 1;
      });
    }, 1000);
    setIntervalId(id);
  };

  const resetForm = () => {
    setId("");
    setName("");
    setEmail("");
    setCode("");
    setPassword("");
    setConfirmpassword("");
    setProfile("");
  };

  const handleInputChange = (e) => {
    const { id, value } = e.target;
    switch (id) {
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
      case "old":
        setOld(parseInt(value, 10));
        break;
      case "ban":
        setBan(parseInt(value, 10));
        break;
      case "bunho":
        setBunho(parseInt(value, 10));
        break;
      default:
        break;
    }
  };

  // 이메일 코드 요청 시 로딩 상태 표시
  const handleEmailCode = async (e) => {
    e.preventDefault();
    if (loading) return; // 이미 로딩중이면 또 클릭하지 않도록

    setLoading(true);   // 로딩 시작
    const isValid = await emailcode(email);
    setLoading(false);  // 로딩 종료

    if (isValid) {
      start(e);
      alert("이메일에 인증번호가 전송되었습니다.");
      setN("다시 인증하기");
    }
  };

  const closeModal = (e) => {
    if (e.target === e.currentTarget) {
      setIsSignupModal(false);
    }
  };

  const goNextStep = (e) => {
    e.preventDefault();
    if (!name || !id || !ban || !bunho || !old || !password || !confirmPassword) {
      alert("데이터를 완성해주세요.");
      return;
    } else if (id.length > 15) {
      alert("아이디는 최대 15자까지 가능합니다.");
      return;
    } else if (password.length < 10) {
      alert("비밀번호는 10자 이상이어야 합니다.");
      return;
    } else if (!pwPattern.test(password)) {
      alert("비밀번호에 대소문자, 특수문자, 숫자가 모두 포함되어야 합니다.");
      return;
    } else if (password !== confirmPassword) {
      alert("비밀번호가 일치하지 않습니다.");
      return;
    }
    setStep(2);
  };

  const handleSignup = async (e) => {
    e.preventDefault();
    if (!profile) {
      alert("프로필 소개를 입력해주세요.");
      return;
    }
    const result = await signupData(
      name,
      id,
      email,
      code,
      password,
      confirmPassword,
      profile,
      old,
      ban,
      bunho
    );
    if (result) {
      alert("회원가입 성공!");
      setIsSignupModal(false);
    } else {
      alert("회원가입에 실패했습니다. 다시 시도해주세요.");
    }
  };

  return (
    <ModalBackground onClick={closeModal}>
      <ModalContent onClick={(e) => e.stopPropagation()}>
        <ModalInner>
          <LogoImage src={icon} alt="logo" />
          <Title>회원가입</Title>

          {step === 1 && (
            <Form>
              <FormField>
                <Label htmlFor="name">이름</Label>
                <Input
                  id="name"
                  placeholder="이름을 입력해주세요"
                  value={name}
                  onChange={handleInputChange}
                />
              </FormField>
              <FormField>
                <Label htmlFor="id">아이디</Label>
                <Input
                  id="id"
                  placeholder="아이디를 5자 이상 15자 이하로 입력해주세요"
                  value={id}
                  onChange={handleInputChange}
                />
              </FormField>
              <FormField>
                <Label htmlFor="profile">프로필 소개</Label>
                <Input
                  id="profile"
                  type="text"
                  placeholder="간단한 자기소개를 입력해주세요"
                  value={profile}
                  onChange={handleInputChange}
                />
              </FormField>
              <SelectRow>
                <SelectBox id="old" value={old} onChange={handleInputChange}>
                  <option value="1">1학년</option>
                  <option value="2">2학년</option>
                  <option value="3">3학년</option>
                </SelectBox>
                <SelectBox id="ban" value={ban} onChange={handleInputChange}>
                  <option value="1">1반</option>
                  <option value="2">2반</option>
                  <option value="3">3반</option>
                  <option value="4">4반</option>
                </SelectBox>
                <SelectBox id="bunho" value={bunho} onChange={handleInputChange}>
                  {Array.from({ length: 30 }, (_, i) => i + 1).map((num) => (
                    <option key={num} value={num}>
                      {num}번
                    </option>
                  ))}
                </SelectBox>
              </SelectRow>
              <FormField>
                <Label htmlFor="password">비밀번호</Label>
                <Input
                  id="password"
                  type="password"
                  placeholder="대소문자, 특수문자, 숫자를 모두 포함 (10자 이상)"
                  value={password}
                  onChange={handleInputChange}
                />
              </FormField>
              <FormField>
                <Label htmlFor="confirmPassword">비밀번호 확인</Label>
                <Input
                  id="confirmPassword"
                  type="password"
                  placeholder="비밀번호를 다시 입력해주세요"
                  value={confirmPassword}
                  onChange={handleInputChange}
                />
                {passwordError && <ErrorText>{passwordError}</ErrorText>}
              </FormField>
              <SubmitButton onClick={goNextStep}>다음</SubmitButton>
            </Form>
          )}

          {step === 2 && (
            <Form>
              <FormField>
                <Label htmlFor="email">이메일</Label>
                <EmailRow>
                  {/* flex:1로 인풋이 남은공간 모두 차지 */}
                  <EmailInput
                    id="email"
                    type="email"
                    placeholder="이메일을 입력해주세요"
                    value={email}
                    onChange={handleInputChange}
                    style={{ borderColor: emailValid ? "" : "red" }}
                  />
                  {/* 로딩 중이면 "로딩중..." 표시 */}
                  <EmailButton
                    type="button"
                    onClick={handleEmailCode}
                    disabled={loading}
                  >
                    {loading ? "로딩중..." : n}
                  </EmailButton>
                </EmailRow>
              </FormField>
              <FormField>
                <Label htmlFor="code">이메일 인증</Label>
                <Input
                  id="code"
                  type="text"
                  placeholder={`${min}:${sec}`}
                  value={code}
                  onChange={handleInputChange}
                />
              </FormField>
              <SubmitButton onClick={handleSignup}>회원가입</SubmitButton>
            </Form>
          )}

          <SwitchText
            onClick={() => {
              setIsSignupModal(false);
              setIsModal(true);
            }}
          >
            로그인
          </SwitchText>
        </ModalInner>
      </ModalContent>
    </ModalBackground>
  );
};

export default SignUpModal;

// ==================== Styled Components ====================

const ModalBackground = styled.div`
  position: fixed;
  inset: 0;
  background: rgba(0, 0, 0, 0.5); 
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
`;

const ModalContent = styled.div`
  background-color: white;
  padding: 40px;
  border-radius: 8px;
  width: 70%;
  max-width: 550px;
  margin: 60px 0;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.25);
`;

const ModalInner = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const LogoImage = styled.img`
  width: 200px;
  height: 30px;
  object-fit: contain;
`;

const Title = styled.div`
  color: #000;
  font-family: "Pretendard","Noto Sans KR", "Apple SD Gothic Neo", "Malgun Gothic", Arial, sans-serif;
  font-size: 24px;
  font-weight: 700;
  margin-top: 15px;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  margin-top: 20px;
  width: 100%;
  max-width: 450px;
  align-items: center;
`;

const FormField = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 10px;
  width: 100%;
  max-width: 400px;
`;

const Label = styled.label`
  font-size: 14px;
  color: #555;
  margin-bottom: 6px;
`;

const Input = styled.input`
  height: 40px;
  font-size: 14px;
  border-radius: 4px;
  border: 0.5px solid #8A8A8A;
  background: #FFF;
  padding: 0 10px;
`;

const EmailRow = styled.div`
  display: flex;
  gap: 8px;
  width: 100%;
  /* max-width 살짝 늘림 */
  max-width: 400px;
`;

const EmailInput = styled(Input)`
  /* 남은 공간 모두 사용해 더 넓게 보이도록 */
  flex: 1;
`;

const EmailButton = styled.button`
  border-radius: 4px;
  height: 40px;
  width: 90px; 
  font-size: 13px;
  background: #4970FB;
  border: none;
  color: #FFF;
  cursor: pointer;
  &:disabled {
    opacity: 0.6;
    cursor: not-allowed;
  }
`;

const SelectRow = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 10px;
  width: 100%;
  max-width: 350px;
`;

const SelectBox = styled.select`
  width: 30%;
  height: 30px;
  font-size: 12px;
  border-radius: 4px;
  border: 0.5px solid #8A8A8A;
  background: #FFF;
  padding: 0 5px;
`;

const SubmitButton = styled.button`
  width: 70%;
  height: 38px;
  border-radius: 28px;
  background: #000;
  color: #FFF;
  font-size: 14px;
  font-weight: 500;
  margin-top: 8px;
  cursor: pointer;
`;

const SwitchText = styled.div`
  color: #000;
  font-size: 14px;
  margin-top: 14px;
  cursor: pointer;
  &:hover {
    text-decoration: underline;
  }
`;

const ErrorText = styled.div`
  color: red;
  font-size: 12px;
  margin-top: 3px;
`;
