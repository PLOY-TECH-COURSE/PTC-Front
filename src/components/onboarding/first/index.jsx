import * as S from "./style.jsx";
import Logo from '../../../assets/Logo.svg';
import {useNavigate} from "react-router-dom";
import LeftArrow from '../../../assets/onboarding/first/LeftArrow.svg';
import {useEffect, useState} from "react";
import MainImg from '../../../assets/onboarding/first/mento2.jpeg'
import {useThrottle} from "../../../hooks/useThrottle.jsx";
import Bg from '../../../assets/onboarding/first/bg.svg'
import {getBroadcastList} from "../../../api/broadcast";
import YouTubePlayer from "./video/index.jsx";

export default function First({youtubeRef}){
    const navigate = useNavigate();
  const imgList = [3, 1, 2, 3, 1];
  const [imgIdx, setImgIdx] = useState(1); // 시작은 1번 인덱스 (실제 첫 번째 이미지)
  const [isAnimation, setIsAnimation] = useState(false);

// 자동 슬라이드
  useEffect(() => {
    const interval = setInterval(() => {
      if (imgIdx === 2) {
        setIsAnimation(true);
      }
      setImgIdx((prevIndex) => (prevIndex + 1) % imgList.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [imgIdx]);

// 복제 이미지에서 원본 위치로 순간 이동
  useEffect(() => {
    setTimeout(() => {
      if (imgIdx === 4) setImgIdx(1);
      if (imgIdx === 0) setImgIdx(3);
    }, 600);
  }, [imgIdx]);

  const nextSlide = useThrottle(() => {
    if (imgIdx === 2) {
      setIsAnimation(true);
    }
    setImgIdx((prevIndex) => (prevIndex + 1) % imgList.length);
  }, 700);

  const prevSlide = useThrottle(() => {
    if (imgIdx === 2) {
      setIsAnimation(true);
    }
    setImgIdx((prevIndex) => {
      return (prevIndex - 1 + imgList.length) % imgList.length;
    });
  }, 700);

  const animation = () => {
    if (isAnimation) {
      setTimeout(() => {
        setIsAnimation(false);
      }, 100);
      return 0.5;
    }
    return imgIdx === 1 || imgIdx === 3 ? 0 : 0.5;
  };
  useEffect(async () => {
    const data = await getBroadcastList({start: 0});
    setBroadcast(data);
  }, []);
    const [broadcast, setBroadcast] = useState([]);
    return(
        <S.FirstContainer>

          <S.Wrap>
            <S.SlideBox $time={animation} $index={imgIdx}>
              {/** 무한 슬라이드를 위한 슬라이드**/}
              <S.Slide3>
                <img src={Bg} alt={'bg'} width={'100%'}/>
              </S.Slide3>

              {/** 찐 슬라이드**/}
              <S.Slide>
                <S.Section>
                  <S.Description>
                    <img src={Logo} alt={"logo"} />
                    <S.Title>새롭게 달라진 플로이테크코스</S.Title>
                    <S.SubText>플로이 테크 코스는 IT 비영리 단체 ‘플로이’에서 운영하는</S.SubText>
                    <S.SubText>1:1 맞춤형 멘토링 스터디 프로그램입니다.</S.SubText>
                  </S.Description>
                  <S.Img src={MainImg} alt={'Icon'} width={'100%'}/>
                </S.Section>
              </S.Slide>
              <S.Slide2>
                <S.Black/>
                <YouTubePlayer ref={youtubeRef}/>
                <h1>발표를 통한 깊은 이해도</h1>
              </S.Slide2>
              <S.Slide3>
                <img src={Bg} alt={'bg'} width={'100%'}/>
              </S.Slide3>

              {/** 무한 슬라이드를 위한 슬라이드**/}
              <S.Slide>
                <S.Section>
                  <S.Description>
                    <img src={Logo} alt={"logo"}/>
                    <S.Title>새롭게 달라진 플로이테크코스</S.Title>
                    <S.SubText>플로이 테크 코스는 IT 비영리 단체 ‘플로이’에서 운영하는</S.SubText>
                    <S.SubText>1:1 맞춤형 멘토링 스터디 프로그램입니다.</S.SubText>
                  </S.Description>
                  <S.Img src={MainImg} alt={'Icon'} width={'100%'}/>
                </S.Section>
              </S.Slide>
            </S.SlideBox>
          </S.Wrap>
          <S.ArrowBtn
            $isLeft={true}
            onClick={()=>{prevSlide()}}
          >
            <img src={LeftArrow} alt={'arrow'} />
          </S.ArrowBtn>
          <S.ArrowBtn
            $isLeft={false}
            onClick={()=>{nextSlide()}}
          >
            <img style={{transform : 'rotate(180deg)'}} src={LeftArrow} alt={'arrow'} />
          </S.ArrowBtn>
          <S.BroadCastContainer>
            {broadcast && broadcast.map((item) => {
              const today = new Date();
              const formatted = today.toISOString().split('T')[0];
              return(
                  <S.BroadCast key={item.id} onClick={() => {
                    navigate(`/announcement/${item.id}`)
                  }}>
                    {item.date === formatted && <S.New>New</S.New>}
                    <div>
                      <h3>
                        {item.title.length > 16
                          ? `${item.title.slice(0, 16)}...`
                          : item.title}
                      </h3>
                    </div>
                    <p>{item.date}</p>
                  </S.BroadCast>
                );
            })}
          </S.BroadCastContainer>
        </S.FirstContainer>
    )
}