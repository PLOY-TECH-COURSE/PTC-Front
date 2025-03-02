import React, { useState } from "react";
import Login from './login/login'; 
import SignUpModal from './signup/signup'; 


const ParentComponent = () => {
  const [isModalOpen, setIsModalOpen] = useState(false); // 회원가입 모달 열기/닫기 상태
  const [isLoginModalOpen, setLoginModalOpen] = useState(false); // 로그인 모달 열기/닫기 상태

  return (
    <div>
      <button onClick={() => setIsModalOpen(true)}>회원가입 모달 열기</button>

      {isModalOpen && (
        <SignUpModal 
          setIsModalOpen={setIsModalOpen} 
          setLoginModalOpen={setLoginModalOpen}  
        />
      )}

      {isLoginModalOpen && (
        <div>
          <h2>로그인 모달</h2>
          <button onClick={() => setLoginModalOpen(false)}>로그인 모달 닫기</button>
        </div>
      )}
    </div>
  );
};

export default ParentComponent;
