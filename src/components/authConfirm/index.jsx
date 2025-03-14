import { useEffect, useState } from "react"
import { Outlet } from "react-router-dom"
import { useRecoilValue } from "recoil";
import styled from "styled-components";
import { authAtom } from "../../recoil/authAtom";

export default function AuthConfirm(){
    const [isCheck, setIsCheck] = useState(false);
    const auth = useRecoilValue(authAtom)
    useEffect(()=>{
        if(auth.role === ''){
            setIsCheck(true);
        }
        console.log(1);
        
    }, [])
    if(isCheck){
        return(
            <Block>
                
            </Block>
        )
    }
    return(
        <Outlet />
    )
}

const Block = styled.div`
    width: 100vw;
    height: 100vh;
    position: fixed;
    top: 0;
    left: 0;

`
