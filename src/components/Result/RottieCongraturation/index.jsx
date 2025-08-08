import * as S from "../../Congratulation/style.jsx";
import { useEffect, useState } from "react";
import animationData from "../../../assets/onboarding/Untitled.json";
import Lottie from "react-lottie";

export default function Congratulation() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => setIsLoading(false), 0);
  }, []);

  const defaultOptions = {
    loop: true,
    autoplay: false,
    animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
      progressiveLoad: true,
      background: "transparent",
    },
  };

  const [isPaused, setIsPaused] = useState(false);
  const [isPaused2, setIsPaused2] = useState([true, true, true, true]);

  const handlePause = () => {
    setIsPaused(true);
  };

  const handlePlay = () => {
    setTimeout(() => setIsPaused2([false, true, true, true]), 0);
    setTimeout(() => setIsPaused2([false, false, true, true]), 100);
    setTimeout(() => setIsPaused2([false, false, false, true]), 200);
    setTimeout(() => setIsPaused2([false, false, false, false]), 300);
  };

  useEffect(() => {
    setTimeout(handlePause, 1000);
    setTimeout(handlePlay, 2000);
  }, []);

  useEffect(() => {
    const removeBackground = () => {
      const paths = document.querySelectorAll("path");
      paths.forEach((path) => {
        if (path.getAttribute("fill") === "rgb(255,255,255)") {
          path.setAttribute("fill", "none");
        }
      });
    };
    setTimeout(removeBackground, 0);
  }, [isLoading, isPaused2]);

  if (isLoading) return null;

  return (
    <S.Animation style={{ background: "none" }}>
      {isPaused2.some((item) => !item) && (
        <>
          <S.Box $top={-5} $left={10}>
            <Lottie isPaused={isPaused2[0]} options={defaultOptions} height={400} width={400} />
          </S.Box>
          <S.Box $bottom={2} $left={4}>
            <Lottie isPaused={isPaused2[1]} options={defaultOptions} height={400} width={400} />
          </S.Box>
          <S.Box $top={0} $right={8}>
            <Lottie isPaused={isPaused2[2]} options={defaultOptions} height={400} width={400} />
          </S.Box>
          <S.Box $bottom={0} $right={5}>
            <Lottie isPaused={isPaused2[3]} options={defaultOptions} height={400} width={400} />
          </S.Box>
        </>
      )}
    </S.Animation>
  );
}