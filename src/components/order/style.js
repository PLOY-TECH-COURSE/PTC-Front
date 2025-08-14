import styled from "styled-components";
import {Button} from "../../pages/signup/signup.jsx";

export const UserOrderselecter = styled.div`
    position: absolute;
    width: 160%;
    margin-top: 10%;
    border-radius: 10px;
    border: 1px solid #cccccc;
    padding: 15% 20%;
    background: #ffffff;
`
export const UserOrderselectItem = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    position: relative;
    gap : 5%;
`
export const UserOrderselectItemName = styled.div`
    justify-content: space-between;
    width: 80%;
    padding: 5% 10%;
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