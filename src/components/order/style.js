import styled from "styled-components";

export const UserOrderselecter = styled.div`
    position: absolute;
    display: flex;
    flex-direction: column;
    gap: 0.25rem;
    width: 160%;
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
    display: flex;
    justify-content: space-between;
    width: 85%;
    padding: 4% 8%;
    border-radius: 10px;
    border: 1px solid #cccccc;
`
export const UserSet = styled.div`
    position: absolute;
    margin-left: 25%;
    width: 100%;
    left : 100%;
    top: 0;
    border-radius: 10px;
    border: 1px solid #cccccc;
    padding: 15% 20%;
    background-color: #ffffff;
    z-index: 1;
`
export const SubmitButton = styled.button`   
    width: 100%;
    margin-top: 8%;
    background: #4970FB;
    border: none;
    border-radius: 10px;
    padding: 8%;
    color: white;
`