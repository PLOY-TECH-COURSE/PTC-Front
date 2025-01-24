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
	width:152px;
	position: relative;
	padding-bottom:16px;
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

export const userBtn = styled.button`
	
`;
