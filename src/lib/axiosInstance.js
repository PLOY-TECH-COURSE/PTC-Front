import axios from 'axios';
import {refreshAccessToken} from "../api/auth.js";
import {useRecoilState} from "recoil";
import {authAtom} from "../recoil/authAtom.js";


const axiosInstance = axios.create({
    baseURL: '/api',
    headers:{
        'Content-Type': 'application/json'
    },
    withCredentials: true
});


// 요청 인터셉터
axiosInstance.interceptors.request.use(
    (config) => {
        const token = localStorage.getItem('accessToken');
        if (token) {
            config.headers.Authorization = `Bearer ${token}`;
        }
        return config;
    },
    (error) => {
        return Promise.reject(error);
    }
);

// 응답 인터셉터
axiosInstance.interceptors.response.use(
    (response) => response,
    async (error) => {
        const originalRequest = error.config;
        const [_, setAuth] = useRecoilState(authAtom);

        if (error.response.data === "access token expired" && !originalRequest._retry) {
            originalRequest._retry = true;

            try {
                const newAccessToken = await refreshAccessToken();
                localStorage.setItem('accessToken', newAccessToken);
                originalRequest.headers.Authorization = `Bearer ${newAccessToken}`;

                return axiosInstance(originalRequest);
            } catch (refreshError) {
                console.error("Refresh token expired or invalid", refreshError);
                localStorage.removeItem('accessToken');
                setAuth({role: '', uid: ''});
                window.location.href = '/login';
                return Promise.reject(refreshError);
            }
        }

        return Promise.reject(error);
    }
);

export default axiosInstance;
