import Header from "../../components/header";
import Logo from '../../assets/header/Logo.svg';

export default function Apply(){
	return(
		<>
			<>
				<Header/>
			</>
			<>
				<img src={Logo} alt="PLOY Tech course" />
				<>테크코스 신청</>
			</>
			<>
				<form action="">
					<fieldset>
						<legend>
							자기소개
						</legend>
						<textarea name="intro" id="" maxLength={500}/>
					</fieldset>
					<fieldset>
						<legend>
							다짐
						</legend>
						<textarea name="promise" id="" maxLength={500}/>
					</fieldset>
				</form>
			</>
		</>
	);
}