import {useEffect, useRef, useState} from "react";
import First from "../../assets/write/1st.svg"
import Second from "../../assets/write/2nd.svg"
import Third from "../../assets/write/3rd.svg"
import FirstSound from "../../assets/document/first.m4a"
import SecondThirdSound from "../../assets/document/second_third.m4a"
import DuguDugu from "../../assets/document/dugudugu.m4a"
import * as S from "./style.jsx"
import Congratulation from "./RottieCongraturation";

export default function Result({ranking}) {
  const [isShow, setIsShow] = useState([false, false, false]);
  const [isCongratulation, setIsCongratulation] = useState(false);
  const [isEnd, setIsEnd] = useState(false);
  function parseRanking(str) {
    const regex = /(\d+)등\s*:\s*(\S+)\s+(https?:\/\/\S+?)(?=\d+등|$)/g;
    const result = [];
    let match;

    while ((match = regex.exec(str)) !== null) {
      const [, rank, name, img] = match;
      result.push({
        rank: Number(rank),
        name,
        img
      });
    }

    return result;
  }

  const [rank, setRank] = useState(parseRanking(ranking));
  useEffect(() => {
    setRank(parseRanking(ranking));
  }, [ranking]);
  const imgSize = {
    1 : 120,
    2 : 110,
    3 : 100
  }
  const fontSize = {
    1 : 20,
    2 : 18,
    3 : 16
  }
  const animation={
    1 : 0.8,
    2 : 0.9,
    3 : 1
  }




  const audioRef = useRef(null);
  const secondThirdSoundRef = useRef(null);
  const FirstSoundRef = useRef(null);

  const playFirstSound = () => {
    FirstSoundRef.current.play();
  };
  const [isText, setIsText] = useState([true, false, false]);
  const text = ["3등은~?", "그럼 2등은~?", "과연 1등은~?"]
  useEffect(() => {
    const tryPlay = async (number) => {
      try {
        await audioRef.current.play();
        const newText = [false, false, false];
        newText[number] = true;
        setIsText(newText);
      } catch (err) {
        console.warn("브라우저가 자동재생을 차단했습니다:", err);
      }
    };

    tryPlay(0);

    setTimeout(() => {
      setIsShow([true, false, false]);
      secondThirdSoundRef.current.play();
      setTimeout(() => {
        tryPlay(1);
        setIsShow([false, false, false]);
        setTimeout(() => {
          setIsShow([false, true, false]);
          secondThirdSoundRef.current.play();
          setTimeout(() => {
            tryPlay(2);
            setIsShow([false, false, false]);
            setTimeout(()=>{
              playFirstSound();
              setIsShow([false, false, true])
              setIsCongratulation(true);
              setTimeout(() => {
                setIsEnd(true);
              }, 5000);
            }, 5000);
          }, 3000);
        }, 5000);
      }, 3000);
    }, 5000);
  }, []);

  return (
    <S.Container>{
      rank.map((item, index) => {
        return (
          <S.Rank $isEnd={isEnd} key={index}>
            <S.ImgBox $rank={imgSize[item.rank]}>
              <img src={item.img} alt={item.name} />
            </S.ImgBox>
            <S.Info>
              <S.Ranking $rank={fontSize[item.rank]}>{item.rank}{item.rank === 1 ? 'st' : item.rank === 2 ? 'nd' : item.rank === 3 ? 'rd' : 'th'}</S.Ranking>
              <S.Name  $rank={fontSize[item.rank]}>{item.name}</S.Name>
            </S.Info>
          </S.Rank>
        )
      })
    }

      <S.Black $isEnd={isEnd}>
        <audio ref={audioRef} src={DuguDugu}/>
        <audio ref={secondThirdSoundRef} src={SecondThirdSound}/>
        <audio ref={FirstSoundRef} src={FirstSound}/>
        <S.CoolSlidingText $isEnd={isText[0]}>3등은~?</S.CoolSlidingText>
        <S.CoolSlidingText $isEnd={isText[1]}>그럼 2등은~?</S.CoolSlidingText>
        <S.CoolSlidingText $isEnd={isText[2]}>과연 1등은~?</S.CoolSlidingText>

        <S.RankAnimation $animation={animation[1]} $rank={isShow[0]}>
          <S.RankImg>
            <img src={Third}/>
          </S.RankImg>
          <S.ImgBoxAnimation>
            <img src={"https://storage.googleapis.com/ploytechcourse-version3/391b0b82-c522-4fd5-9a75-5a1488c21b7e"}/>
          </S.ImgBoxAnimation>
          <S.Name $rank={fontSize[1]}>곽영빈</S.Name>
        </S.RankAnimation>
        <S.RankAnimation $animation={animation[1]} $rank={isShow[1]}>
          <S.RankImg>
            <img src={Second}/>
          </S.RankImg>
          <S.ImgBoxAnimation>
            <img src={"https://storage.googleapis.com/ploytechcourse-version3/391b0b82-c522-4fd5-9a75-5a1488c21b7e"}/>
          </S.ImgBoxAnimation>
          <S.Name $rank={fontSize[1]}>곽영빈</S.Name>
        </S.RankAnimation>
        <S.RankAnimationFirst $animation={animation[1]} $rank={isShow[2]}>
          <S.RankImg>
            <img src={First}/>
          </S.RankImg>
          <S.ImgBoxAnimation>
            <img src={"https://storage.googleapis.com/ploytechcourse-version3/391b0b82-c522-4fd5-9a75-5a1488c21b7e"}/>
          </S.ImgBoxAnimation>
          <S.Name $rank={fontSize[1]}>곽영빈</S.Name>
        </S.RankAnimationFirst>
        {isCongratulation && <Congratulation/>}
      </S.Black>
    </S.Container>
  )
}