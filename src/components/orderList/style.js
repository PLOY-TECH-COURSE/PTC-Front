import styled from "styled-components";
export const UserOrderselecter = styled.div`
    position: absolute;
    width: 300%;
    margin-top: 10%;
    border-radius: 10px;
    border: 1px solid #cccccc;
    padding: 15% 20%;
    background: #ffffff;
    z-index: 1;
`
export const UserOrderselectItem = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    position: relative;
    gap : 5%;
`
export const UserOrderselectItemName = styled.div`
    color: ${({ completed }) => (!completed ? "#000":"#fff")};
    background-color: ${({ completed }) => (!completed ? "#fff":"#4970FB")};
    justify-content: space-between;
    width: 80%;
    padding: 5% 10%;
`
