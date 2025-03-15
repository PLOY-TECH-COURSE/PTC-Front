import * as S from "./style"
import {useEffect, useRef, useState} from "react";
import animationData from "../../assets/onboarding/Untitled.json";
import lightLeft from "../../assets/onboarding/lightLeft.json";
import lightRight from "../../assets/onboarding/lightRight.json";
import Lottie from "react-lottie";
import Successful from '../../assets/onboarding/Successful.png'
import X from '../../assets/header/xmark.svg'

export default function Congratulation({onClose}) {
    const [isLoading, setIsLoading] = useState(true);
    useEffect(() => {
        const removeBackground = () => {
            const paths = document.querySelectorAll("path");
            paths.forEach((path) => {
                if (path.getAttribute("fill") === "rgb(255,255,255)") {
                    path.setAttribute("fill", "none");
                }
            });
        };
        setTimeout(()=>removeBackground(), 0);
    }, [isLoading]);
    useEffect(() => {
        setTimeout(()=>setIsLoading(false), 0)
    }, []);


    const defaultOptions = {
        loop: true,
        autoplay: false,
        animationData: animationData,
        rendererSettings: {
            preserveAspectRatio: "xMidYMid slice",
            progressiveLoad: true, // 부드러운 로딩
            background: "transparent",
        },
    };
    const lightLeftOption = {
        loop: true,
        autoplay: true,
        animationData: lightLeft,
        rendererSettings: {
            preserveAspectRatio: "xMidYMid slice",
            progressiveLoad: true, // 부드러운 로딩
            background: "transparent",
        },
    };
    const lightRightOption = {
        loop: true,
        autoplay: true,
        animationData: lightRight,
        rendererSettings: {
            preserveAspectRatio: "xMidYMid slice",
            progressiveLoad: true, // 부드러운 로딩
            background: "transparent",
        },
    };
    const [isPaused, setIsPaused] = useState(false);
    const [isPaused2, setIsPaused2] = useState(false);
    const handlePause = () => {
        setIsPaused(true)
    };
    const handlePlay = () =>{
        setIsPaused2(false)
    }
    setTimeout(handlePause, 1000);
    setTimeout(handlePlay, 2000);

    const [isCheck, setIsCheck] = useState(false);
    if(isLoading) return null
    return (
        <S.Animation>
            {isPaused &&
                <S.Popup>
                    <div>
                        <S.Label>
                            <input className="peer sr-only" type={'checkbox'} value={isCheck} onChange={e=>setIsCheck(!isCheck)} />
                            <S.CheckboxContainer />
                            <S.Text>다시보지않기</S.Text>
                        </S.Label>
                        <img onClick={()=>{
                            if(isCheck) localStorage.setItem('ok', true), onClose()
                            else onClose()
                        }} src={X} alt={'x'} />
                    </div>
                    <img src={Successful} alt={'Successful'} />
                </S.Popup>
            }
            <S.Box $top = {-13} $right = {0}>
                <Lottie isPaused={isPaused} options={lightRightOption} height={400} width={400} />
            </S.Box>
            <S.Box $top = {-13} $left = {0}>
                <Lottie isPaused={isPaused} options={lightLeftOption} height={400} width={400} />
            </S.Box>
            <S.Box $top = {-5} $left = {10}>
                <Lottie isPaused={isPaused2}  options={defaultOptions} height={400} width={400} />
            </S.Box>
            <S.Box $bottom = {2} $left = {4}>
                <Lottie isPaused={isPaused2} options={defaultOptions} height={400} width={400} />
            </S.Box>
            <S.Box $top = {0} $right = {8}>
                <Lottie isPaused={isPaused2} options={defaultOptions} height={400} width={400} />
            </S.Box>
            <S.Box $bottom = {0} $right = {5}>
                <Lottie isPaused={isPaused2} options={defaultOptions} height={400} width={400} />
            </S.Box>
            <S.UnBox />
        </S.Animation>
    );
}