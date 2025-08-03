import styled, {keyframes, css} from "styled-components";

export const FooterContainer = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-direction: column;
    width: 100vw;
    height: 100vh;
`;
export const UnBox = styled.div`
    width: 100%;
    height: 2vh;
`
export const FAQ = styled.section`
    width: 100%;
    display: flex;
    justify-content: space-around;
    align-items: center;
    flex-direction: column;
    & > h3{
        width: 100%;
        padding: 3% 10%;
        color: #4970FB;
        font-size: 28px;
    }
`
export const FAQBox = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 3rem;
  width: 100%;
  padding: 0 10%;
`
const show = keyframes`
    0%{
        opacity: 0;
        transform: translateY(60px);
    }
    100%{
        opacity: 1;
        transform: translateY(0);
    }
`
export const Q = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  background: #F8FAFB;
  border-radius: 12px;
  align-items: center;
  padding: 3%;
  text-align: center;
  animation: ${(props) =>
    props.$isAnimation
      ? css`${show} ${props.$time}s ease-in-out`
      : 'none'};
  & > span{
    display: flex;
    align-items: center;
    font-weight: bold;
    font-size: 20px;
  }
  & > span > h1{
    color: #4970FB;
    font-size: 28px;
  }
  
  & > p{
    width: 100%;
    padding: 2%;
    color: #8C8C8C;
    font-size: 16px;
  }
`