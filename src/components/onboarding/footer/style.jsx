import styled, {keyframes, css} from "styled-components";

export const FooterContainer = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-direction: column;
    width: 100vw;
    height: 100vh;
`;
export const Footer = styled.footer`
    width: 100%;
    height: 30vh;
    display: flex;
    justify-content: space-between;
    padding: 0 10%;
    align-items: center;
    background-color: #EAEAEA;
`;
export const SectionLeft = styled.section`
    color: #A2A2A2;
    font-size: 16px;
    & > *{
        margin-bottom: 10px;
    }
    & > p{
        display: flex;
        align-items: center;
        gap: 4px;
    }
`
export const SectionRight = styled.section`
    color: #A2A2A2;
    font-size: 16px;
    display: flex;
    gap: 40px;
    align-items: flex-start;
`
export const Navbar = styled.nav`
    & > p{
        margin-bottom: 15px;
        cursor: pointer;
    }
`
export const Git = styled.img`
    cursor: pointer;
    width: 40px;
`
export const ImgBox = styled.div`
    display: flex;
    align-items: center;
    gap: 30px;
`
export const FAQ = styled.div`
    width: 100%;
    height: 60vh;
    margin-top: 50px;
    display: flex;
    justify-content: space-around;
    align-items: center;
    flex-direction: column;
    & > p{
        width: 60%;
        font-size: 24px;
    }
`
export const Section = styled.section`
    width: 60%;
    background: #F8FAFB;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    padding: 15px 20px;
    border: 2px solid #EAEEEF;
    cursor: pointer;
    border-radius: 5px;
    transition: 0.1s;
    &:hover {
        background: #f0f5f6;
    }
    & > img{
        transform: rotate(45deg);
    }
`
const show = keyframes`
    0%{
        opacity: 0;
        height: 10px;
    }
    100%{
        opacity: 1;
        height: 90px;
    }
`
const hide = keyframes`
    0%{
        opacity: 1;
        height: 90px;
    }
    100%{
        opacity: 0;
        height: 60px;
    }
`
export const Dis = styled.div`
    width: 60%;
    background: white;
    border-top: 2px solid #E9E9E9;
    padding: 14px 20px;
    display: flex;
    flex-direction: column;
    font-weight: 500;
    gap: 12px;
    overflow: hidden;
    cursor: pointer;
    box-shadow: 0px 0px 3px 0px rgba(0, 0, 0, 0.25);
    ${(props) =>
            props.$skill &&
            css`
            animation: ${show} ease-in-out 0.4s;
        `}
    ${(props) =>
            props.$hide &&
            css`
            animation: ${hide} ease-in-out 0.4s;
        `}
`
export const Name = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    font-weight: 550;
`
export const BlueText = styled.p`
    color: #2E6FF2;
    font-size: 16px;
    transition: 0.2s;
    &:hover{
        text-decoration-line: underline;
    }
`