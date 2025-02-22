import { useState } from "react";
import Header from "../../components/header";
import Users from "../../components/select/users/index.jsx";
import SearchImg from "../../assets/proposer/search.svg";
import * as _ from "./style";

export default function Select() {
  const userInfo = [
    {
      img: "",
      name: "이초록",
      email: "1234@gmail.com",
      promise: "동아리에 가입하게 된다면, 저의 열정을 바탕으로 모든 활동에 최선을 다하겠습니다. 주어진 역할과 책임을 성실히 수행하며, 동아리가 발전할 수 있도록 적극적으로 기여할 것입니다. 특히 프로젝트나 행사 준비 과정에서 팀원들과 협력하며, 효율적이고 창의적인 방법으로 문제를 해결하기 위해 노력하겠습니다. 또한, 새로운 지식을 배우고 이를 공유하며 동아리 내에서 서로 성장할 수 있는 환경을 조성하고 싶습니다. 활동을 하며 다양한 시도를 두려워하지 않고, 실패에서 배우며 더 나은 결과를 도출하는 데 힘쓸 것을 약속드립니다. 동아리가 제게 기대하는 바를 이해하고, 이를 충족하며 동아리의 가치와 목표를 함께 이루어나가겠습니다. 항상 겸손한 자세로 배우고, 열린 마음으로 동아리 활동에 임하겠습니다.",
    },
    {
      img: "",
      name: "김파랑",
      email: "9876@naver.com",
      promise: "수업 중에 딴짓 안할게요..ㅠㅠ",
    },
    {
      img: "",
      name: "수푸링",
      email: "spring@kakao.com",
      promise: "어렵워도 이겨내겠습니다.",
    },
		{
      img: "",
      name: "에이치",
      email: "htmlhate@hi.com",
      promise: "요즘 애들 너무 무섭게 생겨가지고\n 어케 잘 할 수 있을지 모르겟네요..",
    },
    {
      img: "",
      name: "씨에스",
      email: "css1234@.byecom",
      promise: "그래도 염심히 살아보겠스빈다.",
    },
  ];

  return (
    <>
      <Header />
      <_.ProMain>
        <_.SInput>
          <_.SImg src={SearchImg} alt="돋보기" />
          <_.Search type="text" placeholder="유저 아이디를 입력하세요" />
        </_.SInput>
        <_.UserList>
          {userInfo.map((user, index) => (
            <Users key={index} {...user} />
          ))}
        </_.UserList>
      </_.ProMain>
    </>
  );
}
