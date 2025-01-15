import styled from "styled-components";

export const TeamContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    position: relative;
`;
export const Wrap = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    padding: 3% 10%;
    gap: 4px;
    @media (max-width: 480px) {
        padding: 3% 6%;
    }
`;
export const BlueText = styled.h3`
    color: #4970FB;
    font-size: 28px;
    width: 100%;
`
export const Title = styled.div`
    width: 100%;
`
export const Nav = styled.nav`
    width: 100%;
    height: 10%;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    gap: 30px;
`
export const Main = styled.main`
    width: 100%;
    height: 80%;
    display: flex;
    flex-flow: wrap row;
    justify-content: space-between;
    gap: 30px;
    align-items: center;
`
export const NavText = styled.h1`
    font-size: 24px;
    cursor: pointer;
    padding-bottom: 8px;
    transition: border-bottom 0.3s ease;
    color: ${(props)=>props.$color ? "#4970FB" : "#D1D1D1"};
    border-bottom: ${(props) => (props.$color ? "3px solid #4970FB" : "3px solid transparent")};
`
export const Box = styled.div`
    width: 250px;
    height: 270px;
    display: flex;
    background: url(${(props)=>props.$bg}) no-repeat;
    background-size: cover;
    flex-direction: column;
    justify-content: flex-end;
    align-items: center;
    padding: 16px;
    box-shadow: 0 0 7.64px 0 rgba(0, 0, 0, 0.25);
    border-radius: 8px;
    @media (max-width: 480px) {
        width: 150px;
        height: 170px;
    }
`
export const User = styled.div`
    width: 100%;
    background: rgba(255, 255, 255, 0.9);
    box-shadow: 0 0 7.64px 0 rgba(0, 0, 0, 0.25);
    border-radius: 8px;
    padding: 10px;
`
export const Name = styled.h3`
    text-align: center;
    margin-bottom: 8px;
`
export const JobBox = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
`
export const Job = styled.h3`
    color: #797979;
`
export const Git = styled.h3`
    color: #4970FB;
    cursor: pointer;
`
export const UnBox = styled.div`
    width: 250px;
    height: 270px;
    @media (max-width: 480px) {
        width: 140px;
        height: 160px;
    }
`