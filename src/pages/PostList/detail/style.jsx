import styled from "styled-components";

export const Container = styled.div`
    width: 100%;
    overflow-x: hidden;

`

export const Content = styled.div`
    width: 100%;
    align-items: center;
    justify-content: center;
    overflow-y: auto;
    padding: 4% 5%;
    overflow-x: hidden;
`

export const Profile = styled.div`
    display: flex;
    width: 15vw;
    height: 29vh;
    border: 0.5px solid #D1D1D1;
    border-radius: 10px;
    flex-direction: column;
`

export const ProfileTop = styled.div`
    display: flex;
    width: 35%;
    gap: 30px;
    padding: 8%;
    margin: 10px 25px 3px 20px;
    cursor: pointer;
    
    img{
        border-radius: 50%;
        width: 50px;
        height: 50px;
        cursor: pointer;
    }
`

export const RightProfile = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    margin-top: 5px;
    gap: 5px;

    span{
        font-size: 13px;
        color: #4970FB;
        width: 5vw;
    }

    p{
        font-size: 16px;
        font-family: 'Courier New', Courier, monospace;
        width: 5svw;
    }
`

export const ProfileBottom = styled.div`
    display: flex;
    width: 100%;
    gap: 20px;
    border-top: 0.5px solid #D1D1D1;
    padding: 10%;
    flex-direction: column;

    span{
        font-size: 15px;
        color: #727272;
        border: none;
        opacity: 0.5;
        margin-left: 15px;
    }
`

export const PostLike = styled.div`
    display: flex;
    align-items: center;
    gap: 10px;
    margin-left: 23px;
    cursor: pointer;

    img{
        width: 40px;
        margin-left: 20px;
    }

    p{
        font-size: 15px;
        color: ${(props) => (props.isLike ? "#4970FB" : "#D1D1D1")};
    }
`

export const PostDetailMain = styled.div`
    width: 85%;
    display: flex;
    gap: 100px;
`

export const PostDetailData = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    padding: 1% 0%;

    & > span:nth-of-type(1){
        font-size: 17px;
        color: #727272;
        border: none;
        opacity: 0.5;
        margin-top: 25px;
    }

    & > div:nth-of-type(2){
        width: 100%;
        font-size: 16px;
        color: #000;
        font-family: 'Courier New', Courier, monospace;
        margin-top: 18px;
        & :first-child{
            width: 100%;
        }
    }
`


export const PostDetailDataTop = styled.div`
    display: flex;
    width: 100%;
    align-items: center;
    gap: 20px;

    h1{
        margin-top: 15px;
        font-size: 30px;
    }

    img{
        margin-left: 400px;
        margin-top: 15px;
        width: 32px;
        cursor: pointer;
    }
`

export const Edit = styled.div`
    display: flex;
    gap: 20px;

    p{
        font-family: 'Courier New', Courier, monospace;
        color: #909090;
        cursor: pointer;
    }
    p:not(:last-child)::after {
        content: "";
        display: inline-block;
        width: 1px; 
        height: 13.5px;
        background-color: #ccc; 
        margin-left: 17px;
    }
`
export const CommentSection = styled.div`
    margin-top: 40px;
    width: 1500px;
    background: #fff;
    padding: 20px;
    margin-left: 300px;
`;

export const CommentInputWrapper = styled.div`
    display: flex;
    margin-top: 20px;
    flex-direction: column;
    gap: 10px;
    margin-bottom: 10px;
    width: 50%;
    input {
        flex: 1;
        padding: 12px;
        border: 1px solid #ccc;
        border-radius: 5px;
        font-family: 'Pretendard', sans-serif;
    }

    button {
        background-color: #4970FB;
        color: white;
        border: none;
        padding: 12px;
        border-radius: 5px;
        cursor: pointer;
        width: 100px;
        align-self: flex-end; 
    }
`;

export const CommentItem = styled.div`
    display: flex;
    width: 50%;
    align-items: center;
    background: #fff;  
    padding: 15px;
    border-radius: 10px;
    margin-bottom: 10px;
`;

export const CommentProfile = styled.div`
    width: 40px;
    height: 40px;
    background: #ccc;
    border-radius: 50%;
    margin-right: 10px;
`;

export const CommentContent = styled.div`
    flex: 1;
    font-family: 'Pretendard', sans-serif;
    p {
        margin: 3px 0;
        word-wrap: break-word;  
        word-break: break-word; 
    }
`;


export const CommentBottom = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-top: 5px;
`;

export const Like = styled.div`
    p{
        font-size: 14px;
        color: ${(props) => (props.isCommentLike ? "#4970FB" : "#D1D1D1")};
    }
    display: flex;
    gap: 5px;
    align-items: center;
`;

export const CommentActions = styled.div`
    display: flex;
    gap: 10px;
    p {
        color: #909090;
        cursor: pointer;
        font-family: 'Pretendard', sans-serif;
    }

    p:not(:last-child)::after {
        content: "";
        display: inline-block;
        width: 1px; 
        height: 13.5px;
        background-color: #ccc; 
        margin-left: 10px;
    }
`;