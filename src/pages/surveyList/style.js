import styled from "styled-components";
export const Container = styled.div`
    width: 100%;
`
export const Content = styled.div`
    width: 100%;
    min-height: 62vh;
    align-items: center;
    justify-content: center;
    overflow-y: auto;
`
export const PostListTop = styled.div`
    width: 100%;
    height: 50%;
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
`
export const Input = styled.input`
    width: 100%;
    border: none;
    outline: none;
`
export const LoadingWrapper = styled.div`
    position: fixed;
    transform: translate(-50%, -50%);
    z-index: 9999;
`;
export const PostListMain = styled.div`
    width: 100%;
    padding: 3% 0% 3% 6%;
    display: flex;
    flex-wrap: wrap;
    justify-content: flex-start;
    gap: 40px;

    h2{
        margin-left: 310px;
    }
`;