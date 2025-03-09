import styled, {css, keyframes} from "styled-components";

export const ProcessContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    height: 90vh;
    position: relative;
    width: 100vw;
`;
export const Wrap = styled.div`
    position: relative;
    width: 100%;
    height: 90vh;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    padding: 0 10%;
    gap: 50px;
`;
export const BlueText = styled.h3`
    color: #4970FB;
    font-size: 28px;
    width: 100%;
`
const show = keyframes`
    0%{
        opacity: 0.2;
        transform: translateY(70px);
    }
    100%{
        opacity: 1;
        transform: translateY(0);
    }
`
export const Title = styled.div`
    width: 100%;
    animation: ${(props) =>
            props.$isAnimation
                    ? css`${show} 1s ease-in-out`
                    : 'none'};
`
export const Text = styled.p`
    color: #707070;
    font-size: 22px;
    font-weight: 550;
    @media (max-width: 480px) {
        font-size: 14px;
    }
`

export const Main = styled.section`
    width: 100%;
    display: flex;
    justify-content: space-between;
    animation: ${(props) =>
            props.$isAnimation
                    ? css`${show} 1.2s ease-in-out`
                    : 'none'};
    & > img{
        width: 2%;
    }
`
export const Mail = styled.div`
    width: 50%;
    color: white;
    font-size: 18px;
    padding: 8px 20px;
    background-color: #96ADFD;
    border-radius: 100px;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 10px;
    animation: ${(props) =>
            props.$isAnimation
                    ? css`${show} 1.3s ease-in-out`
                    : 'none'};
    & > img{
        width: 4%;
    }
`
export const Section = styled.article`
    display: flex;
    justify-content: space-around;
    flex-direction: column;
    align-items: center;
    width: 22%;
    padding: 30px 30px;
    gap: 8px;
    background-color: ${(props)=>props.$status ? "white" : "#4970FB"};
    border: 5px solid #4970FB;
    border-radius: 25px;
`
export const Circle = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 24px;
    padding: 8px;
    height: 24px;
    font-size: 18px;
    color: ${(props)=>props.$status ? "white" : "#4970FB"};
    background-color: ${(props)=>props.$status ? "#4970FB" : "white"};
    border-radius: 100px;
`
export const MainText = styled.h3`
    font-size: 28px;
    color: ${(props)=>props.$status ? "#4970FB" : "white"};
`
export const SubText = styled.p`
    text-align: center;
    font-size: 18px;
    color: ${(props)=>props.$status ? "black" : "white"};
`
const wave = keyframes`
    0% {
        transform: translateY(5px); // 원래 위치
    }
    50% {
        transform: translateY(-8px); // 아래로 10px 이동
    }
    100% {
        transform: translateY(5px); // 다시 원래 위치로 돌아옴
    }
`
export const ArrowUp = styled.div`
    position: absolute;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    top: 10%;
    left: 50%;
    border-top-left-radius: 100px;
    border-top-right-radius: 100px;
    transform: translate(-50%, -50%);
    gap: 8px;
    width: 80%;
    cursor: pointer;
    padding: 3% 0;
    font-weight: 550;
    &:hover > div > img{
        animation: ${wave} 1.2s ease-in-out infinite;
    }
`
export const ArrowDown = styled.div`
    position: absolute;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    top: 90%;
    left: 50%;
    border-top-left-radius: 100px;
    border-top-right-radius: 100px;
    transform: translate(-50%, -50%);
    gap: 8px;
    cursor: pointer;
    width: 80%;
    padding: 2% 0;
    font-weight: 550;
    &:hover > div > img{
        animation: ${wave} 1.2s ease-in-out infinite;
    }
`

export const Black = styled.div`
    width: 60px;
    height: 60px;
    padding: 4px;
    border-radius: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    & > img{
        width: 100%;
    }
    &:hover > img {
        animation: ${wave} 1.2s ease-in-out infinite;
    }
`