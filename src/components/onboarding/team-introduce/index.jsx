import * as S from './style.jsx';
import {useState} from "react";
import Dohun from '../../../assets/onboarding/team-introduce/dohun.jpg';
import Hyojun from '../../../assets/onboarding/team-introduce/123isi.jpg';
import Taeyoung from '../../../assets/onboarding/team-introduce/noahmik.webp';
import Jemin from '../../../assets/onboarding/team-introduce/jmj732.png';
import Heodongun from '../../../assets/onboarding/team-introduce/heodongun.svg';
import Siwoo from '../../../assets/onboarding/team-introduce/kangsiwoo.png';
import Soeun from '../../../assets/onboarding/team-introduce/soeun823.jpeg'
import Ara from '../../../assets/onboarding/team-introduce/Ara.jpeg';
import Yunchan from '../../../assets/onboarding/team-introduce/yunchan.jpeg';
import Huhon from '../../../assets/onboarding/team-introduce/huhon.jpeg';

export default function TeamIntroduce({isAnimation}){
    console.log(isAnimation)
    const [isGrade, setIsGrade] = useState(true);
    const member = [
        {id : 2, name : '허온', job : 'Backend', git : 'https://github.com/KDev-Huh', bg : Huhon, time : 0.6},
        {id : 3, name : '조재민', job : 'Backend', git : 'https://github.com/jmj732', bg : Jemin, time : 0.7},
        {id : 4, name : '윤도훈', job : 'Frontend', git : 'https://github.com/dohun08', bg : Dohun, time : 0.8},
        {id : 5, name : '이효준', job : 'Frontend', git : 'https://github.com/123isi', bg : Hyojun, time : 0.9},
        {id : 6, name : '조아라', job : 'Frontend', git : 'https://github.com/whdkfk', bg : Ara, time : 1.},
        {id : 7, name : '박소은', job : 'Frontend', git : 'https://github.com/soeun823', bg : Soeun, time : 1.1},
        {id : 1, name : '허동운', job : 'Backend', git : 'https://github.com/heodongun', bg : Heodongun, time : 1.2},
        {id : 8, name : '', job : '', git : '', bg : ''},
    ]
    const mento = [
        {id : 9, name : '오윤찬', job : 'Backend', git : 'https://github.com/YunChan-Oh', bg : Yunchan, time:0.7},
        {id : 10, name : '한태영', job : 'Backend', git : 'https://github.com/noahmik', bg : Taeyoung, time:0.9},
        {id : 11, name : '강시우', job : 'Frontend', git : 'https://github.com/kangsiwoo', bg : Siwoo, time:1.1},
        {id : 12, name : '', job : '', git : '', bg : ''},
        {id : 13, name : '', job : '', git : '', bg : ''},
        {id : 14, name : '', job : '', git : '', bg : ''},
        {id : 15, name : '', job : '', git : '', bg : ''},
        {id : 16, name : '', job : '', git : '', bg : ''},
    ]
    return(
        <S.TeamContainer>
            <S.Wrap>
                <S.Title>
                    <S.BlueText>Team</S.BlueText>
                </S.Title>
                <S.Nav>
                    <S.NavText $color = {!isGrade} onClick={()=>setTimeout(()=>setIsGrade(false), 100)}>3기</S.NavText>
                    <S.NavText $color = {isGrade} onClick={()=>setTimeout(()=>setIsGrade(true), 100)}>4기</S.NavText>
                </S.Nav>
                <S.Main>
                    {isGrade ?
                        member.map((item)=>{
                                if(item.name){
                                    return(
                                        <S.Box $time = {item.time} $isAnimation = {isAnimation} key={item.id}  $bg={item.bg}>
                                            <S.User>
                                                <S.Name>{item.name}</S.Name>
                                                <S.JobBox>
                                                    <S.Job>{item.job}</S.Job>
                                                    <S.Git href={item.git} target="_blank" rel="noopener noreferrer">Github</S.Git>
                                                </S.JobBox>
                                            </S.User>
                                        </S.Box>
                                    )
                                }
                                else return (<S.UnBox key={item.id} />)
                            }) :
                        mento.map((item)=>{
                            if(item.name){
                                return(
                                    <S.Box $time = {item.time} $isAnimation = {isAnimation} key={item.id}  $bg={item.bg}>
                                        <S.User>
                                            <S.Name>{item.name}</S.Name>
                                            <S.JobBox>
                                                <S.Job>{item.job}</S.Job>
                                                <S.Git href={item.git} target="_blank" rel="noopener noreferrer">Github</S.Git>
                                            </S.JobBox>
                                        </S.User>
                                    </S.Box>
                                )
                            }
                            else return (<S.UnBox key={item.id} />)
                        })
                    }

                </S.Main>
            </S.Wrap>
        </S.TeamContainer>
    )
}