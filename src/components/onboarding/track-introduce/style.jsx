import styled from "styled-components";

export const TrackIntroduce = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    height: 100vh;
    position: relative;
`;
export const Wrap = styled.div`
    width: 100%;
    height: 100vh;
    display: flex;
    flex-flow: column  nowrap;
    justify-content: flex-start;
    align-items: center;
    position: relative;
    padding: 3% 10%;
`;
export const Bg = styled.img`
    position: absolute;
    margin-top: 150px;
    width :1300px;
    @media (max-width: 480px) {
        margin-top: 10px;
        width :300px;
        content: url(${(props)=>props.$bg2});
    }
`
export const Title = styled.div`
    width: 100%;
    margin-bottom: 50px;
    @media (max-width: 480px) {
        margin-bottom: 80px;
    }
    
`
export const Icon = styled.img`
    width: ${(props)=>props.$width}px;
    @media (max-width: 480px) {
        width: ${(props)=>props.$width2}px;
    }
`
export const BlueText = styled.h3`
    color: #4970FB;
    font-size: 28px;
`
export const Article = styled.article`
    width: 200px;
    background: #D9D9D9;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 200px;
    border-radius: 100%;
    position: relative;
    @media (max-width: 480px) {
        width: 120px;
        height: 120px;
    }
`
export const Section = styled.section`
    width: 155px;
    background: white;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 155px;
    border-radius: 100%;
    transition: 0.3s;
    cursor: pointer;
    &:hover{
        box-shadow: 4px 4px 4px 0px rgba(0, 0, 0, 0.25);
    }
    @media (max-width: 480px) {
        width: 95px;
        height: 95px;
    }
`
export const UnderText = styled.h1`
    position: absolute;
    bottom: -50px;
    font-size: 24px;
    @media (max-width: 480px) {
        display: none;
    }
`
export const Box = styled.div`
    width: 80%;
    display: flex;
    height: 70vh;
    gap: 110px;
    flex-flow: row wrap;
    justify-content: center;
    align-items: center;
    position: relative;
    @media (max-width: 480px) {
        gap: 90px;
        width: 100%;
    }
    
`