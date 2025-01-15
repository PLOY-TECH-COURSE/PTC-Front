import styled, {keyframes} from 'styled-components';
import X from '../../../assets/xmark.svg'

export default function HeaderModal({setIsModal, isModal}){
    return(
        <Black onClick={()=>setIsModal(false)}>
            <Box isOpen = {isModal} onClick={(e) => e.stopPropagation()}>
                <Img >
                    <img onClick={()=>setIsModal(false)} src={X} alt={'xicon'} />
                </Img>
                <Nav onClick={()=>alert('아직 준비중입니다!')}>로그인</Nav>
                <Nav onClick={()=>alert('아직 준비중입니다!')}>홈</Nav>
                <Nav onClick={()=>alert('아직 준비중입니다!')}>글목록</Nav>
                <Nav onClick={()=>alert('아직 준비중입니다!')}>공지사항</Nav>

            </Box>
        </Black>
    )
}

const slideIn = keyframes`
  from {
    transform: translateX(100%);
  }
  to {
    transform: translateX(0);
  }
`;

const slideOut = keyframes`
  from {
    transform: translateX(0);
  }
  to {
    transform: translateX(100%);
  }
`;
export const Black = styled.div`
    width: 100%;
    height: 100vh;
    position: absolute;
    top: 0;
    left: 0;
    display: flex;
    align-items: center;
    justify-content: flex-end;
    background: rgb(0,0,0,0.4);
    z-index: 10;
`
export const Box = styled.main`
    width: 200px;
    height: 100%;
    background: white;
    padding: 30px 0;
    animation: ${({ isOpen }) => (isOpen ? slideIn : slideOut)} 0.5s ease forwards;
`
export const Nav = styled.div`
    width: 100%;
    padding: 20px 25px;
    font-size: 18px;
    font-weight: 400;
    background: white;
    border-bottom: 1px solid #EDEDED;
    cursor: pointer;
    
    &:hover {
        background: #f5f5f5;
    }

`
export const Img = styled.div`
    width: 100%;
    padding: 5px 25px;
    background: white;
    display: flex;
    justify-content: flex-end;
    cursor: pointer;
`