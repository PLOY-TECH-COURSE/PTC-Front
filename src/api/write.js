import axiosInstance from "../lib/axiosInstance.js";

export const uploadImg = async (file) =>{
    try{
        const res = await axiosInstance.post('/S3', file, {
            headers:{
                'Content-Type': 'multipart/form-data'
            }
        });
        if(res.status === 200){
            return res.data;
        }
    }catch (err){
        console.log(err);
    }
}

export const postDocument = async (title, content, tag, img, des) =>{
    try{
        const res = await axiosInstance.post('/documents', {
            title:title,
            content:content,
            hash_tag:tag,
            thumbnail:img,
            introduction:des
        });
        if(res.status === 200 || res.status === 201){
            return true;
        }
        return false;
    }catch (err){
        console.log(err);
    }
}
export const patchDocument = async (title, content, tag, img, des, id) =>{
    try{
        const res = await axiosInstance.patch('/documents', {
            document_id:id,
            title:title,
            content:content,
            hash_tag:tag,
            thumbnail:img,
            introduction:des
        });
        if(res.status === 200 || res.status === 201|| res.status === 204){
            return true;
        }
        return false;
    }catch (err){
        console.log(err);
    }
}
export const postBroad = async (title, content, tag, img, intro) => {
    try {
        const res = await axiosInstance.post('/announcements', {
            title: title,
            content: content,
            thumbnail: img,
            introduction: intro
        });

        if(res.status === 200 || res.status === 201){
            return true;
        }
        return false;
    } catch (err) {
        return false;
    }
};

export const patchBroad = async (title, content, tag, img, des, id) => {
    try {
        const res = await axiosInstance.patch('/announcements', {
            announcement_id:id,
            title: title,
            content: content,
            thumbnail: img,
            introduction: des
        });

        if(res.status === 200 || res.status === 201 || res.status === 204){
            return true;
        }
        return false;
    } catch (err) {
        return false;
    }
};