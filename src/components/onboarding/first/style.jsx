import styled, {keyframes, css} from "styled-components";

export const FirstContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    width: 100vw;
    height: 100vh;
`;
export const Wrap = styled.div`
    width: 100%;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #CAD5FF;
`;

export const Section = styled.section`
    padding: 0 10%;
    width: 100%;
    display: flex;
    flex-flow: wrap row;
    justify-content: space-between;
    align-items: center;
    @media (max-width: 480px) {
        gap: 30px;
    }
`
export const Description = styled.div`
    display: flex;
    justify-content: flex-start;
    & > * {
        margin-bottom: 20px;
    }
    flex-flow: column nowrap;
    @media (max-width: 480px) {
        order: 1;
    }
`
export const Title = styled.h1`
    font-size: 2.75rem;
    @media (max-width: 480px) {
        font-size: 1.5rem;
    }
`
export const SubText = styled.h4`
    color: #707070;
    font-size: 22px;
    @media (max-width: 480px) {
        font-size: 14px;
    }
`
const rotateFromStart = keyframes`
    0% {
        transform: translate(-50%, -50%) rotate(0deg) translateY(-30px);
    }
    100% {
        transform: translate(-50%, -50%) rotate(360deg) translateY(-30px);
    }
`;

const rotateFromHalf = keyframes`
    0% {
        transform: translate(-50%, -50%) rotate(180deg) translateY(-30px); /* 50% 위치에서 시작 */
    }
    100% {
        transform: translate(-50%, -50%) rotate(540deg) translateY(-30px);
    }
`;
export const Btn = styled.button`
    background-color: #4970FB;
    padding: 7px 20px;
    border: 2px solid #4970FB;
    font-size: 1.2rem;
    cursor: pointer;
    color: white;
    font-weight: 600;
    border-radius: 30px;
    transition: 0.1s;
    width: 120px;
    position: relative;
    &:hover{
        width: 120px;
        background-color: transparent;
        padding: 20px;
        border: none;
        font-size: 14px;
        display: flex;
        align-items: center;
        justify-content: center;
        & > img{
            width: 36px;
            display: block;
        }
        & > span{
            display: none;
        }
        & > div{
            color: #4970FB;
            display: block;
        }
    }
    & > img{
        display: none;
    }
`
export const BtnText = styled.div`
    display: none;
    position: absolute;
    width: 100px; /* 텍스트의 너비 설정 */
    text-align: center; /* 텍스트 가운데 정렬 */
    top: 40%; /* 부모 요소의 중앙에 위치 */
    left: 49.5%; /* 부모 요소의 중앙에 위치 */
    transform: translate(-50%, 100%);
    transform-origin: 50% 100%; /* 아래쪽 중앙을 회전의 기준으로 설정 */
    animation: ${(props)=>props.$isHalf ? css`${rotateFromHalf} 5s linear infinite` : css`${rotateFromStart} 5s linear infinite`};
    & > span {
        display: inline-block; /* inline-block으로 회전 적용 */
        transform-origin: center; /* 회전 기준 설정 */
        margin-right: 2px;
    }

    & > span:nth-child(1) { transform: rotate(-10deg); }
    & > span:nth-child(2) {  transform: rotate(-5deg); }
    & > span:nth-child(3) {transform: rotate(5deg); }
    & > span:nth-child(4) { transform: rotate(10deg); }
`
export const HeaderBox = styled.div`
    position: absolute;
    top: 0;
    width: 100%;
    left: 0;
`
export const Img = styled.img`
    transition: 0.5s;
    
    @media (max-width: 480px) {
        width: 100%;
    }
`
export const SlideBox = styled.div`
    position: relative;
`
export const Slide = styled.div`
    position: relative;
    width: 550px;
    overflow: hidden;
    border-radius: 10px;
`
export const ImgBox = styled.div`
    position: relative;
    display: flex;
    transition: transform ${(props)=>props.$time}s ease;
    transform: translateX(-${(props) => props.$ImgIndex * 100}%);
`
export const LapTop = styled.img`
    position: absolute;
    right: -100px;
    bottom: -20px;
    width: 240px;
    @media (max-width: 480px) {
        display: none;
    }
`
export const BtnBox = styled.div`
    position: absolute;
    top: 110%;
    left: 50%;
    transform: translate(-50%, -50%);
    display: flex;
    gap: 20px;
    align-items: center;
    justify-content: space-between;
`
export const Circle =styled.div`
    border-radius: 100px;
    width: ${(props)=>props.$index === props.$ImgIndex || props.$index2 === props.$ImgIndex ? "16px" : "12px"};
    height: ${(props)=>props.$index === props.$ImgIndex || props.$index2 === props.$ImgIndex ? "16px" : "12px"};
    background-color: ${(props)=>props.$index === props.$ImgIndex || props.$index2 === props.$ImgIndex ? "#4970FB" : "#ffffff"};
`
export const ArrowBtn = styled.button`
    all: unset;
    cursor: pointer;
    color: #4970FB;
    border-radius: 100px;
    border: 2px solid #4970FB;
    transition: 0.1s;
    width: 24px;
    height: 24px;
    background-color: #ffffff;
    &:hover{
        background-color: #fafafa;
    }
`