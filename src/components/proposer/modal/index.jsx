import * as _ from "./style";

export default function UserModal({ user, onClose }) {
  return (
    <_.Overlay onClick={onClose}>
      <_.Modal onClick={(e) => e.stopPropagation()} > {/*모달 내부 이벤트 방지*/}
        <_.Info>
          <_.Name>{user.name}</_.Name>
          <p>이메일: {user.email}</p>
        </_.Info>
        <_.From>
          <_.From>
            <_.Title>소개</_.Title>
            <p>{user.intro}</p>
          </_.From>
          <_.From>
            <_.Title>기술경험</_.Title>
            <p>{user.skill}</p>
          </_.From>
          <_.From>
            <_.Title>배우고 싶은 것</_.Title>
            <p>{user.study}</p>
          </_.From>
          <_.From>
            <_.Title>기대하는 점</_.Title>
            <p>{user.expectation}</p>
          </_.From>
        </_.From>
      </_.Modal>
    </_.Overlay>
  );
}
    // "skill": "스프링 써봄ㅋ",
    // "study": "코루틴 써보고 싶음",
    // "expectation": "세계 정복을 꿈꾸고 있습니다."

