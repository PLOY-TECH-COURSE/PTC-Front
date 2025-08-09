import styled from 'styled-components';
import { keyframes, css } from 'styled-components';

export const fadeIn = keyframes`
  from {
    opacity: 0;
    transform: translateY(50px);
  }
  to {
    transform: translateY(0);
    opacity: 1;
  }
`
export const stampInOut = keyframes`
  0% {
    opacity: 0;
    transform: translateY(200px) scale(0.8);
    filter: blur(6px);
    text-shadow: none;
  }

  20% {
    opacity: 1;
    transform: translateY(0) scale(1);
    filter: blur(0);
    text-shadow: 0 10px 20px rgba(255,255,255,0.4);
  }

  70% {
    opacity: 1;
    transform: translateY(0) scale(1);
    filter: blur(0);
    text-shadow: 0 10px 20px rgba(255,255,255,0.4);
  }

  100% {
    opacity: 0;
    transform: translateY(-100px) scale(0.8); /* 위로 올라가도록 변경 */
    filter: blur(6px);
    text-shadow: none;
  }
`;
export const stampIn = keyframes`
  0% {
    opacity: 0;
    transform: translateY(200px) scale(0.8);
  filter: blur(6px);
  text-shadow: none;
  }
  60% {
    opacity: 1;
    transform: translateY(-10px) scale(1.3);
  filter: blur(0);
  text-shadow: 0 10px 20px rgba(255,255,255,0.4);
  }
  80% {
    transform: translateY(6px) scale(0.98);
  text-shadow: 0 4px 10px rgba(255,255,255,0.2);
  }
  100% {
    transform: translateY(0) scale(1);
  text-shadow: none;
  display: flex;
  }
`;

export const slideLeft = keyframes`
  0% {
    top: 40%;
    left: 100%;
    opacity: 0;
    filter: blur(6px);
    transform: scale(0.5);
  }
  40% {
    top: 40%;
    left: 50%;
    opacity: 1;
    filter: blur(0);
    transform: scale(2.5);
  }
  60% {
    top: 40%;
    left: 45%;
    opacity: 1;
    filter: blur(0);
    transform: scale(2.5);
  }

  75%{
    opacity: 1;
  }
  100% {
    top: 40%;
    left: -10%;
    opacity: 0;
    filter: blur(6px);
    transform: scale(0.5);
  }
`;
export const Black = styled.div`
  overflow: hidden;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
  ${(props) =>
    props.$isEnd
    && css`
          display: none;
        `}
`
export const  CoolSlidingText = styled.div`
  position: absolute;
  top: 50%;
  left: 0;
  font-size: 48px;
  font-weight: 700;
  opacity: 0;
  color: #fff;
  white-space: nowrap;
  ${props => props.$isEnd ? css`
    display: inline-block;
    animation: ${slideLeft} 4.5s ease-in forwards; /* forwards 추가 */
  ` : css`
    
    visibility: hidden;
    opacity: 0;
  `}
  
  text-shadow: 0 0 10px rgba(0,0,0,0.3);
`;

export const Container = styled.div`
  display: flex;
  align-items: flex-end;
  justify-content: center;
  gap: 30px;
  z-index: 1000;
  position: relative;
`
export const RankAnimation = styled.div`
  ${(props) =>
    props.$rank
      ? css`
        display: flex;
        animation: ${props.$ranking === 2 ? stampIn : stampInOut} ${props.$ranking === 2 ? '1.5s' : '3s'} ease-out forwards;
      `
      : css`
        display: none;
      `}
  position: relative;
  border-radius: 100%;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  gap: 10px;
  & > span{
    color: white;
    font-weight: 600;
    font-size: 32px;
  }
`
export const RankImg= styled.div`
  z-index: 1000;
  position: absolute;
  transform: translate(-50%, -50%);
  top: -8%;
  left: 50%;
  border-radius: 100%;
  overflow: hidden;
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`
export const ImgBoxAnimation = styled.div`
  z-index: 10;
  border-radius: 100%;
  overflow: hidden;
  img {
    width: 250px;
    height: 250px;
    object-fit: cover;
  }
`
export const Rank = styled.div`
  ${(props) => props.$isEnd ? css`
      display: flex;
    animation: ${fadeIn} 1s ease-in-out;
  ` :
    css `display: none;`
}
  align-items: center;
  flex-direction: column;
  justify-content: center;
  gap: 10px;
`
export const ImgBox = styled.div`
  width: ${props => props.$rank}px;
  height:${props => props.$rank}px;
  background: black;
  border-radius: 100%;
  overflow: hidden;
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`
export const Ranking = styled.span`
  font-size: ${props => props.$rank}px;;
  font-weight: 600;
  color: #4970FB;
`
export const Name = styled.span`
  font-size: ${props => props.$rank}px;;
  font-weight: 550;
`
export const Info = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`