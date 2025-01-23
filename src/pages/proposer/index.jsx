import { useState } from "react";
import Header from "../../components/header";
import Users from "../../components/proposer/users";
import * as _ from "./style";

export default function Proposer(){
	const userInfo = [
		{
			img : "",
			name : "이초록",
			email : "1234@gmail.com",
			intro : "멋쟁이 토마토",
			promise : "열심히 하겠습니다!!!"
		},
		{
			img : "",
			name : "김파랑",
			email : "9876@naver.com",
			intro : "오이 극혐",
			promise : "수업 중에 딴짓 안할게요..ㅠㅠ"
		},
		{
			img : "",
			name : "수푸링",
			email : "1205@gkakao.com",
			intro : "자바 넘 어려워ㅓ",
			promise : "어렵워도 이겨내겠습니다."
		},
		{
			img : "",
			name : "이초록",
			email : "1234@gmail.com",
			intro : "멋쟁이 토마토",
			promise : "열심히 하겠습니다!!!"
		},
		{
			img : "",
			name : "김파랑",
			email : "9876@naver.com",
			intro : "오이 극혐",
			promise : "수업 중에 딴짓 안할게요..ㅠㅠ"
		},
		{
			img : "",
			name : "수푸링",
			email : "1205@kakao.com",
			intro : "자바 넘 어려워ㅓ",
			promise : "어렵워도 이겨내겠습니다."
		},
	]

	// const [modal,setModal] = useState(0);

	return(
		<>
			<Header/>
			<_.ProMain>
				<input type="search" placeholder="유저 아이디를 입력하세요" />
				<_.userList>
					{userInfo.map((user, index) => (
            <Users key={index} {...user} />
          ))}
				</_.userList>
			</_.ProMain>
		</>
	);
}