import axiosInstance from '../lib/axiosInstance';

export const signupData = async (name,id,email,code,password, confirmPassword, text, grade, ban, number) => {
  try {
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
    if(response.status === 200){
        return true;
    }
    return false;
  } catch (error) {
      console.error('회원가입 오류:', error);
      return false;
  }
};
export const emailcode = async (email)=>{
    try {
      const response = await axiosInstance.post('/email',{
          "email":email
      });
        if(response.status === 200){
            return true;
        }
        else if(response.status === 400){
            alert("이미 있는 이메일이거나 이메일 형식이 이상합니다.");
            return false;
        }
    } catch (error) {
        console.log(error);
        alert("이미 있는 이메일이거나 이메일 형식이 이상합니다.");
      return false;
    }
}