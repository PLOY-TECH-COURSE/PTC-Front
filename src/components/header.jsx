import Logo from "../assets/Logo.svg";
import "../styles/header.css";
function Header() {
    function alert1() {
        alert("아직 준비되지 않음!");
    }
    return (
        <div id="container">
            <img src={Logo} id="logo11" alt="Logo"/>
            <div id="textbox">
                <p id="selcettext">홈</p>
                <p id="text" onClick={alert1}>글목록</p>
                <p id="text" onClick={alert1}>공지사항</p>
                <button id="loginbutton" onClick={alert1}>로그인</button>
                <button id="signupbutton" >회원가입</button>
            </div>
        </div>
    );
}

export default Header;
