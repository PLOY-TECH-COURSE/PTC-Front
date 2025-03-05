import Logo from "../../../assets/Logo.svg";
import * as _ from "./style";
import { useState, useEffect } from "react";
import ApplyEnd from "../last";

export default function Apply({ onClose }) {
  const [intro, setIntro] = useState("");
  const [tech, setTech] = useState("");
  const [study, setStudy] = useState("");
  const [hope, setHope] = useState("");
  const [introWarning, setIntroWarning] = useState(false);
  const [promiseWarning, setPromiseWarning] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [ModalOpen, setModalOpen] = useState(false);
  const isFormValid = intro.trim() !== "" && tech.trim() !== "";

  console.log(onClose);
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
    if (!tech.trim()) {
      alert("기술경험란을 작성해주세요.");
      return;
    }
    if (window.confirm("다음으로 넘어가시면 수정불가합니다.\n다음으로 넘어가시겠습니까?")){
      setIsSubmitted(true);
    }
  };

  useEffect(() => {
    const handleBeforeUnload = (event) => {
      if (intro.trim() || tech.trim()) {
        event.preventDefault();
        event.returnValue = "작성 중인 내용이 사라집니다. 새로고침하시겠습니까?";
      }
    };

    window.addEventListener("beforeunload", handleBeforeUnload);
    return () => {
      window.removeEventListener("beforeunload", handleBeforeUnload);
    };
  }, [intro, tech]);

  const handleOverlayClick = (e) => {
    if (intro.trim() || tech.trim()) {
      if (!window.confirm("작성 중인 내용이 사라집니다. 정말 닫으시겠습니까?")) {
        return;
      }
    }
    onClose();
  };
  const handleClose = () => {
    console.log("모달 닫힘");
    setModalOpen(false);
    onClose();  
  };
  if (isSubmitted) {
    return <ApplyEnd intro={intro} tech={tech} study={study} hope={hope} onClose={handleClose} />
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
          <_.ApBtn
            type="submit"
            disabled={!isFormValid}
            onClick={handleSubmit}
          >
            다음으로
          </_.ApBtn>
        </_.ApMForm>
      </_.ApForm>
    </_.Overlay>
  );
}
