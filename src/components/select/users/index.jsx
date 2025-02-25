import Profile from "../../../assets/proposer/default.png";
import Down from "../../../assets/down.svg";
import { useState } from "react";
import * as _ from "./style";
import Dropdown from "../dropDown";

const Users = ({ onClick, img, name, email, promise, auth, setAuth }) => {
  const [view, setView] = useState(false);

  // 권한을 변경하는 함수
  const handleAuthChange = (newAuth) => {
    setAuth(newAuth); // 선택한 권한을 상위 상태로 변경
    setView(false); // 드롭다운 닫기
  };

  return (
    <_.userBox>
      <_.userImg src={img || Profile} alt={`${name}'s profile`} />
      <_.userDesc>
        <_.userInfo>
          <_.userName>{name}</_.userName>
          <_.userEmail>{email}</_.userEmail>
          <_.userEmail>{String(promise).length > 12 ? String(promise).slice(0, 12) + "..." : promise}</_.userEmail>
        </_.userInfo>
        <_.BtnDiv>
          <_.auth>권한</_.auth>
          <_.userDD onClick={() => setView(!view)}>
            {auth}
            <_.authImg src={Down} alt="열기" isOpen={view} />
            {view && <Dropdown onAuthChange={handleAuthChange} />}
          </_.userDD>
        </_.BtnDiv>
      </_.userDesc>
    </_.userBox>
  );
};

export default Users;
