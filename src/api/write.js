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
        const res = await axiosInstance.post('/document', {
            title:title,
            content:content,
            tag:tag,
            image:img,
            introduce:des
        });
        if(res.status === 200){
            return true;
        }
        return false;
    }catch (err){
        console.log(err);
    }
}