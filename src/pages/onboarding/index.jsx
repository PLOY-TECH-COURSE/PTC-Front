import styled from "styled-components";
import fullpage from 'fullpage.js';
import First from "../../components/onboarding/first";
import PTCIntroduce from "../../components/onboarding/PTC-introduce/index.jsx";
import TrackIntroduce from "../../components/onboarding/track-introduce/index.jsx";
import TeamIntroduce from "../../components/onboarding/team-introduce/index.jsx";
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
    const [isScrolling, setIsScrolling] = useState(false);
    const [isAnimation, setIsAnimation] = useState(false);
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
            anchors: ['메인', '플테코소개', '트랙소개', '팀소개'],
            onLeave: (origin, destination) => {

                if (isModalRef.current || isScrolling) {
                    return false;
                }

                setIsScrolling(true);

                if (destination.index === 2) {
                    setIsAnimation(true);
                } else {
                    setIsAnimation(false);
                }

                setTimeout(() => {
                    setIsScrolling(false);
                }, 1000);
            },
        });

        return () => {
            if (fullpageRef.current) {
                fullpage_api.destroy('all');
            }
        };
    }, []);

    return (
        <FullPageWrapper>
            <div id={'fullpage'}>
                <div className={'section'}><First /></div>
                <div className={'section'}><PTCIntroduce /></div>
                <div className={'section'}><TrackIntroduce isAnimation={isAnimation} /></div>
                <div className={'section'}><TeamIntroduce /></div>
            </div>
        </FullPageWrapper>
    );
};

export default Main;