import styled from "styled-components";

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
    & > div{
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
