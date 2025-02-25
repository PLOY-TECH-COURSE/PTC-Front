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
            <_.Title>다짐</_.Title>
            <p>{user.promise}</p>
          </_.From>
        </_.From>
      </_.Modal>
    </_.Overlay>
  );
}

