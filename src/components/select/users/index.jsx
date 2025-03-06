import Down from "../../../assets/down.svg";
import { useState } from "react";
import * as _ from "./style";
import Dropdown from "../dropDown";
import { updateUserRole } from "../../../api/permission";  

const Users = ({ onClick, img, id, name, email, promise, auth, setAuth }) => {
  const [view, setView] = useState(false);

  const handleAuthChange = async (newAuth) => {
    setAuth(newAuth); 
  
    const updatedRole = await updateUserRole(id, newAuth);
    setView(false);  
  };
  
  return (
    <_.userBox>
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
