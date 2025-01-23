import axiosInstance from '../lib/axiosInstance';

export const signupData = async (name,id,email,code,password,text) => {
  try {
    console.log(name,id,email,code,password,text,old,ban,bunho);
    const response = await axiosInstance.post('/signup', { name, id, email, code, password, text,old,ban,bunho });
    return response;
  } catch (error) {
    console.error("회원가입 오류:", error);
    throw error;
  }
};
export const emailcode = async (email)=>{
    console.log(email);
    try {
      const response = await axiosInstance.post('/verify', { email });
      return response;
    } catch (error) {
      console.error("인증번호 오류:", error);
      throw error;
    }
}