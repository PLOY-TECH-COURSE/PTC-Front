import axiosInstance from "../lib/axiosInstance.js";

export const postLogin = async ({email, password}) =>{
    console.log(email, password)
    try{
        const res = await axiosInstance.post('/login', {
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