import * as S from './style.jsx';
import {useEffect, useRef, useState} from "react";
import Dohun from '../../../assets/onboarding/team-introduce/dohun.jpg';
import Hyojun from '../../../assets/onboarding/team-introduce/123isi.jpg';
import Taeyoung from '../../../assets/onboarding/team-introduce/noahmik.webp';
import Jemin from '../../../assets/onboarding/team-introduce/jmj732.jpeg';
import Heodongun from '../../../assets/onboarding/team-introduce/heodongun.svg';
import Siwoo from '../../../assets/onboarding/team-introduce/kangsiwoo.png';
import Soeun from '../../../assets/onboarding/team-introduce/soeun823.jpeg'
import Ara from '../../../assets/onboarding/team-introduce/Ara.jpeg';
import Yunchan from '../../../assets/onboarding/team-introduce/yunchan.jpeg';
import Huhon from '../../../assets/onboarding/team-introduce/huhon.jpeg';
import Woorin from '../../../assets/onboarding/team-introduce/woo-rin.webp';
import Joon069 from '../../../assets/onboarding/team-introduce/joon069.jpeg';
import Wjddn0719 from '../../../assets/onboarding/team-introduce/wjddn0719.jpeg';
import Shusbox from '../../../assets/onboarding/team-introduce/shusbox.jpeg';
import Sharkspin from '../../../assets/onboarding/team-introduce/sharkspin.png';
import Ityeri from '../../../assets/onboarding/team-introduce/ityeri.jpeg';
import Hyun731 from '../../../assets/onboarding/team-introduce/Hyun731.jpeg';

export default function TeamIntroduce({isAnimation}){
    const [isGrade, setIsGrade] = useState(4);
    const member = [
        {id : 2, name : '허온', job : 'Backend', git : 'https://github.com/KDev-Huh', bg : Huhon, time : 0.6},
        {id : 3, name : '조재민', job : 'Backend', git : 'https://github.com/jmj732', bg : Jemin, time : 0.7},
        {id : 4, name : '윤도훈', job : 'Frontend', git : 'https://github.com/dohun08', bg : Dohun, time : 0.8},
        {id : 5, name : '이효준', job : 'Frontend', git : 'https://github.com/123isi', bg : Hyojun, time : 0.9},
        {id : 6, name : '조아라', job : 'Frontend', git : 'https://github.com/whdkfk', bg : Ara, time : 1.},
        {id : 7, name : '박소은', job : 'Frontend', git : 'https://github.com/soeun823', bg : Soeun, time : 1.1},
        {id : 1, name : '허동운', job : 'Backend', git : 'https://github.com/heodongun', bg : Heodongun, time : 1.2},
    ]
    const mento = [
        {id : 9, name : '오윤찬', job : 'Backend', git : 'https://github.com/YunChan-Oh', bg : Yunchan, time:0.7},
        {id : 10, name : '한태영', job : 'Backend', git : 'https://github.com/noahmik', bg : Taeyoung, time:0.9},
        {id : 11, name : '강시우', job : 'Frontend', git : 'https://github.com/kangsiwoo', bg : Siwoo, time:1.1},
    ]
  const menty = [
    {id : 12, name : '권길현', git : 'https://github.com/Hyun731', bg : Hyun731, time : 0.6},
    {id : 13, name : '강준영', git : 'https://github.com/joon069', bg : Joon069, time : 0.7},
    {id : 14, name : '이정우', git : 'https://github.com/wjddn0719', bg : Wjddn0719, time : 0.8},
    {id : 15, name : '이우린', git : 'https://github.com/woo-rin', bg : Woorin, time : 0.9},
    {id : 16, name : '진수화', git : 'https://github.com/shusbox', bg : Shusbox, time : 1.},
    {id : 17, name : '조현우', git : 'https://github.com/sharkspin', bg : Sharkspin, time : 1.1},
    {id : 18, name : '곽영빈', git : 'https://github.com/ityeri', bg : Ityeri, time : 1.2},
  ]

    const containerRef = useRef(null);
    const [unBox, setUnBox] = useState([]);
    useEffect(() => {
        if (!containerRef.current) return;
        const children = Array.from(containerRef.current.children);
        let firstOffsetTop = null;
        let count = 0;
        if(unBox.length){
            setUnBox([]);
        }
        setTimeout(()=>{
            children.forEach((child) => {
                if (firstOffsetTop === null) {
                    firstOffsetTop = child.offsetTop;
                }
                if (child.offsetTop === firstOffsetTop) {
                    count++;
                }
            });
            const result = count - (member.length - count);

            if(count < 2) setUnBox(Array(1).fill(0));
            else if(count === 2) setUnBox([0, 0]);
            else if(count === 3) setUnBox([0, 0, 0, 0]);
            else{
                setUnBox(Array(result).fill(0));
            }
        }, 0)
        
    }, [window.innerWidth, isGrade]);
    
    return(
        <S.TeamContainer>
            <S.Wrap>
                <S.Title>
                    <S.BlueText>Team</S.BlueText>
                </S.Title>
                <S.Nav>
                    <S.NavText $color = {isGrade === 3} onClick={()=>setTimeout(()=>setIsGrade(3), 100)}>3기</S.NavText>
                    <S.NavText $color = {isGrade === 4} onClick={()=>setTimeout(()=>setIsGrade(4), 100)}>4기</S.NavText>
                  <S.NavText $color = {isGrade === 5} onClick={()=>setTimeout(()=>setIsGrade(5), 100)}>5기</S.NavText>
                </S.Nav>
                <S.Main ref={containerRef}>
                  {
                    (isGrade === 3 || isGrade === 4 || isGrade === 5) &&
                    (() => {
                      const data = isGrade === 3 ? mento : isGrade === 4 ? member : menty;

                      return data.map((item) => {
                        if (!item.name) return <S.UnBox key={item.id} />;

                        return (
                          <S.Box
                            key={item.id}
                            onClick={() => window.open(item.git)}
                            $time={item.time}
                            $isAnimation={isAnimation}
                            $bg={item.bg}
                          >
                            <img src={item.bg} alt="" />
                            <S.User>
                              <S.Name>{item.name}</S.Name>
                              <S.JobBox>
                                {item.job && <S.Job>{item.job}</S.Job>}
                                <S.Git href={item.git} target="_blank" rel="noopener noreferrer">
                                  Github
                                </S.Git>
                              </S.JobBox>
                            </S.User>
                          </S.Box>
                        );
                      });
                    })()
                  }

                  {
                    unBox.map((item, idx) => {
                      return <S.UnBox key={idx} />;
                    })
                  }
                </S.Main>
            </S.Wrap>
        </S.TeamContainer>
    )
}