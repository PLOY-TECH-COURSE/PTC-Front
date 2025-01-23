import * as S from './style.jsx';
import {useEffect, useState} from "react";
import Git from './git';
import HTML from './html';
import CSS from './css';
import JS from './js';
import Algorithm from './algorithm';
import Server from './server';

export default function ModalOnboarding({idx, setIsModal}){
    const [list, setList] = useState([
        false, false, false, false, false, false
    ])
    useEffect(()=>{
        const newlist = [false, false, false, false, false, false];
        newlist[idx] = true;
        setList(newlist);
    }, []);

    return(
        <S.Black onClick={()=>setIsModal(false)}>
            {
                list[0] ?
                    <Git /> :
                list[1] ?
                    <HTML /> :
                list[2] ?
                    <CSS /> :
                list[3] ?
                    <JS /> :
                list[4] ?
                    <Algorithm /> :
                list[5] ?
                    <Server /> :
                    null
            }
        </S.Black>
    )
}