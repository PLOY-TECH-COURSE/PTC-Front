import styled from "styled-components";

export const FirstContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
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
    font-size: 44px;
    @media (max-width: 480px) {
        font-size: 24px;
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
    @media (max-width: 480px) {
        width: 100%;
    }
`
export const ImgBox = styled.div`
    width: 540px;
    position: relative;
    
`
export const LapTop = styled.img`
    position: absolute;
    right: 0;
    bottom: -30px;
    @media (max-width: 480px) {
        display: none;
    }
`