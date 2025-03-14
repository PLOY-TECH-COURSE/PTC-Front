import styled from "styled-components";

export const DragBox = styled.div`
        position: fixed;
        left: 0;
        top: 0;
        width: 100vw;
        height: 100vh;
        background-color: rgb(0, 0, 0, 0.3);
`
export const WriteContainer = styled.div`
    width: 100%;
    height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 0 4%;
`
export const Header = styled.header`
    padding: 2% 0 1% 0;
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
`
export const BtnBox = styled.nav`
    display: flex;
    gap: 16px;
`
export const Btn = styled.button`
    all: unset;
    cursor: pointer;
    color: ${(props)=>props.$Success ? "white" : "#4970FB"};
    padding: 8px 20px;
    background-color: ${(props)=>props.$Success ? "#4970FB" : "#ffffff"};
    border-radius: 10px;
    border: 2px solid #4970FB;
    &:hover{
        background-color: ${(props)=>props.$Success ? "#446bf6" : "#fafafa"};
    }
`
export const Tag = styled.input`
    border: none;
    outline: none;
    width: 100%;
        font-size: 16px;
`
export const TagOut = styled.p`
    color: #4970FB;
    width: max-content;
    padding: 5px 15px;
        margin-top: 10px;
        cursor: pointer;
`
export const TagBox = styled.div`
    width: 95%;
    margin: 0 auto;
    display: flex;
    flex-flow: row wrap;
    align-items: center;
    align-content: center;
    justify-content: start;
    &>*{
        margin-right: 10px;
    }
`
export const TagInputBox = styled.div`
        width: 180px;
        font-size: 16px;
        display: flex;
        color: #757575;
        gap: 4px;
        padding: 4px 0;
        margin-top: 10px;
`
export const Main = styled.main`
    width: 100%;
    height: 87%;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 16px;
    margin-top: 20px;
`

export const Section = styled.section`
    width: 50%;
    display: flex;
    flex-direction: column;
    height: 100%;
`

export const ToolBar = styled.article`
    width: 100%;
    display: flex;
    justify-content: center;
    border-top: 1.5px solid #838383;
    border-bottom: 1.5px solid #838383;
    margin: 16px 0;
        -webkit-user-drag: none;
        user-select: none;
        -webkit-user-select: none; /* Safari */
        -moz-user-select: none; /* Firefox */
        -ms-user-select: none; /* IE/Edge */
        user-drag: none;
`
export const ToolBox = styled.div`
    display: flex;
    gap: 8px;
`
export const Function = styled.div`
    padding: 8px;
    font-size: 18px;
    color: #838383;
    display: flex;
    justify-content: center;
    align-items: center;
    transition: 0.2s;
    cursor: default;
        width: 50px;
    &:hover {
        ${({$not})=>$not ? null :
                "background-color: #f3f3f3;" +
                "color: black;" +
                "cursor: pointer;"}
    }
`
export const TitleInput = styled.input`
    padding: 10px 14px;
    font-size: 32px;
    font-weight: 600;
    border: none;
    outline: none;
`

export const Title = styled.h1`
        font-size: 32px;
        font-weight: 600;
        padding: 10px 14px;
        width: 100%;
        max-width: 100%;
        height: auto;
        overflow-wrap: break-word;
`;
export const ContentInput = styled.textarea`
        border: none;
        resize: none;
        outline: none;
        padding: 10px 14px;
        font-size: 16px;
        height: 90%;
        margin-bottom: 20px;
        &::-webkit-scrollbar {
                width: 6px; /* 세로 스크롤바 너비 */
                height: 6px; /* 가로 스크롤바 높이 */
        }

        /* 스크롤바 트랙 (배경) */
        &::-webkit-scrollbar-track {
                background: none;
                border-radius: 5px;
        }

        /* 스크롤바 핸들 (움직이는 부분) */
        &::-webkit-scrollbar-thumb {
                background: #888;
                border-radius: 5px;
        }
        
`
export const Content =styled.div`
        width: 100%;
        max-width: 100%;
        word-break: break-all;
        padding: 10px 14px;
        font-size: 16px;
        display: flex;
        flex-flow: wrap row;
        height: 100%;
        overflow-y: scroll;
        margin-bottom: 20px;
        &::-webkit-scrollbar {
                width: 6px; /* 세로 스크롤바 너비 */
                height: 6px; /* 가로 스크롤바 높이 */
        }

        /* 스크롤바 트랙 (배경) */
        &::-webkit-scrollbar-track {
                background: none;
                border-radius: 5px;
        }

        /* 스크롤바 핸들 (움직이는 부분) */
        &::-webkit-scrollbar-thumb {
                background: #888;
                border-radius: 5px;
        }
`

export const H1 = styled.span`
        font-size: 27px;
        font-weight: 700;
`
export const H2 = styled.span`
        font-weight: 650;
        font-size: 25px;
`
export const H3 = styled.span`
        font-size: 20px;
        font-weight: 650;
`
export const H4 = styled.span`
        font-size: 17px;
        font-weight: 650;
`
export const div = styled.div`
        flex: 1 1 100%;
        word-break: break-all;
        width: 100%;
        display: flex;
        flex-flow: column wrap;
        & > *{
                margin: 5px;
        }
`
export const div2 = styled.div`
        width: 100%;
        word-break: break-all;
        display: flex;
        min-height: max-content;
        flex-flow: column wrap;
`
export const underLine = styled.span`
        text-decoration-line: underline;
`
export const cancelLine = styled.span`
        text-decoration-line: line-through;
`
export const hr = styled.div`
        width: 100%;
        height: 2px;
        background-color: #838383;
        margin: 4px 0;
`
export const img = styled.img`
        width: 100%;
        object-fit: cover;
        display: block;
        margin: 0 auto;
`