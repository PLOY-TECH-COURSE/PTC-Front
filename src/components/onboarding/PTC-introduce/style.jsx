import styled from "styled-components";

export const PTCContainer = styled.div`
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
    justify-content: center;
    align-items: center;
    background-color: white;
    padding: 0 10%;
`;

export const BlueBox = styled.div`
    background-color: #CAD5FF;
    position: absolute;
    display: flex;
    justify-content: center;
    top: 0;
    width: 100%;
    height: 50vh;
`
export const LogoIcon = styled.img`
    width: 700px;
    position: absolute;
    top: 30px;
    z-index: 2;
    @media (max-width: 480px) {
        width: 340px;
        top: 300px;
    }
`
export const Main = styled.main`
    width: 100%;
    background-color: white;
    z-index: 3;
    display: flex;
    flex-direction: column;
    border-radius: 20px;
    padding: 6%;
    gap:50px;
    box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.25);
    @media (max-width: 480px) {
        gap: 25px;
        padding: 6%;
    }
`
export const Section = styled.section`
    width: 100%;
    display: flex;
    flex-flow: wrap column;
    gap: 6px;
    
`
export const Skill = styled.section`
    width: 100%;
    display: flex;
    flex-flow: wrap row;
    align-items: center;
    justify-content: space-between;
    @media (max-width: 480px) {
        justify-content: flex-start;
        gap: 20px;
    }
    
`
export const BlueText = styled.h3`
    color: #4970FB;
    font-size: 20px;
`
export const BlueText2 = styled.h3`
    color: #4970FB;
    font-size: 26px;
    @media (max-width: 480px) {
        font-size: 22px;
    }
`
export const Text = styled.p`
    color: #707070;
    font-size: 22px;
    font-weight: 550;
    @media (max-width: 480px) {
        font-size: 18px;
    }
`
export const Title = styled.h2`
    font-size: 32px;
    @media (max-width: 480px) {
        font-size: 20px;
    }
`
export const SkillBox = styled.div`
    width: 30%;
    display: flex;
    flex-flow: column wrap;
    gap: 20px;
    justify-content: start;
    @media (max-width: 480px) {
        width: 90%;
    }
`
