import { useState } from "react";
import Header from "../../components/header";
import Users from "../../components/proposer/users";
import UserModal from "../../components/proposer/modal";

export default function Proposer() {
  const userInfo = [
    {
      img: "",
      name: "이초록",
      email: "1234@gmail.com",
      intro: "멋쟁이 토마토",
      promise: "열심히 하겠습니다!!!",
    },
    {
      img: "",
      name: "김파랑",
      email: "9876@naver.com",
      intro: "오이 극혐",
      promise: "수업 중에 딴짓 안할게요..ㅠㅠ",
    },
    {
      img: "",
      name: "수푸링",
      email: "spring@kakao.com",
      intro: "자바 넘 어려워ㅓ",
      promise: "어렵워도 이겨내겠습니다.",
    },
		{
      img: "",
      name: "에이치",
      email: "htmlhate@.com",
      intro: "자바 넘 어려워ㅓ",
      promise: "어렵워도 이겨내겠습니다.",
    },
  ];

  const [selectedUser, setSelectedUser] = useState(0);

  const openModal = (user) => {
    setSelectedUser(user);
  };

  const closeModal = () => {
    setSelectedUser(0);
  };

  return (
    <>
      <Header />
      <_.ProMain>
        <_.SInput>
          <_.SImg src={SearchImg} alt="돋보가" />
        <_.Search type="text" placeholder="유저 아이디를 입력하세요" />
        </_.SInput>
        <_.UserList>
          {userInfo.map((user, index) => (
            <Users onClick={() => openModal(user)} key={index} {...user} />
          ))}
        </_.UserList>
      </_.ProMain>
      {selectedUser && <UserModal user={selectedUser} onClose={closeModal} />}
    </>
  );
}
