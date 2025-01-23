import Profile from "../../../assets/proposer/default.png";
import * as _ from "./style";

const Users = ({ img, name, email, intro, promise }) => {
	// console.log(img, name, email, intro, promise);
	return(
    <_.userBox>
      <_.userImg src={img || Profile} alt={`${name}'s profile`} />
			<_.userDesc>
				<_.userInfo>
					<_.userName>{name}</_.userName>
					<_.userEmail>{email}</_.userEmail>
				</_.userInfo>
				<div>
					<button>승인</button>
					<button>거부</button>
				</div>
				{/* <p>Intro: {intro}</p>
				<p>Promise: {promise}</p> */}
			</_.userDesc>

    </_.userBox>
	);
}
export default Users;