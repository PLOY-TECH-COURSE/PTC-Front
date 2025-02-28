import * as S from "./style.jsx";
import Header from '../../header/index.jsx'
import Logo from '../../../assets/Logo.svg';
import Laptop from '../../../assets/onboarding/first/laptop.svg'
import {useNavigate} from "react-router-dom";
import {useRecoilValue} from "recoil";
import {useEffect, useState} from "react";
import {authAtom} from "../../../recoil/authAtom.js";
import MainImg from '../../../assets/onboarding/first/mento2.jpeg'
import MainImg2 from '../../../assets/onboarding/first/mento1.jpeg'
import MainImg3 from '../../../assets/onboarding/first/mento3.jpeg'
import MainImg4 from '../../../assets/onboarding/first/mento4.jpeg'
import ArrowLeft from '../../../assets/onboarding/first/leftArrow.svg'
import ArrowRight from  '../../../assets/onboarding/first/rightArrow.svg'
import {useThrottle} from "../../../hooks/useThrottle.jsx";
import Mail from '../../../assets/onboarding/first/mail.svg'

export default function First(){
    const navigate = useNavigate();
    const auth = useRecoilValue(authAtom);
    const imgList = [MainImg4, MainImg, MainImg2, MainImg3, MainImg4, MainImg];
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

    return(
        <S.FirstContainer>
            <S.HeaderBox>
                <Header/>
            </S.HeaderBox>
            <S.Wrap>
                <S.Section>
                    <S.Description>
                        <S.Title>개발자의 첫걸음, 플테코와 함께</S.Title>
                        <img src={Logo} alt={"logo"} />
                        <S.SubText>플로이 테크 코스는 IT 비영리 단체 ‘플로이’에서 운영하는</S.SubText>
                        <S.SubText>1:1 맞춤형 멘토링 스터디 프로그램입니다.</S.SubText>
                        <S.Btn onClick={()=>{
                           if( auth.role === "") navigate('/login');
                           else if( auth.role === "ROLE_USER") navigate('/apply');
                           else navigate('/write/new');
                        }}>
                            <span>{auth.role === "ROLE_STUDENT" || auth.role === "ROLE_ADMIN" || auth.role === "ROLE_SUPERADMIN" ? "글 작성" : "신청하기"}</span>
                            <S.BtnText $isHalf = {false}>
                                <span>s</span>
                                <span>e</span>
                                <span>n</span>
                                <span>d</span>
                            </S.BtnText>
                            <img src={Mail} alt={'Icon'} />
                            <S.BtnText $isHalf = {true}>
                                <span>s</span>
                                <span>e</span>
                                <span>n</span>
                                <span>d</span>
                            </S.BtnText>
                        </S.Btn>
                    </S.Description>
                    <S.SlideBox>
                        <S.Slide>
                            <S.ImgBox $time = {animation()} $ImgIndex = {imgIdx} >
                                <S.Img src={imgList[0]} alt={'Icon'} width={'100%'}/>
                                <S.Img src={imgList[1]} alt={'Icon'} width={'100%'}/>
                                <S.Img src={imgList[2]} alt={'Icon'} width={'100%'}/>
                                <S.Img src={imgList[3]} alt={'Icon'} width={'100%'}/>
                                <S.Img src={imgList[4]} alt={'Icon'} width={'100%'}/>
                                <S.Img src={imgList[5]} alt={'Icon'} width={'100%'}/>
                            </S.ImgBox>
                        </S.Slide>

                        <S.LapTop src={Laptop} alt={'laptop'} />
                        <S.BtnBox>
                            <S.ArrowBtn onClick={()=>{prevSlide()}}>
                                <img src={ArrowLeft} alt={'arrow'} />
                            </S.ArrowBtn>
                            <S.Circle $index = {1} $index2 = {5} $ImgIndex = {imgIdx}/>
                            <S.Circle $index = {2} $ImgIndex = {imgIdx}/>
                            <S.Circle $index = {3} $ImgIndex = {imgIdx}/>
                            <S.Circle $index = {4} $index2 = {0} $ImgIndex = {imgIdx}/>
                            <S.ArrowBtn onClick={()=>{nextSlide()}}>
                                <img src={ArrowRight} alt={'arrow'} />
                            </S.ArrowBtn>
                        </S.BtnBox>
                    </S.SlideBox>

                </S.Section>
            </S.Wrap>
        </S.FirstContainer>
    )
}