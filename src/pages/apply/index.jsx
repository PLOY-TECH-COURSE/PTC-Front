import Header from "../../components/header";
import Logo from '../../assets/header/Logo.svg';
import * as _ from "./style";
import { useState } from "react";  // useState만 사용

export default function Apply() {
  const [intro, setIntro] = useState("");  // 자기소개
  const [promise, setPromise] = useState("");  // 다짐
  const [introWarning, setIntroWarning] = useState(false);  // 자기소개 경고
  const [promiseWarning, setPromiseWarning] = useState(false);  // 다짐 경고
  const isFormValid = intro.trim() !== "" && promise.trim() !== "";  // 유효성 검사

  const handleChange = (e, setter, warningSetter) => {
    const value = e.target.value;
    setter(value);
    warningSetter(value.length >= 500);  // 500자 초과 시 경고
  };

  const handleSubmit = (e) => {
    e.preventDefault(); // 기본 제출 동작 방지
    if (!intro.trim()) {
      alert("자기소개란을 작성해주세요.");
      return;
    }
    if (!promise.trim()) {
      alert("다짐란을 작성해주세요.");
      return;
    }
    if (window.confirm("신청하시겠습니까?")) {
      console.log("Form Submitted", { intro, promise });
      alert("신청이 완료되었습니다.");

      // axios.post(/* 도메인 URL */, {
      //   intro,
      //   promise
      // })
      // .then((response) => {
      //   console.log("신청값이 제대로 넘어갔습니다.", { intro, promise });
      // })
      // .catch((error) => {
      //   console.error("Error creating the entry:", error);
      // });
    }
  };

  return (
    <_.ApMain>
      <_.ApHeader>
        <Header />
      </_.ApHeader>
      <_.ApForm>
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
            onClick={handleSubmit}
          >
            신청하기
          </_.ApBtn>
        </_.ApMForm>
      </_.ApForm>
    </_.ApMain>
  );
}
