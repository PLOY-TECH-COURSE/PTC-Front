import styled, {keyframes, css} from "styled-components";

export const TrackIntroduce = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    height: 90vh;
    position: relative;
`;
export const Wrap = styled.div`
    width: 100%;
    height: 100vh;
    display: flex;
    flex-flow: column  nowrap;
    justify-content: center;
    align-items: center;
    position: relative;
    padding: 3% 10%;
`;
export const TrackBox = styled.div`
    width: 85%;
    height: 100%;
    display: flex;
    align-content: center;
    align-items: center;
  justify-content: space-between;
    padding: 3% 10%;
    gap: 4px;
    @media (max-width: 480px) {
        padding: 6% 10%;
    }
`
export const Title = styled.div`
    width: 100%;
    position: absolute;
    top: 6%;
    left: 6%;
    animation: ${(props) => props.$isAnimation && css`${show} 0.5s ease-in-out`};
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
export const BlueText = styled.h3`
    color: #4970FB;
    font-size: 28px;
`

export const Article = styled.article`
    width: 200px;
    background: #f1f1f1;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 200px;
    border-radius: 100%;
    position: relative;

    animation: ${(props) =>
            props.$isAnimation
                    ? css`${show} ${props.$time}s ease-in-out`
                    : 'none'};
    @media (max-width: 480px) {
        width: 120px;
        height: 120px;
    }
`;
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
    width: 80vw;
    display: flex;
    height: 70vh;
    gap: 110px;
    flex-flow: row wrap;
    justify-content: center;
    align-items: center;
    position: relative;
    @media (max-width: 480px) {
        gap: 40px;
        width: 100%;
    }
    
`
export const Bar = styled.div`
    position: absolute;
  top: 50%;
    transform: translateY(-50%);
    left: 6%;
    width: 90%;
    height: 40px;
    background-color: #4970FB;
`
export const Circle = styled.div`
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    left: 5%;
    width: 70px;
    height: 70px;
    background-color: #4970FB;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.25);

`


export const Circle2 = styled.div`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  right: 0;
  width: 140px;
  height:140px;
  background-color: #4970FB;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.25);
`