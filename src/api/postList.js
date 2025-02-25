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
        const res = await axiosInstance.delete(`/documents/${document_id}` );
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