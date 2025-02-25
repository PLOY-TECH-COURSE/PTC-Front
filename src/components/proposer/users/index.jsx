import Profile from "../../../assets/proposer/default.png";
import * as _ from "./style";

const Users = ({ onClick,img, name, email, intro, promise }) => {
	return(
    <_.userBox onClick={onClick} style={{ cursor: "pointer" }}>
      <_.userImg src={img || Profile} alt={`${name}'s profile`} />
			<_.userDesc>
				<_.userInfo>
					<_.userName>{name}</_.userName>
					<_.userEmail>{email}</_.userEmail>
				</_.userInfo>
				<_.BtnDiv>
					<_.userBtn>승인</_.userBtn>
					<_.userBtn>거부</_.userBtn>
				</_.BtnDiv>
			</_.userDesc>

    </_.userBox>
	);
}
export default Users;