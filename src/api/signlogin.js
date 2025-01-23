import axiosInstance from '../lib/axiosInstance';

export const signupData = async (name,id,email,code,password, confirmPassword, text, grade, ban, number) => {
  try {
    console.log(name,id,email,code,password,text,grade,ban,number);
    const response = await axiosInstance.post('/signup', {
        uid:id,
        name: name,
        email:email,
        code:code,
        password:password,
        rePassword:confirmPassword,
        bio:text,
        grade:grade,
        userClass:ban,
        number:number
    });
    return response;
  } catch (error) {
    console.error("회원가입 오류:", error);
    throw error;
  }
};
export const emailcode = async (email)=>{
    console.log(email);
    try {
      const response = await axiosInstance.post('/email',{
          email:email
      });
        console.log(response);
      return response;
    } catch (error) {
      console.error("인증번호 오류:", error);
      throw error;
    }
}