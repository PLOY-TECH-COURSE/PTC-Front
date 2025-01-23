import Header from "../../components/header";
import Logo from '../../assets/header/Logo.svg';
import * as _ from "./style";
import { useRef, useState } from "react";
// import axios from "axios";


export default function Apply() {
  const [formState, setFormState] = useState({
    intro: "",
    promise: "",
    introWarning: false,
    promiseWarning: false,
  });
  const introRef = useRef(null);
  const promiseRef = useRef(null);

  const isFormValid = formState.intro.trim() !== "" && formState.promise.trim() !== "";

  const handleChange = (e, field) => {
    const value = e.target.value;
    setFormState((prevState) => ({
      ...prevState,
      [field]: value,
      [`${field}Warning`]: value.length >= 500,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const introValue = introRef.current?.value.trim() || "";
    const promiseValue = promiseRef.current?.value.trim() || "";

    if (!introValue) {
      alert("자기소개란을 작성해주세요.");
      return;
    }
    if (!promiseValue) {
      alert("다짐란을 작성해주세요.");
      return;
    }

    if (window.confirm("신청하시겠습니까?")) {
      console.log("Form Submitted", { intro: introValue, promise: promiseValue });
      alert("신청이 완료되었습니다.");

      // axios.post(/*도메인 뭔지 몰라용..*/, {
      //     // PloyTechCourse2025, //이름
      //     // ploytechcourse@gmail.com,//이메일
      //     introValue, // 자기소개
      //     promise,// 다짐
      // })
      // .then((response) => {
      //     console.log("신청값이 제대로 넘어갔습니다...아마?",{ intro: introValue, promise: promiseValue });
      // })
      // .catch((error) => {
      //     console.error("Error creating the entry:", error);
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
        <_.ApMForm onSubmit={handleSubmit}>
          {["intro", "promise"].map((field) => (
            <_.ApField key={field}>
              <legend>{field === "intro" ? "자기소개" : "다짐"}</legend>
              <textarea
                value={formState[field]}
                onChange={(e) => handleChange(e, field)}
                maxLength={500}
                ref={field === "intro" ? introRef : promiseRef}
              />
              {formState[`${field}Warning`] && <div className="warning">500자가 최대입니다.</div>}
            </_.ApField>
          ))}
          <_.ApBtn type="submit" disabled={!isFormValid} onClick={handleSubmit}>
            신청하기
          </_.ApBtn>
        </_.ApMForm>
      </_.ApForm>
    </_.ApMain>
  );
}
