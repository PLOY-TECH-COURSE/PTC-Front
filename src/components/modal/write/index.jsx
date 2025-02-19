import * as S from './style.jsx'
import {useRef, useState} from "react";
import ImgGray from '../../../assets/write/ImgGray.svg'
import {uploadImg, postDocument} from "../../../api/write.js";
import {useNavigate} from "react-router-dom";

export default function WriteModal({title, tag, content, setIsModal, base64}){
    const fileRef = useRef(null);
    const [isOpen, setIsOpen] = useState(false);
    const [img, setImg] = useState("");

    const navigate = useNavigate();
    const changeFile = async (event) => {
        const allowedImageTypes = ["image/jpeg", "image/png", "image/jpg"];
        if (!allowedImageTypes.includes(event.target.files[0].type)) {
            alert("이미지 파일만 업로드할 수 있습니다. (jpg, png, jpeg)");
            return;
        }

        const file = await base64(event.target.files[0])
        setImg(file);
        event.target.value = "";
        const upload = async () => {
            const res = await uploadImg(file);
            if(res){
                setImg(res);
                return true;
            }
            return false;
        }
        await upload()
    };

    return(
        <S.Black onClick={()=>setIsModal(false)}>
            <S.Content onClick={(e) => e.stopPropagation()}>
                {isOpen && <S.CloseDropdown onClick={() => setIsOpen(false)}/>}
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
                <S.Textarea placeholder={"글에대한 설명을 입력해주세요"} />
                <S.BtnBox>
                    <S.Btn onClick={()=>setIsModal(false)} $Success={false}>취소</S.Btn>
                    <S.Btn $Success={true} onClick={async ()=>{
                        if(await postDocument(title, content, tag, img, content)){
                            navigate('/postList');
                        }
                    }}>등록</S.Btn>
                </S.BtnBox>
            </S.Content>
        </S.Black>
    )
}