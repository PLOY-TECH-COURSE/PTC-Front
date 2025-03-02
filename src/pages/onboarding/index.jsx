import styled from "styled-components";
import fullpage from 'fullpage.js';
import First from "../../components/onboarding/first";
import PTCIntroduce from "../../components/onboarding/PTC-introduce/index.jsx";
import Process from "../../components/onboarding/process/index.jsx";
import TrackIntroduce from "../../components/onboarding/track-introduce/index.jsx";
import TeamIntroduce from "../../components/onboarding/team-introduce/index.jsx";
import Footer from "../../components/onboarding/footer/index.jsx";
import { useEffect, useState, useRef } from "react";
import { useRecoilState } from "recoil";
import { modalAtom } from "../../recoil/modalAtom.js";

const FullPageWrapper = styled.div`
    #fullpage {
        .section {
            width: 100%;
            display: flex;
            justify-content: center;
            align-items: center;
            height: 100vh;
            transition: background-color 0.5s ease;
        }
    }
    .fp-watermark {
        display: none !important;
    }
`;

const Main = () => {
    const isScrolling = useRef(false);
    const [isAnimation, setIsAnimation] = useState(false);
    const [isAnimation2, setIsAnimation2] = useState(false);
    const [isAnimation3, setIsAnimation3] = useState(false);
    const [isAnimation4, setIsAnimation4] = useState(false);
    const [isModal, setIsModal] = useRecoilState(modalAtom);
    const isModalRef = useRef(isModal);
    const fullpageRef = useRef(null);

    useEffect(() => {
        isModalRef.current = isModal;
        if (fullpageRef.current) {
            fullpage_api.setAllowScrolling(!isModal);
        }
    }, [isModal]);

    useEffect(() => {
        fullpageRef.current = new fullpage('#fullpage', {
            licenseKey: 'OPEN-SOURCE-GPLV3-LICENSE',
            autoScrolling: true,
            navigation: true,
            credits: false,
            anchors: ['main', 'introduce', 'track', "process", 'team', 'footer'],
            onLeave: (origin, destination) => {
                if (isModalRef.current || isScrolling.current) {
                    return false;
                }
                isScrolling.current = true;
                if(destination.index === 1) {
                    setIsAnimation(true);
                } else {
                    setIsAnimation(false);
                }
                if (destination.index === 2) {
                    setIsAnimation2(true);
                } else {
                    setIsAnimation2(false);
                }
                if(destination.index === 3) {
                    setIsAnimation3(true);
                } else {
                    setIsAnimation3(false);
                }
                if(destination.index === 4) {
                    setIsAnimation4(true);
                } else {
                    setIsAnimation4(false);
                }
                setTimeout(() => {
                    isScrolling.current = false;
                }, 1000);
            },
        });

        return () => {
            if (fullpageRef.current) {
                fullpage_api.destroy('all');
            }
        };
    }, []);
    const scrollToSection = (anchor) => {
        if (fullpageRef) {
            fullpageRef.current.moveTo(anchor);
        }
    };
    return (
        <FullPageWrapper>
            <div id={'fullpage'}>
                <div className={'section'}><First /></div>
                <div className={'section'}><PTCIntroduce isAnimation={isAnimation} /></div>
                <div className={'section'}><TrackIntroduce isAnimation={isAnimation2} /></div>
                <div className={'section'}><Process change = {scrollToSection} isAnimation={isAnimation3} /></div>
                <div className={'section'}><TeamIntroduce isAnimation={isAnimation4} /></div>
                <div className={'section'}><Footer change = {scrollToSection} /></div>
            </div>
        </FullPageWrapper>
    );
};

export default Main;