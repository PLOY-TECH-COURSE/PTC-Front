import axiosInstance from '../lib/axiosInstance';

export const getComments = (documentId) => {
  return axiosInstance.get(`/comments/${documentId}`)
    .then(response => response.data)
    .catch((error) => {
      console.error("댓글 가져오기 실패:", error);
      throw error;
    });
};

export const createComment = (documentId, commentText) => {
  return axiosInstance.post(`/comments/${documentId}`, { commentText })
    .then(response => response.data)
    .catch((error) => {
      console.error("댓글 작성 실패:", error);
      throw error;
    });
};

export const deleteComment = (commentId) => {
  return axiosInstance.delete(`/comments/${commentId}`)
    .then(() => commentId)
    .catch((error) => {
      console.error("댓글 삭제 실패:", error);
      throw error;
    });
};
