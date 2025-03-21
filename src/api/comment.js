import axiosInstance from '../lib/axiosInstance';


export const getComments = (documentId) => {
    return axiosInstance.get(`/document/comments/${documentId}`)
        .then(response => {
            console.log('댓글 목록:', response.data); // 서버에서 받은 데이터 확인
            return response.data;  // 댓글 데이터 반환
        })
        .catch(error => {
            console.error('댓글을 가져오는 데 실패했습니다.', error);
            throw error;
        });
};

export const createComment = (documentId, commentText) => {
    return axiosInstance.post(`/document/comments/${documentId}`, { commentText }) 
        .then(response => {
            console.log('댓글 작성 성공:', response.data);
            return response.data;
        })
        .catch((error) => {
            console.error('댓글 작성 실패:', error);
            throw error;
        });
};
export const deleteComment = (commentId) => {
    return axiosInstance.delete(`/document/comments/${commentId}`) 
        .then(() => {
            console.log('댓글 삭제 성공');
            return commentId;
        })
        .catch((error) => {
            console.error('댓글 삭제 실패:', error);
            throw error;
        });
};

export const updateComment = async (commentId, commentText) => {
    try {
        const response = await axiosInstance.patch(`/document/comments/${commentId}`, { commentText });
        response.data=commentText;
        console.log({response});
        console.log('응답 상태 코드:', response.status);  // 상태 코드 확인
        console.log('응답 데이터:', response.data);  // 데이터 확인
        if (response.status === 200) {
            console.log("수정된 댓글:", response.data);  // 수정된 댓글 데이터 확인
            return response.data;  // 수정된 댓글 내용 반환
        } else {
            throw new Error("댓글 수정에 실패했습니다.");
        }
    } catch (error) {
        console.error("댓글 수정 오류:", error);
        throw error;
    }
}
export const toggleCommentLike = async (commentId, like) => {
    try {
        const token = localStorage.getItem("accessToken");
        const method = like ? "delete" : "post";
        const res = await axiosInstance[method](`/comment-likes/${commentId}`, {
            headers: {
                Authorization: `Bearer ${token}`
            }
        });
        return res.data || { success: res.status === 200 || res.status === 204 };
    } catch (error) {
        console.error("댓글 좋아요 요청 실패:", error.response?.data || error);
        return null;
    }
};