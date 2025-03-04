import styled, {keyframes} from "styled-components";

export const Black = styled.div`
    position: fixed;
    width: 100vw;
    height: 100vh;
    background: rgb(0,0,0,0.4);
    display: flex;
    justify-content: center;
    align-items: center;
    top: 0;
    left: 0;
    z-index: 10;
`
const show = keyframes`
    0% {
        opacity: 0;
        margin-top: 10px;
    }
    100% {
        opacity: 1;
        margin-top: 0;
    }
`
export const Content = styled.div`
    background: white;
    width: 40%;
    border-radius: 10px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    align-content: center;
    gap: 20px;
    padding: 30px;
    animation: 0.3s ${show} ease-in-out;
`
export const InputBox = styled.div`
    width: 60%;
    & > p{
        margin-top: 5px;
        color: #e84848;
    }
    & > input{
        outline: none;
        border: 2px solid #e84848;
        border-radius: 8px;
        width: 100%;
        padding:8px;
    }
`
export const Btn = styled.button`
    all: unset;
    color: white;
    cursor: pointer;
    background-color: ${(props)=>props.$color ?  "#e84848" : "gray"}; ;
    border: 2px solid ${(props)=>props.$color ?  "#e84848" : "gray"};;
    border-radius: 8px;
    padding: 8px 20px;
    transition: 0.3s;
`