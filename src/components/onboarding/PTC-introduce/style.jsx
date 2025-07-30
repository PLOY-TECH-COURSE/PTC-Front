import styled, {css, keyframes} from "styled-components";

export const PTCContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    height: 100vh;
    position: relative;
    width: 100vw;
  overflow: hidden;
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
    background-color: #4970FB;
    position: absolute;
    display: flex;
    justify-content: center;
    top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
    width: 100%;
    height: 5vh;
`
export const Main = styled.main`
    width: 100%;
    z-index: 3;
    display: grid;
  grid-template-rows: 1fr 1fr 1fr 1fr;

  align-items: flex-start;
  height: 80vh;
    border-radius: 20px;
    padding: 6%;
    gap:50px;
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
export const NoteBook = styled.div`
  position: absolute;
  top: ${props => props.$top};
  ${(props) => props.$left && `left: ${props.$left};`}
  ${(props) => props.$right && `right: ${props.$right};`}
  & > img{
    width: ${props => props.$width};
  }
  animation: ${(props) =>
    props.$isAnimation
      ? css`${show} ${props.$time}s ease-in-out`
      : 'none'};
  @media (max-width: 480px) {
    width: 90%;
  }
`
export const SkillBox = styled.div`
    width: 100%;
  height: 100%;
    display: flex;
    flex-flow: column wrap;
    gap: 10px;
  align-items: ${props=>props.$isLeft ? "flex-start" : "flex-end"};
    animation: ${(props) =>
            props.$isAnimation
                    ? css`${show} ${props.$time}s ease-in-out`
                    : 'none'};
    @media (max-width: 480px) {
        width: 90%;
        gap: 10px;
    }
`
export const Title = styled.h3`
    color: #4970FB;
    font-size: 28px;
    width: max-content;
    animation: ${(props) =>
            props.$isAnimation
                    ? css`${show} ${props.$time}s ease-in-out`
                    : 'none'};
    @media (max-width: 480px) {
        font-size: 20px;
    }
`
export const Sub = styled.p`
  color: #8c8c8c;
  font-size: 16px;
  animation: ${(props) =>
    props.$isAnimation
      ? css`${show} ${props.$time}s ease-in-out`
      : 'none'};
  @media (max-width: 480px) {
    font-size: 12px;
  }
  text-align: ${props=>props.$isLeft ? "left" : "right"};
  width: max-content;
`