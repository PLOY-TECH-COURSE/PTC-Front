import * as S from "./style.jsx";
import Logo from '../../assets/Logo.svg'
import {useNavigate, useLocation} from "react-router-dom";
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
import CodeBlack from '../../assets/write/codeBlack.svg';
import CodeGray from '../../assets/write/codeGray.svg';

export default function Write(){
    const navigate = useNavigate()
    const location = useLocation();
    const data = location.state;
    const [title, setTitle] = useState(data?.title || '');
    const [content, setContent] = useState(data?.content || '');
    const [isModal, setIsModal] = useRecoilState(modalAtom);
    const containerRef = useRef(null);
    const contentRef = useRef(null);
    const [bold, setBold] = useState(true);
    const [italic, setItalic] = useState(true);
    const [under, setUnder] = useState(true);
    const [cancel, setCancel] = useState(true);
    const [code, setCode] = useState(true);
    const [img, setImg] = useState(true);

    const addText = (num, position)=>{
        if(content.length > 0) setContent((prevText) =>prevText + "\n" + num);
        else setContent((prevText) =>prevText + num);
        setTimeout(()=>{
            if(content.length){
                contentRef.current.focus();
                contentRef.current.setSelectionRange(position, position);
            }
            else{
                contentRef.current.focus();
                contentRef.current.setSelectionRange(position-1, position-1);
            }
        }, 0)
    }
    const handleInput = (e) => {
        if (!contentRef.current) return;
        const newText = e.target.value;
        if (newText.slice(-1) !== content.slice(-1)) {
            containerRef.current.scrollTop = contentRef.current.scrollHeight;
        }
        setContent(e.target.value)
        smart(e);
    }

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
        useEffect(() => {
            const temp = JSON.parse(localStorage.getItem('temporary'));
            if(temp){
                if(confirm('현재 임시저장되어있는 데이터가 있습니다. 불러오시겠습니까?\n 취소 시 데이터는 사라집니다.')){
                    setTitle(temp.title)
                    setContent(temp.content)
                    if(temp.tag){
                        setShowTag(temp.tag);
                    }
                }
                else{
                    localStorage.removeItem('temporary');
                }
               
            }
            if(data?.hash_tag.length > 0){
                const newTag = data.hash_tag.map((item, idx)=>{
                    return {tag : item, id : idx}
                });
                setShowTag(newTag);
            }
        }, []);
        const enterTag = (e)=>{
            if(e.keyCode === 13){
                setShowTag([...showTag, {tag :e.target.value, id : showTag.length+1}]);
                setTag("");
            }
        }

        const handleDown = (e)=>{
            if(e.key === 'Tab'){
                e.preventDefault();
                const textarea = contentRef.current;
                const start = textarea.selectionStart;
                const end = textarea.selectionEnd;

                // 현재 커서 위치에 Tab(4칸 공백) 삽입
                const value = textarea.value;
                textarea.value = value.substring(0, start) + "    " + value.substring(end);

                // 커서를 Tab이 삽입된 위치 뒤로 이동
                textarea.setSelectionRange(start + 4, start + 4);
            }
        }
        const titleRef = useRef(title);
        const contentValueRef = useRef(content);
        const tagRef = useRef(showTag);

        // 매번 최신 값 유지
        useEffect(() => { titleRef.current = title }, [title]);
        useEffect(() => { contentValueRef.current = content }, [content]);
        useEffect(() => { tagRef.current = showTag }, [showTag]);
        const [showTemp, setShowTemp] = useState(false);
        useEffect(() => {
            const interval = setInterval(() => {
            if (contentValueRef.current.trim()) {
                localStorage.setItem('temporary', JSON.stringify({
                title: titleRef.current,
                content: contentValueRef.current,
                tag: tagRef.current,
                }));
                setShowTemp(true);
                setTimeout(()=>{
                    setShowTemp(false);
                }, 2900);
            }
            }, 60000);

            return () => clearInterval(interval);
        }, []); 
        return(
            <S.WriteContainer>
                {showTemp && <S.ShowTemp $status = {showTemp} >임시저장완료</S.ShowTemp>}
                {isModal && <WriteModal data = {data} title = {title} content = {content} tag = {showTag} setIsModal={()=>setIsModal()} />}
                {isOver && <S.DragBox/>}
                <S.Header>
                    <img style ={{cursor:"pointer"}} onClick={()=>navigate('/')} src={Logo} alt={"logo"} width={300}/>
                    <S.BtnBox>
                        <S.Btn onClick={()=>navigate(-1)} $Success = {false} >돌아가기</S.Btn>
                        <S.Btn onClick={()=>{
                            if(title.length === 0 || content.length === 0){
                                alert('제목와 내용을 입력해주세요.');
                                return;
                            }else if(title.length > 15){
                                alert('제목은 15글자 이내로 가능합니다.');
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
                                <S.Function onClick={()=>addText("<제목1></제목1>", content.length + 6)}>h1</S.Function>
                                <S.Function onClick={()=>addText("<제목2></제목2>", content.length + 6)}>h2</S.Function>
                                <S.Function onClick={()=>addText("<제목3></제목3>", content.length + 6)}>h3</S.Function>
                                <S.Function onClick={()=>addText("<제목4></제목4>", content.length + 6)}>h4</S.Function>
                            </S.ToolBox>
                            <S.Function $not = {true}>|</S.Function>
                            <S.ToolBox>
                                <S.Function
                                    onClick={()=>addText("<강조></강조>", content.length + 5)}
                                    onMouseEnter={()=>setBold(false)}
                                    onMouseLeave={()=>setBold(true)}
                                >
                                    <img src={bold ? BoldGray : Bold} alt={'Bold'} width={"100%"} />
                                </S.Function>
                                <S.Function
                                    onClick={()=>addText("<기울임></기울임>", content.length + 6)}
                                    onMouseEnter={()=>setItalic(false)}
                                    onMouseLeave={()=>setItalic(true)}
                                >
                                    <img src={italic ? ItalicGray : Italic} alt={'Italic'} width={"100%"} />
                                </S.Function>
                                <S.Function
                                    onClick={()=>addText("<취소선></취소선>", content.length + 6)}
                                    onMouseEnter={()=>setCancel(false)}
                                    onMouseLeave={()=>setCancel(true)}
                                >
                                    <img src={cancel ? CancelLineGray : CancelLine} alt={'Cancel'} width={"100%"} />
                                </S.Function>
                                <S.Function
                                    onClick={()=>addText("<밑줄></밑줄>", content.length + 5)}
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
                                <S.Function onClick={()=>addText("<줄></줄>", content.length + 8)}>hr</S.Function>
                                <S.Function
                                    onClick={()=>addText("<코드></코드>", content.length + 5)}
                                    onMouseEnter={()=>setCode(false)}
                                    onMouseLeave={()=>setCode(true)}
                                >
                                    <img src={code ? CodeGray : CodeBlack} alt={'Code'} width={"90%"} />
                                </S.Function>
                            </S.ToolBox>
                        </S.ToolBar>
                        <S.ContentInput
                            onKeyDown={(e)=>handleDown(e)}
                            placeholder={"내용을 입력해주세요"}
                            value={content}
                            ref={contentRef}
                            onChange={(e)=>{
                                handleInput(e)
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