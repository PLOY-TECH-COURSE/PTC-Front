import axiosInstance from '../lib/axiosInstance';

export const getUserProfile = async (userId) => {  
  try {
    const response = await axiosInstance.get(`/mypage/${userId}`);  // `userId`를 URL에 포함
    console.log("API 응답 데이터:", response.data);
    return response.data;
  } catch (error) {
    console.error("마이페이지 데이터 가져오기 실패:", error);
    throw error;
  }
};
