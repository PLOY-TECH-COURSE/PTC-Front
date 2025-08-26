import Down from "../../../assets/down.svg";
import { useState, useRef, useEffect } from "react";
import * as _ from "./style";
import Dropdown from "../dropDown";
import { updateUserRole } from "../../../api/permission";  

const Users = ({ onClick, img, id, name, email, promise, auth, setAuth }) => {
  const [view, setView] = useState(false);
  const dropdownRef = useRef(null);

  const handleAuthChange = async (newAuth) => {
    setAuth(newAuth); 
    await updateUserRole(id, newAuth);
    setView(false);  
  };

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setView(false);
      }
    };

    if (view) {
      document.addEventListener("mousedown", handleClickOutside);
    }
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [view]);

  return (
    <_.userBox>
      <_.userDesc>
        <_.userInfo>
          <_.userName>{name}</_.userName>
          <_.userEmail>{email}</_.userEmail>
          <_.userEmail>
            {String(promise).length > 12 ? String(promise).slice(0, 12) + "..." : promise}
          </_.userEmail>
        </_.userInfo>

        <_.BtnDiv>
          <_.auth>권한</_.auth>

          {/* ✅ 버튼 + 드롭다운 묶음만 ref로 감싸기 */}
          <div ref={dropdownRef} style={{ position: "relative", display: "inline-block" }}>
            <_.userDD onClick={() => setView(!view)}>
              {auth}
              <_.authImg src={Down} alt="열기" isOpen={view} />
            </_.userDD>
            {view && (
              <div style={{ position: "absolute", top: "0.1rem" }}>
                <Dropdown onAuthChange={handleAuthChange} />
              </div>
            )}
          </div>
        </_.BtnDiv>
      </_.userDesc>
    </_.userBox>
  );
};

export default Users;
