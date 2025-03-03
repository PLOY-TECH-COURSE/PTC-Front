import * as S from './style.jsx'
import {useState} from "react";
import {useNavigate, useParams} from "react-router-dom";
import {withdrawUser} from "../../../api/mypage.js";
import {useRecoilState} from "recoil";
import {authAtom} from "../../../recoil/authAtom.js";

export default function Confirm({setIsModal}) {
    const navigate = useNavigate();
    const [id, setId] = useState('');
    const { userId } = useParams();
    const [_, setUser] = useRecoilState(authAtom)
    const handleDelete = async () => {
        if(id !== userId){
            alert('아이디가 일치하지 않습니다.')
            return ;
        }
        const status = await withdrawUser();
        if(status === 200){
            alert('계정을 삭제하었습니다.')
            setIsModal(false)
            localStorage.clear();
            setUser({
                role: '',
                uid: ''
            })
            navigate('/');
        }
        else{
            alert(`계정을 삭제하는 중에 문제가 발생하었습니다. status : ${status}`)
        }
    }
    return (
        <S.Black onClick={()=>setIsModal(false)}>
            <S.Content onClick={(e) => e.stopPropagation()}>
                <h1>계정삭제</h1>
                <h2>{userId}</h2>
                <S.InputBox>
                    <input type={'text'} alt={'id'} value={id} onChange={e=>setId(e.target.value)} />
                    <p>계정을 삭제하시려면 아이디를 입력해주세요</p>
                </S.InputBox>
                <S.Btn $color = {userId === id} onClick={()=>handleDelete()}>삭제</S.Btn>
            </S.Content>
        </S.Black>
    )
}