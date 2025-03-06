import styled, {css, keyframes} from "styled-components";

export const PTCContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    height: 100vh;
    position: relative;
    width: 100vw;
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
    width: 45%;
    position: absolute;
    top: 100%;
    left: 50%;
    transform: translate(-50%, -50%);
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
        gap: 20px;
        padding: 10%;
    }
`
const show = keyframes`
    0%{
        opacity: 0.2;
        transform: translateY(60px);
    }
    100%{
        opacity: 1;
        transform: translateY(0);
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
    align-items: flex-start;
    justify-content: space-between;
    @media (max-width: 480px) {
        justify-content: flex-start;
        gap: 20px;
    }
    
`
export const BlueText = styled.h3`
    color: #4970FB;
    font-size: 20px;
    animation: ${(props) =>
            props.$isAnimation
                    ? css`${show} 0.6s ease-in-out`
                    : 'none'};
    @media (max-width: 480px) {
        font-size: 16px;
    }
`
export const SkillImg = styled.img`
    width: 70px;
    @media (max-width: 480px) {
        width: 50px;
    }
`
export const Emote = styled.p`
    font-size: 48px;
`
export const BlueText2 = styled.h3`
    color: #4970FB;
    font-size: 26px;
    @media (max-width: 480px) {
        font-size: 18px;
    }
`
export const Text = styled.p`
    color: #707070;
    font-size: 22px;
    font-weight: 550;
    @media (max-width: 480px) {
        font-size: 14px;
    }
`
export const Title = styled.h2`
    font-size: 32px;
    animation: ${(props) =>
            props.$isAnimation
                    ? css`${show} 0.65s ease-in-out`
                    : 'none'};
    @media (max-width: 480px) {
        font-size: 18px;
    }
`

export const SkillBox = styled.div`
    width: 30%;
    display: flex;
    flex-flow: column wrap;
    gap: 20px;
    
    animation: ${(props) =>
            props.$isAnimation
                    ? css`${show} ${props.$time}s ease-in-out`
                    : 'none'};
    @media (max-width: 480px) {
        width: 90%;
        gap: 10px;
    }
`
