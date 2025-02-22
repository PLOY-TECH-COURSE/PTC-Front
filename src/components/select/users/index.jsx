import Profile from "../../../assets/proposer/default.png";
import Down from "../../../assets/down.svg";
import * as _ from "./style";

const Users = ({ onClick,img, name, email, promise, auth }) => {
	return(
    <_.userBox >
      <_.userImg src={img || Profile} alt={`${name}'s profile`} />
			<_.userDesc>
				<_.userInfo>
					<_.userName>{name}</_.userName>
					<_.userEmail>{email}</_.userEmail>
					<_.userEmail>{String(promise).length >12 ? String(promise).slice(0,12)+"..": promise}</_.userEmail>
				</_.userInfo>
				<_.BtnDiv>
					<_.auth>권한</_.auth>
					<_.userDD>
						{auth}
						<_.authImg src={Down} alt="열기"/>
					</_.userDD>
				</_.BtnDiv>
			</_.userDesc>

    </_.userBox>
	);
}
export default Users;