
import axiosInstance from "../lib/axiosInstance";

export const getUserProfile = async () => {
  try {
    const response = await axiosInstance.get("/mypage");
    return response.data;
  } catch (error) {
    console.error("마이페이지 데이터 가져오기 실패:", error);
    throw error;
  }
};
