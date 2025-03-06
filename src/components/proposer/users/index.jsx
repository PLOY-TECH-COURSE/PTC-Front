import Profile from "../../../assets/proposer/default.png";
import { deleteProposer,approveProposer } from "../../../api/proposer";
import * as _ from "./style";

const Users = ({ onClick,id,user_id,profile,name, email, intro, promise }) => {
	const deleteProposerBTN = async (id) => {
		try {
			if (window.confirm(`${name}님의 테크코스 신청을 거부하시겠습니까?`)){
				await deleteProposer(id);
			}
		} catch (error) {
				console.error("신청자 거부 에러 : ", error);
		}
	};
	const approveProposerBTN = async (id) => {
		try {
			if (window.confirm(`${name}님의 테크코스 신청을 승인하시겠습니까?`)){
				await approveProposer(id,name);
			}
		} catch (error) {
				console.error("신청자 신청 에러 : ", error);
		}
	};
	return(
    <_.userBox onClick={onClick} style={{ cursor: "pointer" }}>
      <_.userImg src={profile} alt={`${name}'s profile`} />
			<_.userDesc>
				<_.userInfo>
					<_.userName>{name}</_.userName>
					<_.userEmail>{email}</_.userEmail>
				</_.userInfo>
				<_.BtnDiv>
					<_.userBtn onClick={()=>approveProposerBTN(user_id)}>승인</_.userBtn>
					<_.userBtn onClick={()=>deleteProposerBTN(id)}>거부</_.userBtn>
				</_.BtnDiv>
			</_.userDesc>

    </_.userBox>
	);
}
export default Users;