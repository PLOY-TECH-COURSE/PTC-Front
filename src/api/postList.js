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

export const toggleFavorite = async (documentId) => {
    try {
        const token = localStorage.getItem("accessToken");
        const response = await axiosInstance.post(`/favorite/${documentId}`, {}, {
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