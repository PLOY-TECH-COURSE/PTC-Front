import {Outlet} from 'react-router-dom'
import styled from 'styled-components'
import Logo from '../../assets/Logo.svg';
import { useEffect } from 'react';
import Share from '../../assets/share.svg';

export default function Mobile(){
    useEffect(() => {
        if (!window.Kakao.isInitialized()) {
          window.Kakao.init("f1331ab24e0c2a467741a08ca8699b45"); // 카카오 앱 키 넣기
        }
      }, []);
    
      const shareKakao = () => {
        window.Kakao.Share.sendDefault({
          objectType: "feed",
          content: {
            title: "PLOY TECH COURSE",
            description: "플로이테크코스 공유하기",
            imageUrl: "https://storage.googleapis.com/ploytechcourse/126.png",
            link: {
              mobileWebUrl: window.location.href,
              webUrl: window.location.href,
            },
          },
        });
      };
    
      
    if(window.innerWidth < 600){
        return (
            <Container>
                <img src={Logo} />
                <h1>모바일 접속 불가</h1>
                <h2>모바일 보다 pc에서 접속해주세요</h2>
                <h2>ploytechcourse.kro.kr</h2>
                <div>
                    공유
                    <Btn onClick={shareKakao}><img src={Share} /></Btn>
                </div>
            </Container>
        )
    }
    return(
        <>
            <Outlet />
        </>
    )
}

const Container = styled.main`
    width: 100vw;
    height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    & > img{
        margin-left: 30px;
        margin-bottom: 10px;
    }
    & > h1{
        font-size: 32px;
        margin-bottom: 10px;
    }
    & > h2{
        font-size: 24px;
        margin-bottom: 10px;
    }
    & > h2:nth-of-type(2){
        margin-bottom: 20px;
    }
    & > div{
        display: flex;
        justify-content: center;
        align-items: center;
        font-size: 16px;
        gap: 10px;
    }
`
const Btn = styled.button`
    all: unset;
    cursor: pointer;
    background-color: white;
    display: flex;
    justify-content: center;
    align-items: center;
    border: 1px solid black;
    padding: 10px;
    border-radius: 100px;
`