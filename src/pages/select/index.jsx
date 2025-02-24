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
      name: "김초랑",
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

  const [searchQuery, setSearchQuery] = useState("");
  const [selectedAuth, setSelectedAuth] = useState({
    USER: false,
    STUDENT: false,
    ADMIN: false,
  });

  const updateAuth = (index, newAuth) => {
    const updatedUsers = [...userInfo];
    updatedUsers[index].auth = newAuth;
    setUserInfo(updatedUsers);
  };

  const handleAuthChange = (e) => {
    setSelectedAuth((prev) => ({
      ...prev,
      [e.target.name]: e.target.checked,
    }));
  };

  const filteredUsers = userInfo.filter(
    (user) =>
      (user.name.toLowerCase().includes(searchQuery.toLowerCase()) || searchQuery === "") && 
      (selectedAuth[user.auth] || Object.values(selectedAuth).includes(true) === false)
  );

  return (
    <>
      <Header />
      <_.ProMain>
        <_.Input>
          <_.SInput>
            <_.SImg src={SearchImg} alt="돋보기" />
            <_.Search
              type="text"
              placeholder="유저 아이디를 입력하세요"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </_.SInput>
          <_.Check>
            <_.CDiv>
              <input
                type="checkbox"
                name="USER"
                checked={selectedAuth.USER}
                onChange={handleAuthChange}
              />
              <label htmlFor="USER">USER</label>
            </_.CDiv>
            <_.CDiv>
              <input
                type="checkbox"
                name="STUDENT"
                checked={selectedAuth.STUDENT}
                onChange={handleAuthChange}
              />
              <label htmlFor="STUDENT">STUDENT</label>
            </_.CDiv>
            <_.CDiv>
              <input
                type="checkbox"
                name="ADMIN"
                checked={selectedAuth.ADMIN}
                onChange={handleAuthChange}
              />
              <label htmlFor="ADMIN">ADMIN</label>
            </_.CDiv>
          </_.Check>
        </_.Input>
        <_.UserList>
          {filteredUsers.map((user, index) => (
            <Users
              key={user.email}
              {...user}
              setAuth={(newAuth) => updateAuth(index, newAuth)}
            />
          ))}
        </_.UserList>
      </_.ProMain>
    </>
  );
}
