import axiosInstance from "../lib/axiosInstance";

export const getProposerList = async () => {
  try {
    const token = localStorage.getItem("accessToken"); // 저장된 토큰 가져오기
    const res = await axiosInstance.get("/applications", {
      headers: {
        Authorization: `Bearer ${token}`, // 토큰 추가
      },
    });
    return res.data;
  } catch (err) {
    console.error("API 요청 실패:", err);
    return [];
  }
};
