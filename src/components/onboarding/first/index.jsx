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

export default function First(){
    const navigate = useNavigate();
    const auth = useRecoilValue(authAtom);
    const imgList = [MainImg, MainImg2, MainImg3, MainImg4];
    const [imgIdx , setImgIdx] = useState(0);

    useEffect(() => {
        const interval = setInterval(nextSlide, 3000);
        return () => clearInterval(interval);
    }, []);

    const nextSlide = () => {
        setImgIdx((prevIndex) => (prevIndex + 1) % imgList.length);
    };

    const prevSlide = () => {
        setImgIdx((prevIndex) => (prevIndex - 1 + imgList.length) % imgList.length);
    };

    return(
        <S.FirstContainer>
            <S.HeaderBox>
                <Header/>
            </S.HeaderBox>
            <S.Wrap>
                <S.Section>
                    <S.Description>
                        <S.Title>신입생을 위한 선물, 플테코</S.Title>
                        <img src={Logo} alt={"logo"} />
                        <S.SubText>신입생을 위한 첫걸음, 개발 기초부터 협업까지</S.SubText>
                        <S.SubText>신입생 여러분이 헤매지 않도록 친절하게 알려드립니다!</S.SubText>
                        <S.Btn onClick={()=>{
                           if( auth.role === "") navigate('/login');
                           else if( auth.role === "ROLE_USER") navigate('/apply');
                           else alert('아직준비중입니다.');
                        }}>신청하기</S.Btn>
                    </S.Description>
                    <S.SlideBox>
                        <S.Slide>
                            <S.ImgBox $ImgIndex = {imgIdx} >
                                <S.Img src={imgList[0]} alt={'Icon'} width={'100%'}/>
                                <S.Img src={imgList[1]} alt={'Icon'} width={'100%'}/>
                                <S.Img src={imgList[2]} alt={'Icon'} width={'100%'}/>
                                <S.Img src={imgList[3]} alt={'Icon'} width={'100%'}/>
                            </S.ImgBox>
                        </S.Slide>

                        <S.LapTop src={Laptop} alt={'laptop'} />
                        <S.BtnBox>
                            <S.ArrowBtn onClick={()=>{prevSlide()}}>
                                <img src={ArrowLeft} alt={'arrow'} />
                            </S.ArrowBtn>
                            <S.Circle $index = {0} $ImgIndex = {imgIdx}/>
                            <S.Circle $index = {1} $ImgIndex = {imgIdx}/>
                            <S.Circle $index = {2} $ImgIndex = {imgIdx}/>
                            <S.Circle $index = {3} $ImgIndex = {imgIdx}/>
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