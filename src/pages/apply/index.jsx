
import Logo from '../../assets/Logo.svg';
import * as _ from "./style";
import { useState, useEffect } from "react";    
import { ApplyAPI } from "../../api/apply";

export default function Apply({ onClose }) {
  const [intro, setIntro] = useState("");
  const [promise, setPromise] = useState("");  
  const [introWarning, setIntroWarning] = useState(false);
  const [promiseWarning, setPromiseWarning] = useState(false);
  const isFormValid = intro.trim() !== "" && promise.trim() !== "";

  const handleChange = (e, setter, warningSetter) => {
    const value = e.target.value;
    setter(value);
    warningSetter(value.length >= 500); 
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!intro.trim()) {
      alert("자기소개란을 작성해주세요.");
      return;
    }
    if (!promise.trim()) {
      alert("다짐란을 작성해주세요.");
      return;
    }
    if (window.confirm("신청하시겠습니까?")) {
      ApplyAPI({intro,promise});
    }
  };
  useEffect(() => {
    const handleBeforeUnload = (event) => {
      event.preventDefault();
      event.returnValue = "작성 중인 내용이 사라집니다. 새로고침하시겠습니까?";
    };

    window.addEventListener("beforeunload", handleBeforeUnload);
    return () => {
      window.removeEventListener("beforeunload", handleBeforeUnload);
    };
  }, []);
  return (
    <_.Overlay onClick={onClose}>
      <_.ApForm onClick={(e) => e.stopPropagation()}>
        <_.ApImg src={Logo} alt="PLOY Tech course" />
        <_.ApTitle>테크코스 신청</_.ApTitle>
        <_.ApMForm>
          <_.ApField>
            <legend>자기소개</legend>
            <textarea
              value={intro}
              onChange={(e) => handleChange(e, setIntro, setIntroWarning)}
              maxLength={500}
            />
            {introWarning && <div className="warning">500자가 최대입니다.</div>}
          </_.ApField>
          <_.ApField>
            <legend>다짐</legend>
            <textarea
              value={promise}
              onChange={(e) => handleChange(e, setPromise, setPromiseWarning)}
              maxLength={500}
            />
            {promiseWarning && <div className="warning">500자가 최대입니다.</div>}
          </_.ApField>
          <_.ApBtn
            type="submit"
            disabled={!isFormValid}
            onClick={() => {setIsApplyModal(true),handleSubmit}}
          >
            신청하기
          </_.ApBtn>
        </_.ApMForm>
      </_.ApForm>
    </_.Overlay>
  );
}