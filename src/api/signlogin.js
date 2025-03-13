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
const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export const emailcode = async (email) => {
    try {
        if (!emailRegex.test(email)) {
            alert("이메일 형식이 올바르지 않습니다.");
            return false;
        }



        const response = await axiosInstance.post('/email', { email });

        if (response.status === 200) {
            return true;
        }
    } catch (error) {
        if (error.response && error.response.status === 400) {
            alert("이미 사용중인 이메일입니다.");
        } else {
            console.log(error);
            alert("네트워크 오류가 발생했습니다.");
        }
    }
    return false;
};
