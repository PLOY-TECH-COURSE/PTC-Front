import * as S from './style.jsx'
import Dropdown from "../../dropdown/index.jsx";
import {useEffect, useRef, useState} from "react";
import ImgGray from '../../../assets/write/ImgGray.svg'

export default function WriteModal({setIsModal}){
    const fileRef = useRef(null);
    const item = [
        "깃허브",
        "HTML",
        "CSS",
        "Javascript",
        "알고리즘",
        "서버"
    ]
    const [isOpen, setIsOpen] = useState(false);
    const [selectItem, setSelectItem] = useState("카테고리");
    const [img, setImg] = useState("");

    const changeFile = (event) => {
        const reader = new FileReader();
        const file = event.target.files[0];

        if (file) {
            reader.readAsDataURL(file);
            reader.onloadend = () => {
                const allowedImageTypes = ["image/jpeg", "image/png", "image/jpg"];
                if (!allowedImageTypes.includes(file.type)) {
                    alert("이미지 파일만 업로드할 수 있습니다. (jpg, png, jpeg)");
                    return;
                }
                setImg(reader.result);
                event.target.value = "";
            };
        }
    };

    useEffect(() => {
        console.log("이건 useEffct임", fileRef.current);
    }, [fileRef.current]);
    return(
        <S.Black onClick={()=>setIsModal(false)}>
            <S.Content onClick={(e) => e.stopPropagation()}>
                {isOpen && <S.CloseDropdown onClick={() => setIsOpen(false)}/>}
                <Dropdown item={item} isOpen={isOpen} name={selectItem} change={(event) => setSelectItem(event)} click={() => setIsOpen(!isOpen)}/>
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
                    <S.Btn $Success={true}>등록</S.Btn>
                </S.BtnBox>
            </S.Content>
        </S.Black>
    )
}