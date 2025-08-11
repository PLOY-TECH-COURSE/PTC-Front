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

  // 들어온 ranking 문자열을 객체로 파싱
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
  const imgSize = {1 : 120, 2 : 110, 3 : 100}
  const fontSize = {1 : 20, 2 : 18,}

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

    const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

    async function playSequence() {
      try {
        await tryPlay(0);

        await delay(5000);
        setIsShow([true, false, false]);
        secondThirdSoundRef.current.play();

        await delay(3000);
        await tryPlay(1);
        setIsShow([false, false, false]);

        await delay(5000);
        setIsShow([false, true, false]);
        secondThirdSoundRef.current.play();

        await delay(3000);
        await tryPlay(2);
        setIsShow([false, false, false]);

        await delay(5000);
        playFirstSound();
        setIsShow([false, false, true]);
        setIsCongratulation(true);

        await delay(5000);
        setIsEnd(true);
      } catch (error) {
        console.error(error);
      }
    }
    playSequence()
  }, []);

  return (
    <S.Container>
      {/*글자 구역*/}
      {rank.map((item, index) => {
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
      })}

    {/*에니메이션 구역*/}
      <S.Black $isEnd={isEnd}>
        {/*따단 오디오, 텍스트 에니메이션*/}
        <audio ref={audioRef} src={DuguDugu}/>
        <audio ref={secondThirdSoundRef} src={SecondThirdSound}/>
        <audio ref={FirstSoundRef} src={FirstSound}/>
        <S.CoolSlidingText $isEnd={isText[0]}>3등은~?</S.CoolSlidingText>
        <S.CoolSlidingText $isEnd={isText[1]}>그럼 2등은~?</S.CoolSlidingText>
        <S.CoolSlidingText $isEnd={isText[2]}>과연 1등은~?</S.CoolSlidingText>

        {rank && rank.map((item, idx)=>{
          return(
            <S.RankAnimation $ranking={idx} $rank={isShow[idx]}>
              <S.RankImg>
                <img src={ idx === 0 ? Third : idx === 1 ? Second : First}/>
              </S.RankImg>
              <S.ImgBoxAnimation>
                <img src={item.img}/>
              </S.ImgBoxAnimation>
              <S.Name $rank={fontSize[1]}>{item.name}</S.Name>
            </S.RankAnimation>
          )
        })}
        {isCongratulation && <Congratulation/>}
      </S.Black>
    </S.Container>
  )
}