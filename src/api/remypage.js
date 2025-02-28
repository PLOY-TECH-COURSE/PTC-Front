import axiosInstance from "../lib/axiosInstance"; // axiosInstance를 import

// 실제 마이페이지 요청을 보내는 함수
export const getMyPage = async () => {
  try {
    const token = localStorage.getItem("accessToken"); // 토큰을 로컬스토리지에서 가져오기
    const userId = localStorage.getItem("userId"); // userId가 로컬스토리지에 저장되어 있으면 가져옵니다.

    const response = await axiosInstance.get(`/real-mypage`);

    if (response.status === 200) {
      console.log("마이페이지 데이터:", response.data);
      return response.data;
    } else {
      console.error("마이페이지 요청 실패", response.status);
      return null;
    }
  } catch (error) {
    console.error("API 요청 실패:", error);
    return null;
  }
};
