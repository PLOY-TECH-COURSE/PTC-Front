import axiosInstance from "../lib/axiosInstance.js";

export const getSurvey = async () => {
    return axiosInstance.get(`/grades/forms`)
        .then(response => {
            console.log('채점 목록:', response.data);
            return response.data;
        })
        .catch(error => {
            console.error('채점 목록', error);
            throw error;
        });
}