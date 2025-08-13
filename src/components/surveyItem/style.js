import styled from "styled-components";
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
export const PostRightData = styled.div`
    display: flex;
    flex-direction: column;
    width: 50%;
    justify-content: space-between; /* 상단과 하단 요소를 분리 */
    height: 100%;
    
    span{
        border: 0.5px solid #D1D1D1;
    }
`;
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
    justify-content: center;
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