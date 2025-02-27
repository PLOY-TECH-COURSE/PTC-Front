import axiosInstance from "../lib/axiosInstance";

export const getSearchPost = async (query, sort, start) => {
    try {
        const res = await axiosInstance.get("/documents/search", {
            params: { query, sort, start },
        });
        if (res.status !== 200) {
            return Promise.reject({
                status: res.status,
                message: res.message
            });
        }
        return res.data;
    } catch (err) {
        return Promise.reject(err);
    }
};

export const getPostDetail = async (document_id) => {
    try {
        const res = await axiosInstance.get(`/documents/${document_id}`);
        if (res.status !== 200) {
            return Promise.reject({
                status: res.status,
                message: res.message
            });
        }
        return res.data;
    } catch (err) {
        return Promise.reject(err);
    }
};

export const deletePost = async (document_id) =>{
    try{
        const res = await axiosInstance.delete("/documents", {
            params: document_id
        });
        if(res.status !== 200){
            return Promise.reject({
                status: res.status,
                message: res.message
            });
        }
        return res;

    }catch (err){
        return Promise.reject(err);
    }
}

export const toggleFavorite = async (documentId, isFavorite) => {
    try {
        const token = localStorage.getItem("accessToken");
        const method = isFavorite ? "delete" : "post";
        const response = await axiosInstance[method](`/favorite/${documentId}`, {
            headers: {
                Authorization: `Bearer ${token}`
            }
        });

        return response.data;
    } catch (error) {
        console.error("즐겨찾기 요청 실패:", error.response?.data || error);
        return null;
    }
};

export const checkFavorite = async (documentId) => {
    try {
        const token = localStorage.getItem("accessToken");
        const response = await axiosInstance.get(`/favorite`, {
            headers: {
                Authorization: `Bearer ${token}`
            }
        });

        return response.data.isFavorite; // 서버 응답에서 isFavorite 값 가져오기
    } catch (error) {
        console.error("즐겨찾기 상태 확인 실패:", error.response?.data || error);
        return false;
    }
};