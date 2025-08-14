import axiosInstance from "../lib/axiosInstance.js";

export const decideOrder = async (form_id,orders) => {
    try {
        const res = await axiosInstance.post(`/grades/forms/${form_id}/presentation-order`, {
            orders : orders
        });
        return res.status === 200 || res.status === 201;
    } catch (error) {
        console.error('tld에러에러 생성 오류:', error);
        return false;
    }
};