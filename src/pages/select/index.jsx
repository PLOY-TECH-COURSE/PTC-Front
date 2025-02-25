import Header from "../../components/header";
import Users from "../../components/select/users/index.jsx";
import SearchImg from "../../assets/proposer/search.svg";
import * as _ from "./style";
import { useState, useEffect } from "react";
import { getProposerList } from "../../api/permission";  

export default function Select() {
  const [userInfo, setUserInfo] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedAuth, setSelectedAuth] = useState({
    USER: false,
    STUDENT: false,
    ADMIN: false,
  });

  useEffect(() => {
    const fetchUsers = async () => {
      const data = await getProposerList();  // API 호출
      setUserInfo(data);  // 받은 데이터로 상태 업데이트
    };

    fetchUsers();
  }, []);

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
              img={user.img || ""}
              name={user.name}
              email={user.email}
              promise={user.promise}
              auth={user.auth}
              setAuth={(newAuth) => updateAuth(index, newAuth)}
            />
          ))}
        </_.UserList>
      </_.ProMain>
    </>
  );
}
