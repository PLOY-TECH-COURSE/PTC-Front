import Logo from "../../assets/Logo.svg";
import * as _ from "./style";
import { useState, useEffect } from "react";
import { ApplyAPI } from "../../api/apply";

export default function Apply({ onClose }) {
  const [intro, setIntro] = useState("");
  const [tech, setTech] = useState("");
  const [study, setStudy] = useState("");
  const [hope, setHope] = useState("");
  const [introWarning, setIntroWarning] = useState(false);
  const [promiseWarning, setPromiseWarning] = useState(false);
  const [studyWarning, setStudyWarning] = useState(false);
  const [hopeWarning, setHopeWarning] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [ModalOpen, setModalOpen] = useState(false);
  const isFormValid =
    intro.trim() !== "" &&
    tech.trim() !== "" &&
    study.trim() !== "" &&
    hope.trim() !== "";

  console.log(onClose);
  const handleChange = (e, setter, warningSetter) => {
    const value = e.target.value;
    setter(value);
    warningSetter(value.length >= 500);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!intro.trim() || !tech.trim() || !study.trim() || !hope.trim()) {
      alert("모든 항목을 작성해주세요.");
      return;
    }
  
    if (!window.confirm("신청하시겠습니까?")) {
      return;
    }
  
    try {
      await ApplyAPI({ intro, tech, study, hope });
      onClose();
    } catch (error) {
      console.error("API 요청 실패:", error);
    }
  };
  

  useEffect(() => {
    const handleBeforeUnload = (event) => {
      if (isFormValid) {
        event.preventDefault();
        event.returnValue = "작성 중인 내용이 사라집니다. 새로고침하시겠습니까?";
      }
    };

    window.addEventListener("beforeunload", handleBeforeUnload);
    return () => {
      window.removeEventListener("beforeunload", handleBeforeUnload);
    };
  }, [isFormValid]);

  const handleOverlayClick = (e) => {
    if (isFormValid) {
      if (!window.confirm("작성 중인 내용이 사라집니다. 정말 닫으시겠습니까?")) {
        return;
      }
    }
    onClose();
  };
  if (isSubmitted) {
    console.log(intro, tech, study, hope);
    onClose();
    return ApplyAPI({intro, tech, study, hope});
  }

  return (
    <_.Overlay onClick={handleOverlayClick}>
      <_.ApForm onClick={(e) => e.stopPropagation()}>
        <_.ApImg src={Logo} alt="PLOY Tech course" />
        <_.ApTitle>테크코스 신청</_.ApTitle>
        <_.ApMForm>
          <_.ApField>
            <legend>자기소개</legend>
            <textarea
              placeholder={"간단히 본인을 소개해주세요!"}
              value={intro}
              onChange={(e) => handleChange(e, setIntro, setIntroWarning)}
              maxLength={500}
            />
            {introWarning && <div className="warning">500자가 최대입니다.</div>}
          </_.ApField>
          <_.ApField>
            <legend>기술 경험</legend>
            <textarea
              placeholder={"사용해 본 기술이나 개발 경험을 알려주세요."}
              value={tech}
              onChange={(e) => handleChange(e, setTech, setPromiseWarning)}
              maxLength={500}
            />
            {promiseWarning && <div className="warning">500자가 최대입니다.</div>}
          </_.ApField>
          <_.ApField>
            <legend>배우고 싶은 것</legend>
            <textarea
              placeholder={"이 코스를 통해 배우고 싶은 내용을 자유롭게 적어주세요."}
              value={study}
              onChange={(e) => handleChange(e, setStudy, setStudyWarning)}
              maxLength={500}
            />
            {studyWarning && <div className="warning">500자가 최대입니다.</div>}
          </_.ApField>
          <_.ApField>
            <legend>기대하는 점</legend>
            <textarea
              placeholder={"테크 코스에서 기대하는 점을 간단히 작성해주세요."}
              value={hope}
              onChange={(e) => handleChange(e, setHope, setHopeWarning)}
              maxLength={500}
            />
            {hopeWarning && <div className="warning">500자가 최대입니다.</div>}
          </_.ApField>
          <_.ApBtn type="submit" disabled={!isFormValid} onClick={handleSubmit}>
            신청하기
          </_.ApBtn>
        </_.ApMForm>
      </_.ApForm>
    </_.Overlay>
  );
}
