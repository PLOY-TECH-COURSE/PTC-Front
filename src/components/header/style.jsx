import styled, {keyframes, css} from "styled-components";

export const Container = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    background: #fff;
    padding: 10px 4%;
    height: 8vh;
    box-shadow: 0 2px 2px 0 rgba(0, 0, 0, 0.05);
`;

export const LogoImg = styled.img`
    display: flex;
    align-items: flex-start;
    flex-shrink: 0;
    width: 300px;
    cursor: pointer;
`;

export const TextBox = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 45px;
    @media (max-width: 480px) {
        display: none;
    }
`;
export const Hambuger = styled.div`
    width: 50px;
    height: 50px;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    @media (max-width:1980px) {
        display: none;
    }
    @media (max-width:480px) {
        display: flex;
    }
`
export const SelectText = styled.p`
    font-size: 1rem;
    font-weight: bold;
    color: #4970FB;
    cursor: pointer;
`;

export const Text = styled.p`
    padding: 0;
    font-size: 1rem;
    color: #555;
    cursor: pointer;
    width: max-content;
    &:hover {
        color: #000;
    }
`;
export const Text2 = styled.p`
    padding: 0;
    font-size: 1rem;
    color: #555;
    cursor: pointer;
    width: 100%;
    &:hover {
        color: #000;
    }
`;

export const LoginButton = styled.button`
    background-color: transparent;
    border: 2px solid #4970FB;
    padding: 5px 15px;
    font-size: 1rem;
    cursor: pointer;
    color: #4970FB;
    font-weight: 550;
    border-radius: 30px;
    transition: 0.1s;
    width: 90px;
    &:hover {
        background-color: #fafafa;
    }
`;

export const SignUpButton = styled.button`
    background-color: #4970FB;
    border: 2px solid #4970FB;
    padding: 5px 15px;
    font-size: 1rem;
    color: #fff;
    cursor: pointer;
    border-radius: 30px;
    transition: 0.1s;
    width: 90px;
    &:hover {
        background-color: #446bf6;
    }
`;
export const LoginBox = styled.div`
    display: flex;
    align-items: center;
    gap: 10px;
`
export const Info = styled.div`
    display: flex;
    align-items: center;
    gap: 10px;
    cursor: pointer;
    position: relative;
    &>p:hover{
        color: #555;
    }
`
const down = keyframes`
    0% {
        transform: rotate(0deg);
    }
    100% {
        transform: rotate(180deg);
    }
`
const up = keyframes`
    0% {
        transform: rotate(180deg);
    }
    100% {
        transform: rotate(360deg);
    }
`
const show = keyframes`
    0% {
        opacity: 0;
    }
    100% {
        opacity: 1;
    }
`

export const DownImg = styled.img`
    animation: ${(props) =>
            props.$isOpen && css`${down} 0.4s ease-in-out;`};

    animation: ${(props) =>
            props.$isOpen2 && css`${up} 0.4s ease-in-out;`};

    ${(props) => props.$isOpen ? 'transform: rotate(180deg);' : 'transform: rotate(0deg);'}
`;

export const Dropdown =styled.div`
    display: ${(props) => props.$isOpen ? 'block' : 'none'};
    animation: ${show} 0.2s ease-in-out;
    position: absolute;
    top: 42px;
    right: 0;
    background-color: #fff;
    border: 1px solid #ccc;
    z-index: 2;
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.2);
    &>p{
        transition: 0.2s;
        padding: 10px 20px;
    }
    &>p:hover{
        background-color: #f1f1f1;
    }
`
export const Cancel = styled.div`
    position: absolute;
    width: 100vw;
    height: 100vh;
    top: 0;
    left: 0;
    z-index: 1;
`