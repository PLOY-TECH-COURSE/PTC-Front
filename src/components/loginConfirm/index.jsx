import {Outlet} from "react-router-dom";
import {useEffect} from "react";
import {refreshAccessToken} from "../../api/auth.js";
import {useRecoilState} from "recoil";
import {authAtom} from "../../recoil/authAtom.js";

export const LoginConfirm = () => {
    const [_, setAuth] = useRecoilState(authAtom);
    const decodeJWT = (token) => {
        try {
            // 토큰은 "header.payload.signature" 형태로 되어 있음
            const base64Url = token.split('.')[1]; // payload 부분 추출
            const base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/'); // Base64 형식으로 변환
            const jsonPayload = decodeURIComponent(
                atob(base64)
                    .split('')
                    .map((c) => `%${c.charCodeAt(0).toString(16).padStart(2, '0')}`)
                    .join('')
            );

            return JSON.parse(jsonPayload); // payload를 JSON으로 파싱
        } catch (error) {
            console.error('Invalid token', error);
            return null;
        }
    };
    const check = async ()=>{
        try {
            const newAccessToken = await refreshAccessToken();
            const at = decodeJWT(newAccessToken);
            localStorage.setItem('accessToken', newAccessToken);
            setAuth({role: at.role, uid: at.uid});
        } catch (refreshError) {
            console.error("Refresh token expired or invalid", refreshError);
            setAuth({role: '', uid: ''});
            localStorage.removeItem('accessToken');
        }
    }
    useEffect(() => {
        check();
    }, []);
    return (
        <Outlet/>
    )
}