import {Outlet} from "react-router-dom";
import {useEffect} from "react";
import {refreshAccessToken} from "../../api/auth.js";
import {useRecoilState} from "recoil";
import {authAtom} from "../../recoil/authAtom.js";

export const LoginConfirm = () => {
    const [_, setAuth] = useRecoilState(authAtom);
    const check = async ()=>{
        try {
            const newAccessToken = await refreshAccessToken();
            localStorage.setItem('accessToken', newAccessToken);
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