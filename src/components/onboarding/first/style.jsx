import styled, {keyframes, css} from "styled-components";

export const FirstContainer = styled.div`
    display: flex;
    width: 100vw;
    height: 100vh;
`;
export const Slide = styled.div`
    width: 100vw;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #CAD5FF;
`;
export const Slide2 = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  overflow: hidden;
  justify-content: center;
  align-items: center;
  position: relative;

  & > h1 {
    color: white;
    font-size: 40px;
    margin-bottom: 20px;
    z-index: 2;
  }
`
export const Black = styled.div`
  background: rgba(0, 0, 0, 0.5);
  position: absolute;
  z-index: 1;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%
`
export const Slide3 = styled.div`
    width: 100vw;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
  background: linear-gradient(180deg, #C6D3FE 0%, #E4EAFF 100%);
`;
export const Section = styled.section`
    padding: 0 10%;
    width: 100%;
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 3rem;
  margin-bottom: 4rem;
    align-items: center;
    @media (max-width: 480px) {
        gap: 30px;
    }
`
export const Description = styled.div`
    display: flex;
    justify-content: flex-start;
    width: 100%;
    & > * {
        margin-bottom: 20px;
    }
    img {
      width: 50%;
    }
    flex-flow: column nowrap;
    @media (max-width: 480px) {
        order: 1;
    }
`
export const Title = styled.h1`
    font-size: 2rem;
    @media (max-width: 480px) {
        font-size: 1.5rem;
    }
    @media (min-width: 1920px) {
        font-size: 3rem;
    }
`
export const SubText = styled.h4`
    color: #707070;
    font-weight: 500;
    font-size: 1.5rem;
    @media (max-width: 480px) {
        font-size: 14px;
    }
`
export const HeaderBox = styled.div`
    position: fixed;
    top: 0;
    z-index: 100;
    width: 100%;
    left: 0;
    transition: top 0.8s;
`
export const Img = styled.img`
    width: 100%;
    border-radius: 20px;
    @media (max-width: 480px) {
        width: 100%;
    }
`
export const Wrap = styled.div`
    position: relative;
    width: 100%;
    overflow: hidden;
`
export const SlideBox = styled.div`
    width: max-content;
    display: flex;
  transition: transform ${(props)=>props.$time}s ease;
  transform: translateX(-${(props) => props.$index * 100}vw);
`
export const ArrowBtn = styled.button`
  all: unset;
    position: absolute;
    top: 50%;
    transform: translate(0, -50%);
  ${(props) => props.$isLeft ? 'left: 3%; right: auto;' : 'left: auto; right: 3%;'} 
    cursor: pointer;
`
export const BroadCastContainer = styled.div`
    position: absolute;
    bottom: 0;
    left: 50%;
    transform: translate(-50%, 0);
    width: 70%;
  background: white;
    display: grid;
  gap: 2rem;
    grid-template-columns: 1fr 1fr 1fr;
    padding: 3rem 4rem;
    border-radius: 60px 60px 0 0;
    align-items: center;
    font-size: 20px;
    font-weight: 600;
`
export const BroadCast = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  position: relative;
  cursor: pointer;
    & > p{
      font-size: 16px;
      font-weight: 600;
      color: #8C8C8C;
    }
  & > p:nth-of-type(2){
    color: #D3D3D3;
    font-weight: 500;
  }
`
export const New = styled.div`
  position: absolute;
  top: -28%;
  left:-8%;
  width:35px;
  height: 35px;
  border-radius: 100px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #4970FB;
  color: white;
  font-size: 10px;
  font-weight: 500;
  cursor: pointer;
  z-index: 100;
`