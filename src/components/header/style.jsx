import styled from "styled-components";

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