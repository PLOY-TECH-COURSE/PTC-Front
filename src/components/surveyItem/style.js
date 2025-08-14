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
    padding: 1.5% 1.3%;
    gap: 10px;
    cursor: pointer;
    align-items: flex-start;
    position: relative;
`
export const PostMainData = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    justify-content: space-between; /* 상단과 하단 요소를 분리 */
    height: 100%;
    span{
        border: 0.5px solid #D1D1D1;
    }
`;
export const PostRightTopData = styled.div`
    display: flex;
    flex-direction: column;
    width: 70%;
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
    justify-content: space-between;
    margin-top: 10px;
    flex-shrink: 0;
`
export const PostbottomData = styled.div`
    span{
        font-size: 12px;
        color: #4970FB;
        border: none;
    }
`
export const CompleteImage = styled.img`
    width: 30%;
    position: absolute;
    top: 0;
    right: 0;
    padding-top: 6%;
`
export const OrderSelector = styled.div`
    position: relative;
`