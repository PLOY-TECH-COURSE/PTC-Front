import axiosInstance from "../lib/axiosInstance";

export const getProposerList = async () => {
  try {
    const res = await axiosInstance.get("/proposers");
    return res.data; // 신청자 리스트 반환
  } catch (err) {
    console.error(err);
    return [];
  }
};