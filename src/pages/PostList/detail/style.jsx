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
    gap: 2vw;
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
    padding: 10% 5%;
    flex-direction: column;
    justify-content: center;
    align-items: center;

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
    justify-content: center;
    align-items: center;
    gap: 10px;
    cursor: pointer;

    img{
        width: 40px;
    }

    p{
        font-size: 15px;
        color: ${(props) => (props.isLike ? "#4970FB" : "#D1D1D1")};
    }
`

export const PostDetailMain = styled.div`
    width: 85%;
    display: flex;
    gap: 50px;
`

export const PostDetailData = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    padding: 1% 5%;

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
    }
`


export const PostDetailDataTop = styled.div`
    display: flex;
    width: 100%;
    align-items: center;
    justify-content: space-between;
    gap: 10px;

    h1 {
        color: #4970FB;
        flex-grow: 1;
        word-break: break-word;
        white-space: normal;
    }

    img{
        cursor: pointer;
    }
`;

export const Edit = styled.div`
    display: flex;
    gap: 20px;
    margin-left: 9px;

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
    width: 1500px;
    background: #fff;
    padding: 20px;
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

export const CommentProfile = styled.img`
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
export const EditCommentContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  margin-top: 4px;
`;

export const EditCommentInput = styled.input`
  width: 100%;
  padding: 8px;
  border: 1px solid #ccc;
  border-radius: 4px;
`;
export const CommentButtonWrapper = styled.div`
  display: flex;
  gap: 8px;
`;
export const CommentUpdateButton = styled.button`
  background-color: #4970FB;
  color: #fff;
  border: none;
  border-radius: 4px;
  padding: 6px 10px;
  cursor: pointer;
  font-size: 14px;

  &:hover {
    background-color: #365edc;
  }
`;
export const CommentCancelButton = styled.button`
  background-color: #e5e7eb;
  color: #333;
  border: none;
  border-radius: 4px;
  padding: 6px 10px;
  cursor: pointer;
  font-size: 14px;

  &:hover {
    background-color: #d1d5db;
  }
`;
export const P = styled.p`
  font-size: 1rem;
  line-height: 1.6;
  color: #333;
  font-weight: 500;
  letter-spacing: 0.03em;
  text-align: justify;
`;
export const Bu = styled.button`
    padding: 10px 15px;
    border: none;
    border-radius: 5px;
    font-size: 16px;
    transition: background-color 0.3s ease;
    &:hover {
      background-color: ${({ disabled }) => (disabled ? "#ccc" : "#0056b3")};
    }
  `;
export const Air = styled.div`
    width: 300px;
    height: 300px;
`;

  export const AirCommentWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  width: 150%; 
  max-width: 2000px; 
  margin-top: 40px;
`;

export const InputWrapper = styled.div`
  flex-grow: 1; 
`;

export const Input = styled.input`
  width: 100%;
  padding: 12px;
  border: 1px solid #ccc;
  border-radius: 5px;
  font-family: 'Pretendard', sans-serif;
  margin-right: 10px;
`;
export const ButtonWrapper = styled.div`
    display: flex;
    justify-content: flex-end; 
    margin-top: 5px;
`;
