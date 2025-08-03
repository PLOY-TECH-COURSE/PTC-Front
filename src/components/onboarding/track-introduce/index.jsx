import * as S from './style.jsx';
import Git from '../../../assets/onboarding/track-introduce/github.svg';
import HTML from '../../../assets/onboarding/track-introduce/html.svg';
import CSS from '../../../assets/onboarding/track-introduce/css.svg';
import {useEffect, useState} from "react";
import ModalOnboarding from "../../modal/onboarding/index.jsx";
import PropTypes from 'prop-types';
import Arrive from '../../../assets/onboarding/track-introduce/arrive.svg'

TrackIntroduce.propTypes = {
    isAnimation: PropTypes.bool.isRequired,
};

export default function TrackIntroduce({isAnimation}){
    const [isModal, setIsModal] = useState(false)
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
        {id : 0, text : '버전관리와 과제제출', src : Git, alt:'gitIcon', width:110, width2:60, time:0.6, top:5, left:14},
        {id : 1, text : 'HTML', src : HTML, alt:'htmlIcon', width:110, width2:60, time:0.72, top:5, left:42},
        {id : 2, text : 'CSS', src : CSS, alt:'cssIcon', width:80, width2:45, time:0.84, top:5, left:69},
    ]
    const currentData = isSmallScreen ? data2 : data;

    return(
        <S.TrackIntroduce>
            {isModal ? <ModalOnboarding idx={num} setIsModal={setIsModal} /> : null}
            <S.Wrap>
                <S.Title $isAnimation={isAnimation}>
                    <S.BlueText >Track</S.BlueText>
                </S.Title>
                <S.Box>
                  <S.Bar/>
                    <S.Circle />
                    <S.Circle2>
                        <img width={'60%'} src={Arrive} alt={'arrive'}/>
                    </S.Circle2>
                  <S.TrackBox>
                    {currentData.map((item)=>{
                      return(
                        <div key={item.id}>
                          <S.Article $time = {item.time} $isAnimation = {isAnimation} key={item.id}>
                            <S.UnderText>{item.text}</S.UnderText>
                            <S.Section onClick={()=>modal(item.id)}>
                              <S.Icon src={item.src} alt={item.alt} $width={item.width} $width2={item.width2}/>
                            </S.Section>
                          </S.Article>
                        </div>
                      )
                    })}
                  </S.TrackBox>

                </S.Box>
            </S.Wrap>
        </S.TrackIntroduce>
    )
}

