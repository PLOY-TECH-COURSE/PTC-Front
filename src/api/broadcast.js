import axiosInstance from "../lib/axiosInstance";

export const getBroadcastList = async (start) => {
    try {
        const res = await axiosInstance.get("/announcements", {
            params: start
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

export const getBroadcastDetail = async (document_id) => {
    try {
        const res = await axiosInstance.get(`/announcements/${document_id}`);
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

export const deleteBroadcast = async (document_id) =>{
    try{
        const res = await axiosInstance.delete("/announcements", {
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