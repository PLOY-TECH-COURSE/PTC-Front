import styled from "styled-components";

export const FooterContainer = styled.div`
    display: flex;
    justify-content: flex-end;
    align-items: center;
    flex-direction: column;
    width: 100vw;
    height: 100vh;
`;
export const Footer = styled.div`
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
`