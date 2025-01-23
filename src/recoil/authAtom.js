import {atom} from "recoil";

const decodeJWT = (token) => {
    try {
        // 토큰은 "header.payload.signature" 형태로 되어 있음
        const base64Url = token.split('.')[1]; // payload 부분 추출
        const base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/'); // Base64 형식으로 변환
        const jsonPayload = decodeURIComponent(
            atob(base64)
                .split('')
                .map((c) => `%${c.charCodeAt(0).toString(16).padStart(2, '0')}`)
                .join('')
        );

        return JSON.parse(jsonPayload); // payload를 JSON으로 파싱
    } catch (error) {
        console.error('Invalid token', error);
        return null;
    }
};

const token = localStorage.getItem('accessToken');
const decodedToken = token ? decodeJWT(token) : '';

export const authAtom = atom({
    key: 'auth',
    default: {
        role:decodedToken?.role || '',
        // ROLE_ADMIN, ROLE_USER, ROLE_STUDENT, ROLE_SUPERADMIN
        uid:decodedToken?.uid || '',
    }
})