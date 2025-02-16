import * as S from './style.jsx';
import Git from '../../../assets/onboarding/track-introduce/github.svg';
import HTML from '../../../assets/onboarding/track-introduce/html.svg';
import CSS from '../../../assets/onboarding/track-introduce/css.svg';
import JS from '../../../assets/onboarding/track-introduce/javascript.svg';
import Algorithm from '../../../assets/onboarding/track-introduce/algorizm.svg';
import Server from '../../../assets/onboarding/track-introduce/server.svg';
import Bg from '../../../assets/onboarding/track-introduce/bg1.svg';
import {useEffect, useState} from "react";
import ModalOnboarding from "../../modal/onboarding/index.jsx";
import Bg2 from '../../../assets/onboarding/track-introduce/bg2.svg';
import PropTypes from 'prop-types';
import {useRecoilState} from "recoil";
import {modalAtom} from "../../../recoil/modalAtom.js";

TrackIntroduce.propTypes = {
    isAnimation: PropTypes.bool.isRequired,
};

export default function TrackIntroduce({isAnimation}){
    const [isModal, setIsModal] = useRecoilState(modalAtom);
    const [num, setNum] = useState(null);
    const [isSmallScreen, setIsSmallScreen] = useState(window.innerWidth <= 480);

    const modal = (idx)=>{
        setIsModal(true);
        setNum(idx)
    }
    // 화면 크기 감지
    useEffect(() => {
        const handleResize = () => setIsSmallScreen(window.innerWidth <= 480);

        window.addEventListener("resize", handleResize);
        return () => {
            window.removeEventListener("resize", handleResize);
        };
    }, []);

    useEffect(() => {
        const preventScroll = (e) => e.preventDefault();
        const preventKeyDown = (e) => {

            if (e.key === " " || e.key === "ArrowUp" || e.key === "ArrowDown" || e.key === "ArrowLeft" || e.key === "ArrowRight") {
                e.preventDefault();
            }
        };

        if (isModal) {
            window.addEventListener("wheel", preventScroll, { passive: false });
            window.addEventListener("touchmove", preventScroll, { passive: false });
            window.addEventListener("keydown", preventKeyDown, { passive: false });
        } else {
            window.removeEventListener("wheel", preventScroll);
            window.removeEventListener("touchmove", preventScroll);
            window.removeEventListener("keydown", preventKeyDown);
        }

        return () => {
            window.removeEventListener("wheel", preventScroll);
            window.removeEventListener("touchmove", preventScroll);
            window.removeEventListener("keydown", preventKeyDown);
        };
    }, [isModal]);
    const data = [
        {id : 0, text : '버전관리와 과제제출', src : Git, alt:'gitIcon', width:110, width2:60},
        {id : 1, text : 'HTML', src : HTML, alt:'htmlIcon', width:110, width2:60},
        {id : 2, text : 'CSS', src : CSS, alt:'cssIcon', width:80, width2:45},
        {id : 5, text : '서버 이해', src : Server, alt:'serverIcon', width:90, width2:50},
        {id : 4, text : '알고리즘', src : Algorithm, alt:'algorithmIcon', width:100, width2:55},
        {id : 3, text : 'JavaScript', src : JS, alt:'jsIcon', width:180, width2:100},
    ]
    const data2 = [
        {id : 0, text : '버전관리와 과제제출', src : Git, alt:'gitIcon', width:110, width2:60},
        {id : 5, text : '서버 이해', src : Server, alt:'serverIcon', width:90, width2:50},
        {id : 1, text : 'HTML', src : HTML, alt:'htmlIcon', width:110, width2:60},
        {id : 4, text : '알고리즘', src : Algorithm, alt:'algorithmIcon', width:100, width2:55},
        {id : 2, text : 'CSS', src : CSS, alt:'cssIcon', width:80, width2:45},
        {id : 3, text : 'JavaScript', src : JS, alt:'jsIcon', width:180, width2:100},
    ]
    const currentData = isSmallScreen ? data2 : data;

    return(
        <S.TrackIntroduce>
            {isModal ? <ModalOnboarding idx={num} setIsModal={setIsModal} /> : null}
            <S.Wrap>
                <S.Bg src={Bg} $bg2 = {Bg2} alt={"bg"}/>
                <S.Title>
                    <S.BlueText>트랙소개</S.BlueText>
                </S.Title>
                <S.Box>
                    {currentData.map((item)=>{
                        return(
                            <S.Article $isAnimation = {isAnimation} key={item.id}>
                                <S.UnderText>{item.text}</S.UnderText>
                                <S.Section onClick={()=>modal(item.id)}>
                                    <S.Icon src={item.src} alt={item.alt} $width={item.width} $width2={item.width2}/>
                                </S.Section>
                            </S.Article>
                        )
                    })}
                </S.Box>
            </S.Wrap>
        </S.TrackIntroduce>
    )
}

