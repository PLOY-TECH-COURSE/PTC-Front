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
      try {
        const data = await getProposerList();
        setUserInfo(data);
      } catch (error) {
        console.error("Error fetching users:", error);
      }
    };
    fetchUsers();
  }, []);

  const updateAuth = (id, newAuth) => {
    setUserInfo((prevUsers) =>
      prevUsers.map((user) =>
        user.id === id ? { ...user, auth: newAuth } : user
      )
    );
  };

  const handleAuthChange = (e) => {
    setSelectedAuth((prev) => ({
      ...prev,
      [e.target.name]: e.target.checked,
    }));
  };

  const isAnyAuthSelected = Object.values(selectedAuth).some(Boolean);

  const filteredUsers = userInfo.filter((user) => {
    const matchesSearch = user.name.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesAuth = selectedAuth[user.auth] || !isAnyAuthSelected;
    return matchesSearch && matchesAuth;
  });

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
            {["USER", "STUDENT", "ADMIN"].map((role) => (
              <_.CDiv key={role}>
                <input
                  type="checkbox"
                  id={role}
                  name={role}
                  checked={selectedAuth[role]}
                  onChange={handleAuthChange}
                />
                <label htmlFor={role}>{role}</label>
              </_.CDiv>
            ))}
          </_.Check>
        </_.Input>
        <_.UserList>
          {filteredUsers.map((user) => (
            <Users
              key={user.id}
              id={user.id}
              name={user.name}
              email={user.email}
              promise={user.promise}
              auth={user.auth}
              setAuth={(newAuth) => updateAuth(user.id, newAuth)}
            />
          ))}
        </_.UserList>
      </_.ProMain>
    </>
  );
}
