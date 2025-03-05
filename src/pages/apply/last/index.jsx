import Logo from '../../../assets/Logo.svg';
import * as _ from "./style";
import { useState, useEffect } from "react";    
import { ApplyAPI } from "../../../api/apply";

export default function ApplyEnd({ onClose, intro, tech, study, hope }) {
  const [introText, setIntroText] = useState(intro);
  const [techText, setTechText] = useState(tech);
  const [studyText, setStudyText] = useState(study);
  const [hopeText, setHopeText] = useState(hope);

  const [studyWarning, setStudyWarning] = useState(false);
  const [hopeWarning, setHopeWarning] = useState(false);
  
  const isFormValid = studyText.trim() !== "" && hopeText.trim() !== "";

  const handleChange = (e, setter, warningSetter) => {
    const value = e.target.value;
    setter(value);
    warningSetter && warningSetter(value.length >= 500);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!studyText.trim()) {
      alert("배우고 싶은 내용을 작성해주세요.");
      return;
    }
    if (!hopeText.trim()) {
      alert("기대하는 점을 작성해주세요.");
      return;
    }
    if (window.confirm("신청하시겠습니까?")) {
      // ApplyAPI({ intro: introText, tech: techText, study: studyText, hope: hopeText });
      console.log(introText, techText, studyText, hopeText);
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
            <legend>배우고 싶은 것</legend>
            <textarea
              value={studyText}
              onChange={(e) => handleChange(e, setStudyText, setStudyWarning)}
              maxLength={500}
            />
            {studyWarning && <div className="warning">500자가 최대입니다.</div>}
          </_.ApField>
          <_.ApField>
            <legend>기대하는 점</legend>
            <textarea
              value={hopeText}
              onChange={(e) => handleChange(e, setHopeText, setHopeWarning)}
              maxLength={500}
            />
            {hopeWarning && <div className="warning">500자가 최대입니다.</div>}
          </_.ApField>
          <_.ApBtn
            type="submit"
            disabled={!isFormValid}
            onClick={handleSubmit}
          >
            신청하기
          </_.ApBtn>
        </_.ApMForm>
      </_.ApForm>
    </_.Overlay>
  );
}
