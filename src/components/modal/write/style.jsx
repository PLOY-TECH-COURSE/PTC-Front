import styled, {keyframes} from "styled-components";

export const Black = styled.div`
    width: 100vw;
    height: 100vh;
    background: rgb(0,0,0,0.4);
    display: flex;
    justify-content: center;
    align-items: center;
    position: absolute;
    top: 0;
    z-index: 100;
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
export const Content = styled.main`
    width: 40%;
    background: white;
    border-radius: 10px;
    padding: 40px 30px;
    display: flex;
    flex-direction: column;
    position: relative;
    gap: 20px;
    animation: ${show} 0.2s ease-in-out;
  z-index: 1000;
`
export const Broad = styled.div`
    width: 100%;
    display: flex;
    gap: 10px;
    font-size: 16px;
`
export const ImgUploadBox = styled.div`
    width: 300px;
    height: 300px;
    margin: 0 auto;
    background-color: ${(props)=>props.$Img ? "white" : "#E7E7E7"};
    display: flex;
    border-radius: 10px;
    justify-content: space-around;
    flex-direction: column;
    align-items: center;
    padding: 20px 0;
    cursor: pointer;
    overflow: hidden;
`
export const SelectImg = styled.img`
    width: 100%;
    height: 100%;
    object-fit: cover;
`
export const UploadContent = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 10px;
    & > p{
        font-size: 20px;
        color: #9E9E9E;
    }
`
export const Btn = styled.button`
    all: unset;
    cursor: pointer;
    color: ${(props)=>props.$Success ? "white" : "#4970FB"};
    padding: 8px 20px;
    border-radius: 10px;
    border: 2px solid #4970FB;
    transition: 0.1s;
    width: max-content;
    background-color: ${(props)=>props.$Success ? "#4970FB" : "#ffffff"};
    &:hover{
        background-color: ${(props)=>props.$Success ? "#446bf6" : "#fafafa"};
    }
`
export const Textarea = styled.textarea`
    border: 1px solid #787878;
    border-radius: 10px;
    resize: none;
    outline: none;
    height: 80px;
    padding: 10px 14px;
`
export const BtnBox = styled.div`
    width: 100%;
    justify-content: center;
    gap: 20px;
    display: flex;
`