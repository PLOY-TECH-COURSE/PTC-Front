import axiosInstance from '../lib/axiosInstance';

export const emailcode = async (email)=>{
    try {
      const response = await axiosInstance.post('/re/send', 
        { email: email }, 
    );
    
        if(response.status === 200){
            return true;
        }
    } catch (error) {
        console.log(error);
      return false;
    }
}
export async function valid(email, code) {
    console.log(email,code);
    try {
      const res = await axiosInstance.post('/re/validate', {
        "email": email,
        "code": code,
      });
      return res.status === 200;
    } catch (err) {
      console.error(err);
      return false;
    }
  }
export async function change(email,password) {
    try {
      const res = await axiosInstance.post('/re/make', {
        "email": email,
        "password": password,
      });
      return res.status === 200;
    } catch (err) {
      console.error(err);
      return false;
    }
  }