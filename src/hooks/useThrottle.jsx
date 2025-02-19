import { useRef } from "react";

export const useThrottle = (callback, delay) => {
    const lastRun = useRef(Date.now());

    return (...args) => {
        const timeElapsed = Date.now() - lastRun.current;
        if (timeElapsed >= delay) {
            callback(...args); // 인자 전달
            lastRun.current = Date.now();
        }
    };
};