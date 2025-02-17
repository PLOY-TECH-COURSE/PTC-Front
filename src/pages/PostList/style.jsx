import styled from "styled-components";

export const Container = styled.div`
    width: 100%;
`

export const Content = styled.div`
    width: 100%;
`

export const PostListTop = styled.div`
    width: 100%;
    height: 50%;
    justify-content: center;
    display: flex;
    margin-top: 50px;
    flex-direction: column;
    gap: 20px;
    align-items: center;
`

export const Search = styled.div`
    width: 45vw;
    height: 5vh;
    border: 1px solid #4970FB;
    gap: 10px;
    display: flex;
    align-items: center;
    padding: 1%;
    border-radius: 13px;
    margin-left: 100px;
`

export const Input = styled.input`
    width: 100%;
    border: none;
    outline: none;
`

export const Sort = styled.div`
    display: flex;
    gap: 20px;
    margin-top: 30px;
    margin-left: 450px;
`

export const Recent = styled.div`
    display: flex;
    gap: 10px;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    color: ${(props) => (props.active ? "gray" : "black")};

    button{
        border-radius: 50%;
        background-color: ${(props) => (props.active ? "gray" : "#4970FB")};
        width: 0.4vw;
        height: 0.7vh;
        border: none;
    }
`

export const Like = styled.div`
    display: flex;
    gap: 10px;
    display: flex;
    justify-content: center;
    align-items: center;
    color: ${(props) => (props.active ? "gray" : "black")};

    button{
        border-radius: 50%;
        background-color: ${(props) => (props.active ? "gray" : "#4970FB")};
        width: 0.4vw;
        height: 0.7vh;
        border: none;
    }

    p{
        font-weight: 100;
        opacity: 0.78;
    }
`