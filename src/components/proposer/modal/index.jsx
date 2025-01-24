import * as _ from "./style";

export default function UserModal({ user, onClose }) {
  return (
    <_.Overlay onClick={onClose}>
      <_.Modal onClick={(e) => e.stopPropagation()} > {/*모달 내부 이벤트 방지*/}
        <h2>{user.name}</h2>
        <p>이메일: {user.email}</p>
        <p>소개: {user.intro}</p>
        <p>다짐: {user.promise}</p>
      </_.Modal>
    </_.Overlay>
  );
}

