import axiosInstance from "../lib/axiosInstance.js";

export const decideOrder = async (form_id,orders) => {
    try {
        const res = await axiosInstance.patch(`/grades/forms/${form_id}/presentation-order`, {
            orders : orders
        });
        return res.status === 200 || res.status === 201;
    } catch (error) {
        console.error('tld에러에러 생성 오류:', error);
        return false;
    }
};

export const getStudentOrder = async (form_id) => {
    return axiosInstance.get(`/grades/forms/${form_id}/presentation-order`)
        .then(response => {
            console.log('발표 순서 조회:', response.data);
            return response.data;
        })
        .catch(error => {
            console.error('발표 순서 조회 실패싱패', error);
            throw error;
        });
}