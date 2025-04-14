import styled from "styled-components";
import Header from "../header";
import Footer from "../footer";

export default function Error(){
    return (
        <Container>
            <Header />
            <Content>
                404 NOT FOUND ERROR
            </Content>
            <Footer/>
        </Container>
    )
}

export const Container = styled.div`
    width: 100%;
`

export const Content = styled.div`
    width: 100%;
    min-height: 62vh;
    align-items: center;
    justify-content: center;
    display: flex;
`