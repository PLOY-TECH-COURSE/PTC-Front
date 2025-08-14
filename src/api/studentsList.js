import axiosInstance from "../lib/axiosInstance.js";

export const getStudentList = async () => {
    return axiosInstance.get(`/students/latest-generation`)
        .then(response => {
            console.log('하가생 목록:', response.data);
            return response.data;
        })
        .catch(error => {
            console.error('학생 목록 가져오기 실패싱패', error);
            throw error;
        });
}