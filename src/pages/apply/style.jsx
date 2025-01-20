import styled from 'styled-components';

export const ApMain = styled.div`
	@import url("https://cdn.jsdelivr.net/gh/orioncactus/pretendard@v1.3.9/dist/web/variable/pretendardvariable.min.css");
	width :100vw;
	height : 100vh;
`;
export const ApHeader = styled.div`
	margin-bottom : 32px; 
`;

export const ApForm = styled.div`
	font-family: pretendard;
	width :592px;
	height : 672px;
	margin : auto;
	padding : 68px 80px;
	border-radius: 10px;
	box-shadow : 0 0 10px #ccc;
`;

export const ApImg = styled.img`
	width : 256px;
`;
export const ApTitle = styled.div`
	font-family: pretendard;
  font-weight : bold;
	font-size : 24px;
	margin-bottom : 18px;
`;

export const ApMForm = styled.div`
	display : flex;
	flex-direction : column;
`;
export const ApField = styled.fieldset`
	border : 1px solid #7C7C7C;
	border-radius: 10px;
	padding : 12px;
	margin-bottom : 12px;
	legend{
		margin-left : 12px;
		padding : 2px;
	}
	textarea {
		width :416px;
		height : 136px;	
		border: none;
		resize: none;
	}
	textarea:focus {
		outline: none;
	}	
	.warning{
		color : red;
	}
`;

export const ApBtn = styled.button`
	margin : 12px 8px 0 8px;
	padding : 16px 156px;
  background-color: ${(props) => (props.disabled ? "#000" : "#4970FB")};
  color: #fff;
  border: none;
  border-radius: 24px;
	font-size:20px;
  cursor: ${(props) => (props.disabled ? "not-allowed" : "pointer")};
  transition: background-color 0.3s ease;

  &:hover {
    background-color: ${(props) => (props.disabled ? "#ccc" : "#0056b3")};
  }
`;