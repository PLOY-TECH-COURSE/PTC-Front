import axiosInstance from '../lib/axiosInstance';

export const getMyPosts = async (user_id) => {
  try {
    const response = await axiosInstance.get(`/documents/by-user?user_id=${user_id}`);
    if (response.data) {
      return response.data;
    }
    return [];
  } catch (error) {
    console.error("내가 쓴 글 가져오기 실패:", error);
    throw error;
  }
};
