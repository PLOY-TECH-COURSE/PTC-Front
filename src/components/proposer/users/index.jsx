import { deleteProposer,approveProposer } from "../../../api/proposer";
import * as _ from "./style";

const Users = ({ onClick, id, user_id, profile, name, email, refreshUsers }) => {
  const deleteProposerBTN = async (e) => {
    e.stopPropagation(); 
    try {
      if (window.confirm(`${name}님의 테크코스 신청을 거부하시겠습니까?`)) {
        await deleteProposer(id);
        refreshUsers();
      }
    } catch (error) {
      console.error("신청자 거부 에러 : ", error);
    }
  };

  const approveProposerBTN = async (e) => {
    e.stopPropagation(); 
    try {
      if (window.confirm(`${name}님의 테크코스 신청을 승인하시겠습니까?`)) {
        await approveProposer(id, name);
        refreshUsers(); 
      }
    } catch (error) {
      console.error("신청자 신청 에러 : ", error);
    }
  };

  return (
    <_.userBox onClick={onClick} style={{ cursor: "pointer" }}>
      <_.userImg src={profile} alt={`${name}'s profile`} />
      <_.userDesc>
        <_.userInfo>
          <_.userName>{name}</_.userName>
          <_.userEmail>{email}</_.userEmail>
        </_.userInfo>
        <_.BtnDiv>
          <_.userBtn onClick={approveProposerBTN}>승인</_.userBtn>
          <_.userBtn onClick={deleteProposerBTN}>거부</_.userBtn>
        </_.BtnDiv>
      </_.userDesc>
    </_.userBox>
  );
};

export default Users;
