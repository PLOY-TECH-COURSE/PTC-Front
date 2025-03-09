import styled from "styled-components";

export const Container = styled.div`
    width: 100%;
    

`

export const Content = styled.div`
    width: 100%;
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

export const Sort = styled.div`
    display: flex;
    gap: 20px;
    margin-top: 30px;
    margin-left: 410px;
`

export const Recent = styled.div`
    display: flex;
    gap: 10px;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    color: ${(props) => (props.active ? "#D1D1D1" : "black")};

    button{
        border-radius: 50%;
        background-color: ${(props) => (props.active ? "#D1D1D1" : "#4970FB")};
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
    cursor: pointer;
    color: ${(props) => (props.active ? "#D1D1D1" : "black")};

    button{
        border-radius: 50%;
        background-color: ${(props) => (props.active ? "#D1D1D1" : "#4970FB")};
        width: 0.4vw;
        height: 0.7vh;
        border: none;
    }

    p{
        font-weight: 100;
        opacity: 0.78;
    }
`

export const PostListMain = styled.div`
    width: 100%;
    padding: 3% 5%;
    display: flex;
    flex-wrap: wrap;
    height: 70vh;
    justify-content: space-between;
    row-gap: 40px;
`

export const PostData = styled.div`
    font-size: 18px;
    font-weight: bold;
`


export const RowData = styled.div`
    display: flex;
    flex-direction: row;
    border: 1px solid #cccccc;
    width: 27.5vw;
    height: 25vh;
    border-radius: 10px;
    min-width: 27vw;
    padding: 2% 1.3%;
    gap: 10px;
    cursor: pointer;
    align-items: flex-start;
`

export const PostImg = styled.div`
    width: 100%;
    height: 100%;
    margin-right: 10px;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: auto;
    
    img{
        max-width: 70%;
        height: auto;
        display: block;
        margin: auto;
    }
`;



export const PostRightData = styled.div`
    display: flex;
    flex-direction: column;
    width: 50%;
    justify-content: space-between; /* 상단과 하단 요소를 분리 */
    height: 100%;
    
    span{
        border: 0.5px solid #D1D1D1;
        //margin-top: 60px;
    }
`;

// export const PostRightTopData = styled.div`
//     display: flex;
//     flex-direction: column; 
//     width: 100%;
//     gap: 10px;
//     flex-grow: 1;

//     p{
//         font-size: 10px;
//         color: gray;
//     }
// `

export const PostRightTopData = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    gap: 10px;
    flex-grow: 1;
    overflow: hidden;
    
    p {
        font-size: 10px;
        color: gray;
    }
`;

export const PostRightBottomData = styled.div`
    display: flex;
    width: 100%;
    gap: 10px;
    align-items: center;
    width: 200px;
    margin-top: 10px;
    margin-left: 5px;
    flex-shrink: 0;
`

// export const PostRightBottomData = styled.div`
//     display: flex;
//     width: 100%;
//     gap: 10px;
//     align-items: center;
//     margin-top: 10px;
//     margin-left: 5px;
//     flex-shrink: 0; /* Prevent shrinking when content grows */
// `;

export const PostProfile = styled.div`
    img{
        border-radius: 50%;
        width: 30px;
        height: 30px;
        cursor: pointer;
    }
`

export const PostbottomData = styled.div`

    span{
        font-size: 10px;
        color: #D1D1D1;
        border: none;
    }
`

export const Name = styled.p`
    font-size: 13px;
    font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
    font-weight: 500;
    cursor: pointer;
`

export const PostLike = styled.div`
    display: flex;
    justify-content: centers;
    align-items: center;
    gap: 5px;
    margin-left: 30px;
    cursor: pointer;

    img{
        width: 15px;
    }

    p{
        font-size: 13px;
        font-family: 'Courier New', Courier, monospace;
        font-weight: 600;
        margin-top: 2px;
    }
`