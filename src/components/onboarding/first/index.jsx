import * as S from "./style.jsx";
import Logo from '../../../assets/Logo.svg';
import {useNavigate} from "react-router-dom";
import {useRecoilValue, useRecoilState} from "recoil";
import {useEffect, useState} from "react";
import {authAtom} from "../../../recoil/authAtom.js";
import MainImg from '../../../assets/onboarding/first/mento2.jpeg'
import ArrowLeft from '../../../assets/onboarding/first/leftArrow.svg'
import ArrowRight from  '../../../assets/onboarding/first/rightArrow.svg'
import {useThrottle} from "../../../hooks/useThrottle.jsx";
import Mail from '../../../assets/onboarding/first/mail.svg'
import {modalAtom} from "../../../recoil/modalAtom.js";
import {isApplyAtom} from "../../../recoil/isApply.js";

export default function First(){
    const navigate = useNavigate();
    const auth = useRecoilValue(authAtom);
    const imgList = [MainImg];
    const [imgIdx , setImgIdx] = useState(1);
    const [isAnimation, setIsAnimation] = useState(false);


    useEffect(() => {
        const interval = setInterval(()=>{
            if(imgIdx === 3){
                setIsAnimation(true);
            }
            setImgIdx((prevIndex) => {
                return (prevIndex + 1) % imgList.length;
            });
        }, 2000);
        return () => clearInterval(interval);
    }, [imgIdx]);

    useEffect(() => {
        setTimeout(()=>{
            if(imgIdx === 5) setImgIdx(1);
            if(imgIdx === 0) setImgIdx(4);
        }, 600);
    }, [imgIdx]);

    const nextSlide = useThrottle(() => {
        if(imgIdx === 3){
            setIsAnimation(true);
        }
        setImgIdx((prevIndex) => {
            return (prevIndex + 1) % imgList.length;
        });
    }, 700);

    const prevSlide = useThrottle(() => {
        if(imgIdx === 2) {
            setIsAnimation(true);
        }
        setImgIdx((prevIndex) => {
            if(prevIndex === 0) return 4;
            return (prevIndex - 1 + imgList.length) % imgList.length
        });
    }, 700);

    const animation = () =>{
        if(isAnimation){
            setTimeout(()=>{
                setIsAnimation(false);
            }, 100)
            return 0.5;
        }
        return imgIdx === 1 || imgIdx === 4 ? 0 : 0.5
    }

    const [_, setIsModal] = useRecoilState(modalAtom);
    const [_2, setIsApply] = useRecoilState(isApplyAtom);
    const [broadcast, setBroadcast] = useState([
      {id : 1, title : "2023년 1", date : "2023-01-01", content : "1학기 과제 공지사항 입니다 아니근데진짜 이쁘다니까"},
      {id : 2, title : "2023년 2학기 과제 공지사항", date : "2023-01-02", content : "2학기 과제 공지사항"},
      {id : 3, title : "2023년 3학기 과제 공지사항", date : "2023-01-03", content : "3학기 과제 공지사항"},
    ]);
    return(
        <S.FirstContainer>
            <S.Wrap>
                <S.Section>
                    <S.Description>
                        <img src={Logo} alt={"logo"} />
                        <S.Title>새롭게 달라진 플로이테크코스</S.Title>
                        <S.SubText>플로이 테크 코스는 IT 비영리 단체 ‘플로이’에서 운영하는</S.SubText>
                        <S.SubText>1:1 맞춤형 멘토링 스터디 프로그램입니다.</S.SubText>
                    </S.Description>
                    <S.SlideBox>
                        <S.Slide>
                          <S.Img src={MainImg} alt={'Icon'} width={'100%'}/>
                        </S.Slide>


                        {/*<S.BtnBox>*/}
                        {/*    <S.ArrowBtn onClick={()=>{prevSlide()}}>*/}
                        {/*        <img src={ArrowLeft} alt={'arrow'} />*/}
                        {/*    </S.ArrowBtn>*/}
                        {/*    <S.Circle $index = {1} $index2 = {5} $ImgIndex = {imgIdx}/>*/}
                        {/*    <S.Circle $index = {2} $ImgIndex = {imgIdx}/>*/}
                        {/*    <S.Circle $index = {3} $ImgIndex = {imgIdx}/>*/}
                        {/*    <S.Circle $index = {4} $index2 = {0} $ImgIndex = {imgIdx}/>*/}
                        {/*    <S.ArrowBtn onClick={()=>{nextSlide()}}>*/}
                        {/*        <img src={ArrowRight} alt={'arrow'} />*/}
                        {/*    </S.ArrowBtn>*/}
                        {/*</S.BtnBox>*/}
                    </S.SlideBox>

                </S.Section>
              <S.BroadCastContainer>
                {broadcast && broadcast.map((item) => (
                  <S.BroadCast key={item.id} onClick={() => {
                    navigate(`/broadcast/detail/${item.id}`)
                  }}>
                    {item.date === "2023-01-01" && <S.New>New</S.New>}
                    <div>
                      <h3>
                        {item.title.length > 16
                          ? `${item.title.slice(0, 16)}...`
                          : item.title}
                      </h3>
                    </div>
                    <p>
                      {item.content.length > 18
                        ? `${item.content.slice(0, 18)}...`
                        : item.content}
                    </p>
                    <p>{item.date}</p>
                  </S.BroadCast>
                ))}
              </S.BroadCastContainer>
            </S.Wrap>
        </S.FirstContainer>
    )
}