import { useState } from "react";
import Header from "../../components/header";
import Users from "../../components/proposer/users";
import UserModal from "../../components/proposer/modal";
import SearchImg from "../../assets/proposer/search.svg";
import * as _ from "./style";

export default function Proposer() {
  const userInfo = [
    {
      img: "",
      name: "이초록",
      email: "1234@gmail.com",
      intro: "안녕하세요, 저는 새로운 도전과 배움에 열정을 가진 학생입니다. 다양한 경험을 통해 성장하고, 저만의 색깔을 만들어가고자 노력하고 있습니다. 특히 팀워크와 커뮤니케이션을 중요시하며, 함께 목표를 향해 나아가는 과정에서 큰 보람을 느낍니다. 평소에 창의적인 아이디어를 고민하고 실현하는 것을 즐기며, 문제를 해결하기 위한 새로운 접근법을 찾는 데 흥미를 가지고 있습니다. 또한, 책임감이 강해 맡은 일은 끝까지 완수하려고 노력하며, 스스로에게 늘 발전할 수 있는 과제를 부여하고 이를 실행합니다. 동아리 활동을 통해 새로운 사람들과 협력하며 의미 있는 프로젝트를 수행하고, 제 잠재력을 더욱 확장하고 싶습니다. 부족한 점이 많지만, 배움과 열정으로 보완하며 동아리에서 긍정적인 영향을 주고받는 구성원이 되고 싶습니다. 감사합니다.",
      promise: "동아리에 가입하게 된다면, 저의 열정을 바탕으로 모든 활동에 최선을 다하겠습니다. 주어진 역할과 책임을 성실히 수행하며, 동아리가 발전할 수 있도록 적극적으로 기여할 것입니다. 특히 프로젝트나 행사 준비 과정에서 팀원들과 협력하며, 효율적이고 창의적인 방법으로 문제를 해결하기 위해 노력하겠습니다. 또한, 새로운 지식을 배우고 이를 공유하며 동아리 내에서 서로 성장할 수 있는 환경을 조성하고 싶습니다. 활동을 하며 다양한 시도를 두려워하지 않고, 실패에서 배우며 더 나은 결과를 도출하는 데 힘쓸 것을 약속드립니다. 동아리가 제게 기대하는 바를 이해하고, 이를 충족하며 동아리의 가치와 목표를 함께 이루어나가겠습니다. 항상 겸손한 자세로 배우고, 열린 마음으로 동아리 활동에 임하겠습니다.",
    },
    {
      img: "",
      name: "김파랑",
      email: "9876@naver.com",
      intro: "오이 극혐",
      promise: "수업 중에 딴짓 안할게요..ㅠㅠ",
    },
    {
      img: "",
      name: "수푸링",
      email: "spring@kakao.com",
      intro: "자바 넘 어려워ㅓ",
      promise: "어렵워도 이겨내겠습니다.",
    },
		{
      img: "",
      name: "에이치",
      email: "htmlhate@.com",
      intro: "자바 넘 어려워ㅓ",
      promise: "어렵워도 이겨내겠습니다.",
    },
  ];

  const [selectedUser, setSelectedUser] = useState(0);

  const openModal = (user) => {
    setSelectedUser(user);
  };

  const closeModal = () => {
    setSelectedUser(0);
  };

  return (
    <>
      <Header />
      <_.ProMain>
        <_.SInput>
          <_.SImg src={SearchImg} alt="돋보가" />
        <_.Search type="text" placeholder="유저 아이디를 입력하세요" />
        </_.SInput>
        <_.UserList>
          {userInfo.map((user, index) => (
            <Users onClick={() => openModal(user)} key={index} {...user} />
          ))}
        </_.UserList>
      </_.ProMain>
      {selectedUser && <UserModal user={selectedUser} onClose={closeModal} />}
    </>
  );
}
