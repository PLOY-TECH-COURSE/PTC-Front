import styled from "styled-components";

export const Container = styled.div`
    width: 100%;
`

export const Content = styled.div`
    width: 100%;
    align-items: center;
    justify-content: centers;
    overflow-y: auto;
    padding: 4% 5%;
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

// export const Date = styled.div`
//     display: flex;

//     span{
//         font-size: 10px;
//         color: #D1D1D1;
//         border: none;
//     }
// `

export const PostLike = styled.div`
    display: flex;
    justify-content: centers;
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
        color: #4970FB;
    }
`