import * as S from './style.jsx'
import {useRef, useState} from "react";
import ImgGray from '../../../assets/write/ImgGray.svg'
import {uploadImg, postDocument, postBroad, patchDocument, patchBroad} from "../../../api/write.js";
import {useNavigate} from "react-router-dom";
import {authAtom} from '../../../recoil/authAtom.js'
import {useRecoilValue} from "recoil";

export default function WriteModal({title, tag, content, setIsModal}){
    const fileRef = useRef(null);
    const [isBroad, setIsBroad] = useState(false);
    const [img, setImg] = useState("");
    const {role} = useRecoilValue(authAtom);
    const [intro, setIntro] = useState('');

    const navigate = useNavigate();
    const changeFile = async (event) => {
        const allowedImageTypes = ["image/jpeg", "image/png", "image/jpg"];
        if (!allowedImageTypes.includes(event.target.files[0].type)) {
            alert("이미지 파일만 업로드할 수 있습니다. (jpg, png, jpeg)");
            return;
        }

        const file = event.target.files[0]
        const reader = new FileReader();
        reader.readAsDataURL(file);

        reader.onload = () => {
            setImg(reader.result);
        };
        event.target.value = "";
        const data = new FormData();
        data.append("file", file);
        const upload = async () => {
            const res = await uploadImg(data);
            if(res){
                setImg(res.url);
            }
        }
        await upload()
    };
    return(
        <S.Black onClick={()=>setIsModal(false)}>
            <S.Content onClick={(e) => e.stopPropagation()}>
                <S.Broad>
                    <input type={'checkbox'} value={isBroad}  onChange={()=>{
                        setIsBroad(!isBroad)
                    }}/>  공지사항
                </S.Broad>
                {role === "ROLE_ADMIN" &&
                    <S.Broad>
                        <input type={'checkbox'} value={isBroad}  onChange={()=>{
                            setIsBroad(!isBroad)
                        }}/>  공지사항
                    </S.Broad>}
                <S.ImgUploadBox $Img={img} onClick={()=>{if(fileRef.current) fileRef.current.click()}}>
                    {img ? <S.SelectImg src={img} alt={"img"} /> :
                        <>
                            <img src={ImgGray} alt={"ImgGray"} />
                            <S.UploadContent>
                                <p>썸네일용 이미지를 삽입해주세요</p>
                                <S.Btn>이미지 업로드</S.Btn>
                            </S.UploadContent>
                        </>
                    }
                    <input ref={fileRef} type={"file"} onChange={(event)=>changeFile(event)} style={{display: "none"}} />
                </S.ImgUploadBox>
                <S.Textarea value={intro} onChange={e=>setIntro(e.target.value)} placeholder={"글에대한 설명을 입력해주세요"} />
                <S.BtnBox>
                    <S.Btn onClick={()=>setIsModal(false)} $Success={false}>취소</S.Btn>
                    <S.Btn $Success={true} onClick={async ()=>{
                        if(isBroad){
                            if(await postBroad(title, content, tag.map(item=>item.tag), img, intro)){
                                navigate('/broadcast');
                            }
                        }
                        else if(await postDocument(title, content, tag.map((item) => item.tag), img, intro)){
                            navigate('/postList');
                        }
                    }}>등록</S.Btn>
                </S.BtnBox>
            </S.Content>
        </S.Black>
    )
}