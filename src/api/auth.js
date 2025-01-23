import axiosInstance from "../lib/axiosInstance.js";

export const postLogin = async ({email, password}) =>{
    try{
        const res = await axiosInstance.post('http://172.21.10.82:8080/login', {
            email:email,
            password:password
        });

        console.log(res);
        return res;
    }catch (err){
        console.log(err);
    }
}

export const logout = async () =>{
    try{
        const res = await axiosInstance.post('/logout');
        return res;
    }catch (err){
        console.log(err);
    }
}