import styled from 'styled-components';

export const userBox = styled.div`
	@import url("https://cdn.jsdelivr.net/gh/orioncactus/pretendard@v1.3.9/dist/web/variable/pretendardvariable.min.css");
	border: 2px solid #D1D1D1;
	border-radius: 10px;
	width : 380px;
	height : 160px;
	padding : 16px 16px;
	display:flex;
	justify-content: space-between;
	align-items: center;
`;

export const userImg = styled.img`
	width : 116px;
	height : 116px;
	margin : 0 24px;
`;
export const userDesc = styled.div`
	height : 100%;
	padding : 8px 0;
`;
export const userInfo = styled.div`
	width:164px;
	position: relative;
	padding-bottom:8px;
	margin-bottom: 16px;
	display:flex;
	flex-direction:column;
	justify-content: start;
	align-items: start;
	&::before{
		content : "";
		position: absolute;
		bottom:-4px;
		left :0;
		width : 100%;
		height : 1px;
		background-color: #D1D1D1;
	}
`;

export const userName = styled.div`
	margin-bottom: 8px;
	font-family: pretendard;
	font-size : 16px;
	font-weight : bold;
`;
export const userEmail = styled.div`
	font-family: pretendard;
	font-size : 12px;
	color : #D1D1D1;
`;
export const BtnDiv = styled.div`
	display:flex;
	gap: 12px;
`;
export const auth = styled.div`
	padding: 8px 4px 8px 0;
	background-color: #fff;
	border-radius: 8px;
	font-size : 12px;
	font-weight : bold;
	color : #4970FB;
`;
export const userDD = styled.ul`
  padding: 8px 12px;
  background-color: #fff;
  border: 1px solid #D1D1D1;
  border-radius: 8px;
  font-size: 8px;
  font-weight: 600;
  color: #000;
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 2rem;
	position:relative;
`;
export const authImg = styled.img`
  width: 14px;
  height: 14px;
  transform: ${(props) => (props.isOpen ? "rotate(180deg)" : "rotate(0deg)")};
  transition: transform 0.3s ease-in-out;
`;

