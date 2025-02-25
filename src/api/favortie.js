import axiosInstance from '../lib/axiosInstance';
export const getFavoritePosts = async (userId) => {
  try {
    const response = await axiosInstance.get(`/favorite`);
    return response.data;
  } catch (error) {
    console.error('즐겨찾기 데이터 가져오기 실패:', error);
    throw error;
  }
};
