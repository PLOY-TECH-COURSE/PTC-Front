export default function UserModal({ user, onClose }) {
  return (
    <div style={overlayStyle} onClick={onClose}>
      <div
        style={modalStyle}
        onClick={(e) => e.stopPropagation()} // 모달 내부 클릭 이벤트 전파 방지
      >
        <h2>{user.name}</h2>
        <p>이메일: {user.email}</p>
        <p>소개: {user.intro}</p>
        <p>다짐: {user.promise}</p>
      </div>
    </div>
  );
}

const overlayStyle = {
  position: "fixed",
  top: 0,
  left: 0,
  width: "100%",
  height: "100%",
  backgroundColor: "rgba(108, 108, 108, 0.5)", // 반투명 #6C6C6C
  backdropFilter: "blur(10px)", // 배경 흐림 효과
  zIndex: 1000,
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
};

const modalStyle = {
  backgroundColor: "white",
  padding: "20px",
  borderRadius: "8px",
  boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
  zIndex: 1001,
};
