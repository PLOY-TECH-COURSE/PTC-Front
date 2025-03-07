import {Outlet} from 'react-router-dom'
import styled from 'styled-components'
import Logo from '../../assets/Logo.svg';
import { useEffect } from 'react';

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
                <h2>로 다시 접속해주세요</h2>
                <button onClick={shareKakao}>dddd</button>
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
`