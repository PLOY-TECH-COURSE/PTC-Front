import Header from "../../components/header";
import Users from "../../components/select/users/index.jsx";
import SearchImg from "../../assets/proposer/search.svg";
import * as _ from "./style";
import { useState } from "react";

export default function Select() {
  const [userInfo, setUserInfo] = useState([
    {
      img: "",
      name: "이초록",
      email: "1234@gmail.com",
      promise: "동아리에 가입하게 된다면...",
      auth: "USER",
    },
    {
      img: "",
      name: "김파랑",
      email: "9876@naver.com",
      promise: "수업 중에 딴짓 안할게요..ㅠㅠ",
      auth: "USER",
    },
    {
      img: "",
      name: "수푸링",
      email: "spring@kakao.com",
      promise: "어렵워도 이겨내겠습니다.",
      auth: "USER",
    },
    {
      img: "",
      name: "에이치",
      email: "htmlhate@hi.com",
      promise: "요즘 애들 너무 무섭게 생겨...",
      auth: "STUDENT",
    },
    {
      img: "",
      name: "씨에스",
      email: "css1234@.byecom",
      promise: "그래도 열심히 살아보겠스빈다.",
      auth: "ADMIN",
    },
  ]);

  const updateAuth = (index, newAuth) => {
    const updatedUsers = [...userInfo];
    updatedUsers[index].auth = newAuth;
    setUserInfo(updatedUsers); // 상태 업데이트
  };

  return (
    <>
      <Header />
      <_.ProMain>
        <_.Input>
          <_.SInput>
            <_.SImg src={SearchImg} alt="돋보기" />
            <_.Search type="text" placeholder="유저 아이디를 입력하세요" />
          </_.SInput>
        </_.Input>
        <_.UserList>
          {userInfo.map((user, index) => (
            <Users 
              key={user.email} 
              {...user} 
              setAuth={(newAuth) => updateAuth(index, newAuth)} // 권한 업데이트 함수 전달
            />
          ))}
        </_.UserList>
      </_.ProMain>
    </>
  );
}
