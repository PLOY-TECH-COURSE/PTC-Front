import axiosInstance from "../lib/axiosInstance";

export const getFavoritePosts = async (userId) => {
  console.log("API 요청 전:", userId);  // 요청 전에 userId 확인
  try {
    const response = await axiosInstance.get(`/favorite`, {
      params: {
        userId: userId,  // userId를 쿼리 파라미터로 전송
      },
    });
    console.log("API 응답:", response.data);  // 응답 데이터 확인
    return response.data;
  } catch (error) {
    console.error("즐겨찾기 데이터 가져오기 실패:", error);
    throw error;  // 에러 던지기
  }
};
