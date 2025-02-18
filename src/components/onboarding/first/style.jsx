import styled from "styled-components";

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
    gap: 20px;
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
    width: max-content;
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
    transition: transform 0.5s ease;
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
    width: 16px;
    height: 16px;
    border-radius: 100px;
    background-color: ${(props)=>props.$index === props.$ImgIndex ? "#4970FB" : "#ffffff"};
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