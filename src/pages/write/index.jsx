import * as S from "./style.jsx";
import Logo from '../../assets/Logo.svg'
import {useNavigate} from "react-router-dom";
import {useState, useRef, useEffect} from "react";
import UnderLine from '../../assets/write/underline.svg'
import CancelLine from '../../assets/write/cancelline.svg';
import Bold from '../../assets/write/bold.svg';
import Italic from '../../assets/write/italic.svg';
import Img from '../../assets/write/img.svg';
import UnderlineGray from '../../assets/write/underlineGray.svg'
import BoldGray from '../../assets/write/boldGray.svg'
import ItalicGray from '../../assets/write/italicGray.svg'
import ImgGray from '../../assets/write/imgGraymini.svg'
import CancelLineGray from '../../assets/write/cancellineGray.svg';
import {useRecoilState} from "recoil";
import {modalAtom} from "../../recoil/modalAtom.js";
import WriteModal from "../../components/modal/write/index.jsx";
import makeDocument from "../../utils/makeDocument.jsx";
import {uploadImg} from "../../api/write.js";

export default function Write(){
    const navigate = useNavigate()
    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');
    const [isModal, setIsModal] = useRecoilState(modalAtom);
    const containerRef = useRef(null);
    const contentRef = useRef(null);
    const [bold, setBold] = useState(true);
    const [italic, setItalic] = useState(true);
    const [under, setUnder] = useState(true);
    const [cancel, setCancel] = useState(true);
    const [img, setImg] = useState(true);

    const addText = (num)=>{
        contentRef.current.focus();
        if(content.length > 0) setContent((prevText) =>prevText + "\n" + num);
        else setContent((prevText) =>prevText + num);
    }

    // 미리보기 아래로 이동하기
    useEffect(() => {
        if (containerRef.current) {
            containerRef.current.scrollTop = containerRef.current.scrollHeight;
        }
    }, [content]);

    // 태그 자동완성
    const smart = (event) => {
        const {value, selectionStart} = event.target;
        let updatedValue = value;

        const match = /<([\w가-힣]+)>$/.exec(value.slice(0, selectionStart));
        if (match) {
            const tagName = match[1];
            const closeTag = `</${tagName}>`;

            const hasCloseTag = value.slice(selectionStart).includes(closeTag);

            if (!hasCloseTag) {
                updatedValue = `${value.slice(0, selectionStart)}${closeTag}${value.slice(selectionStart)}`;
                setTimeout(() => {
                    event.target.selectionStart = event.target.selectionEnd = selectionStart;
                }, 0);
            }

        }
        setContent(updatedValue);
    }

    const fileRef = useRef(null);
    const addImgText = async (img) =>{
        fileRef.current.value = "";
        if(!img) {
            alert("이미지 파일만 업로드할 수 있습니다. (jpg, png, jpeg)");
            return ;
        }
        const data = new FormData();
        data.append('file', img);
        const src = await uploadImg(data);
        if(src){
            addText(`<이미지 src="${src.url}"></이미지>`)
        }else{
            alert("img 등록에 실패")
        }
    }
    const [isOver, setIsOver] = useState(false);

    useEffect(() => {
        const handleDragOver = (e) => {
            e.preventDefault();
            setIsOver(true);
        };

        const handleDragLeave = (e)=>{
            e.preventDefault();
            setIsOver(false);
        }
        const handleDrop = (e) => {
            e.preventDefault();
            setIsOver(false);

            // 드래그된 파일 가져오기
            const files = e.dataTransfer.files;
            if (files.length > 0) {
                const file = files[0]; // 첫 번째 파일 선택
                addImgText(file)
            }
        };
        window.addEventListener('dragover', handleDragOver);
        window.addEventListener('dragleave', handleDragLeave);
        window.addEventListener('drop', handleDrop);

        return () => {
            window.removeEventListener('dragover', handleDragOver);
            window.removeEventListener('dragleave', handleDragLeave);
            window.removeEventListener('drop', handleDrop);
        };
    }, []);
    const [tag, setTag] = useState([""]);
    const [showTag, setShowTag] = useState([]);

    const enterTag = (e)=>{
        if(e.keyCode == 13){
            setShowTag([...showTag, {tag :e.target.value, id : showTag.length+1}]);
            setTag("");
        }

    }
    return(
        <S.WriteContainer>
            {isModal && <WriteModal title = {title} content = {content} tag = {showTag} base64 = {makeBase64}  setIsModal={()=>setIsModal()} />}
            {isOver && <S.DragBox/>}
            <S.Header>
                <img style ={{cursor:"pointer"}} onClick={()=>navigate('/')} src={Logo} alt={"logo"} width={300}/>
                <S.BtnBox>
                    <S.Btn onClick={()=>navigate(-1)} $Success = {false} >돌아가기</S.Btn>
                    <S.Btn onClick={()=>{
                        if(title.length === 0 || content.length === 0){
                            alert('제목와 내용을 입력해주세요.');
                            return;
                        }
                        setIsModal(true)
                    }}  $Success = {true} >등록하기</S.Btn>
                </S.BtnBox>
            </S.Header>
            <S.Main>
                <S.Section>
                    <S.TitleInput
                        placeholder={"제목을 입력해주세요"}
                        value={title}
                        onChange={(e)=>setTitle(e.target.value)}
                        spellCheck="false"
                    />
                    <S.TagBox>
                        {showTag.length > 0 &&
                            showTag.map((item) => (
                                <S.TagOut onClick={()=>setShowTag(showTag.filter((tag) => tag.id !== item.id))} key={item.id}>#{item.tag}</S.TagOut>  // 각 item을 p 태그로 출력
                            ))
                        }
                        <S.TagInputBox>
                            <p>#</p>
                            <S.Tag spellCheck={"false"} type="text" placeholder="태그를 입력해주세요" value={tag} onChange={(e)=>setTag(e.target.value)} onKeyDown={(e)=>enterTag(e)}/>
                        </S.TagInputBox>
                    </S.TagBox>
                    <S.ToolBar>
                        <S.ToolBox>
                            <S.Function onClick={()=>addText("<제목1></제목1>")}>h1</S.Function>
                            <S.Function onClick={()=>addText("<제목2></제목2>")}>h2</S.Function>
                            <S.Function onClick={()=>addText("<제목3></제목3>")}>h3</S.Function>
                            <S.Function onClick={()=>addText("<제목4></제목4>")}>h4</S.Function>
                        </S.ToolBox>
                        <S.Function $not = {true}>|</S.Function>
                        <S.ToolBox>
                            <S.Function
                                onClick={()=>addText("<강조></강조>")}
                                onMouseEnter={()=>setBold(false)}
                                onMouseLeave={()=>setBold(true)}
                            >
                                <img src={bold ? BoldGray : Bold} alt={'Bold'} width={"100%"} />
                            </S.Function>
                            <S.Function
                                onClick={()=>addText("<기울임></기울임>")}
                                onMouseEnter={()=>setItalic(false)}
                                onMouseLeave={()=>setItalic(true)}
                            >
                                <img src={italic ? ItalicGray : Italic} alt={'Italic'} width={"100%"} />
                            </S.Function>
                            <S.Function
                                onClick={()=>addText("<취소선></취소선>")}
                                onMouseEnter={()=>setCancel(false)}
                                onMouseLeave={()=>setCancel(true)}
                            >
                                <img src={cancel ? CancelLineGray : CancelLine} alt={'Cancel'} width={"100%"} />
                            </S.Function>
                            <S.Function
                                onClick={()=>addText("<밑줄></밑줄>")}
                                onMouseEnter={()=>setUnder(false)}
                                onMouseLeave={()=>setUnder(true)}
                            >
                                <img src={under ? UnderlineGray : UnderLine} alt={'Under'} width={"100%"} />
                            </S.Function>
                        </S.ToolBox>
                        <S.Function $not = {true} >|</S.Function>
                        <S.ToolBox>
                            <S.Function
                                onMouseEnter={()=>setImg(false)}
                                onMouseLeave={()=>setImg(true)}
                                onClick={()=>fileRef.current.click()}
                            >
                                <img src={img ? ImgGray : Img} alt={'img'} width={"100%"} />
                            </S.Function>
                            <S.Function onClick={()=>addText("<줄></줄>")}>hr</S.Function>
                        </S.ToolBox>
                    </S.ToolBar>
                    <S.ContentInput
                        placeholder={"내용을 입력해주세요"}
                        value={content}
                        ref={contentRef}
                        onChange={(e)=>{
                            setContent(e.target.value)
                            smart(e);
                        }}
                        spellCheck="false"
                    />
                </S.Section>
                <S.Section>
                    <S.Title>{title}</S.Title>
                    <S.Content ref={containerRef}>{makeDocument(content)}</S.Content>
                </S.Section>
            </S.Main>
            <input ref={fileRef} type={"file"} style={{display: "none"}} onChange={(e)=> {
                addImgText(e.target.files[0])
            }} />
        </S.WriteContainer>
    )
}
