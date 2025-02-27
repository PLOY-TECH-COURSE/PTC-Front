import axiosInstance from '../lib/axiosInstance';

export const getMyPosts = async (userId) => {
  try {
    const response = await axiosInstance.get(`/documents?start=0`);
    if (response.data) {
      const myPosts = response.data.filter(post => post.userInfoDTO?.id === userId); // userInfoDTO가 있을 때만 id 접근
      return myPosts;
    }
    return [];
  } catch (error) {
    console.error("내가 쓴 글 가져오기 실패:", error);
    throw error;
  }
};
