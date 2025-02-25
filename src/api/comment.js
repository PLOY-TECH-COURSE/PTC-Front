import axiosInstance from '../lib/axiosInstance';

// 댓글 조회
export const getComments = (documentId) => {
  return axiosInstance.get(`/comments/${documentId}`) // documentId를 사용하여 댓글 조회
    .then(response => response.data)
    .catch((error) => {
      console.error("댓글 가져오기 실패:", error);
      throw error;
    });
};

// 댓글 작성
export const createComment = (documentId, commentText) => {
  return axiosInstance.post(`/comments/${documentId}`, { commentText }) // documentId로 댓글 작성
    .then(response => response.data)
    .catch((error) => {
      console.error("댓글 작성 실패:", error);
      throw error;
    });
};

// 댓글 삭제
export const deleteComment = (commentId) => {
  return axiosInstance.delete(`/comments/${commentId}`) // commentId로 특정 댓글 삭제
    .then(() => commentId)
    .catch((error) => {
      console.error("댓글 삭제 실패:", error);
      throw error;
    });
};
