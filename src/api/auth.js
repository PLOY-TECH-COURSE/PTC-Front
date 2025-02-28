import axiosInstance from "../lib/axiosInstance.js";
import axios from "axios";

export const postLogin = async ({email, password}) =>{
    console.log(email, password)
    try{
        const res = await axiosInstance.post('/login', {
            email:email,
            password:password
        });
        if(res.status === 200){
            localStorage.setItem('accessToken', res.headers.authorization);
            window.location.reload();
            return true;
        }
        return false;
    }catch (err){
        console.log(err);
    }
}

export const logout = async () =>{
    try{
        const res = await axiosInstance.post('/logout');
        console.log(res);
        if(res.status === 200){
            localStorage.removeItem('accessToken');
            window.location.reload();
            return true;
        }
        return false;
    }catch (err){
        console.log(err);
    }
}

export const refreshAccessToken = async () => {
    const response = await axios.post('/api/refresh', null, {
        withCredentials: true,
    });
    return response.headers.authorization;
};