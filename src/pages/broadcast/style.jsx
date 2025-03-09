import styled from "styled-components";

export const Container = styled.div`
    width: 100%;
`

export const Content = styled.div`
    width: 100%;
    min-height: 62vh;
    height: max-content;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    padding: 3% 10%;
`

export const PostListTop = styled.div`
    display: flex;
    margin-left: 320px;
    width: 100%;
`

export const PostListMain = styled.div`
    padding: 3% 5%;
    min-height: max-content;
    width: 83%;
    display: flex;
    flex-wrap: wrap;
    height: 70vh;
    justify-content: space-between;
    row-gap: 40px;

    h2{
        margin-left: 6px;
    }
`

export const PostData = styled.div`
    font-size: 18px;
    font-weight: bold;
`
export const RowData = styled.div`
    display: flex;
    flex-direction: row;
    border: 1px solid #4970FB;
    width: 27.5vw;
    height: 25vh;
    border-radius: 10px;
    min-width: 27vw;
    padding: 2.3%;
    gap: 10px;
    cursor: pointer;
`


export const PostImg = styled.div`
    width: 100%;
    height: 100%;

    display: flex;
    align-items: center;
    justify-content: center;
    padding: auto;
    
    img{
        max-width: 70%;
        object-fit: cover;
    }
`
export const PostRightData = styled.div`
    display: flex;
    flex-direction: column;
    width: 50%;
    
    span{
        border: 0.5px solid #D1D1D1;
        margin-top: 60px;
    }
`

export const PostRightTopData = styled.div`
    display: flex;
    flex-direction: column; 
    width: 100%;
    gap: 10px;

    p{
        font-size: 10px;
        color: gray;
    }
`

export const PostRightBottomData = styled.div`
    display: flex;
    width: 100%;
    gap: 10px;
    align-items: center;
    width: 200px;
    margin-top: 10px;
    margin-left: 5px;
`


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
        color: #4970FB;
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