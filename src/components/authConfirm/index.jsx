import { useEffect, useState } from "react"
import { Outlet } from "react-router-dom"
import { useRecoilValue } from "recoil";
import styled from "styled-components";
import { authAtom } from "../../recoil/authAtom";
import Logo from '../../assets/Logo.svg'

export default function AuthConfirm({role}){
    const [isCheck, setIsCheck] = useState(false);
    const auth = useRecoilValue(authAtom)
    useEffect(()=>{
        if(auth.role === ''){
            setIsCheck(true);
        }
        else if(role !== auth.role){
            setIsCheck(true);
        }
    }, [])
    if(isCheck){
        return(
            <Block>
                <img src={Logo} alt="logo" />
                <h1>접근불가</h1>
                <h3>권한이 부족합니다</h3>
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
    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: center;
    gap: 20px;
    & > h3{
        color: gray;
    }
`
