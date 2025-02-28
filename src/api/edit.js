import axiosInstance from "../lib/axiosInstance";

export const updateBio = async (bio) => {
  try {

    const response = await axiosInstance.post('/re/bio', {
      bio: bio,
    },);
    if (response.status === 200) {
      return response.data;
    } else {
      console.error('자기소개 업데이트 실패:', response.status);
      return null;
    }
  } catch (error) {
    console.error('API 요청 실패:', error);
    return null;
  }
};
