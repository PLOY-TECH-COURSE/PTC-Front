import { useState, useEffect } from "react";
import Header from "../../components/header";
import Users from "../../components/proposer/users";
import UserModal from "../../components/proposer/modal";
import SearchImg from "../../assets/proposer/search.svg";
import { getProposerList } from "../../api/proposer"; 
import * as _ from "./style";

export default function Proposer() {
  const [userInfo, setUserInfo] = useState([]);
  const [selectedUser, setSelectedUser] = useState(null);
  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      const data = await getProposerList();
      setUserInfo(data);
    };
    fetchData();
  }, []);

  const openModal = (user) => setSelectedUser(user);
  const closeModal = () => setSelectedUser(null);

  const filteredUsers = userInfo.filter(user =>
    user.name.toLowerCase().includes(searchQuery.toLowerCase())  
  );



  return (
    <>
      <Header />
      <_.ProMain>
        <_.SInput>
          <_.SImg src={SearchImg} alt="돋보기" />
          <_.Search
            type="text"
            placeholder="유저 아이디를 입력하세요"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </_.SInput>
        <_.UserList>
          {console.log("신청자 페이지의:",selectedUser)}
          {filteredUsers.map((user) => (
            <Users onClick={() => openModal(user)} key={user.id} {...user}/>
          ))}
        </_.UserList>
      </_.ProMain>
      {selectedUser && <UserModal user={selectedUser} onClose={closeModal} />}
    </>
  );
}
