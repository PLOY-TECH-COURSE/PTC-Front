import styled from "styled-components";

export const Black = styled.div`
    width: 100vw;
    height: 100vh;
    background: rgb(0,0,0,0.4);
    display: flex;
    justify-content: center;
    align-items: center;
    position: absolute;
    top: 0;
    z-index: 10;
`

export const Box = styled.main`
    width: 40%;
    background: white;
    border-radius: 10px;
    padding: 40px 30px;
    display: flex;
    flex-direction: column;
    gap: 40px;
    @media (max-width: 480px) {
        width: 80%;
    }
`
export const Title = styled.h1`
    font-size: 32px;
`
export const Section = styled.section`
    display: flex;
    flex-flow: nowrap column;
    gap: 16px;
`
export const ContentName = styled.div`
    width: 100%;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    gap: 20px;
`
export const Content= styled.div`
    border-left: 4px solid #4970FB;
    padding: 4px 15px;
`
export const Text = styled.p`
    font-size: 18px;
    margin: 8px 0;
    font-weight: 550;
`