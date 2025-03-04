import styled from 'styled-components';

export const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(108, 108, 108, 0.5);
  // backdrop-filter: blur(4px);
  z-index: 1000;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const ApForm = styled.div`
  font-family: pretendard;
  width: 592px;
  height: 672px;
  background: white;
  padding: 68px 80px;
  border-radius: 10px;
  box-shadow: 0 0 10px #ccc;
  position: relative;
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

export const ApMForm = styled.form`
	display : flex;
	flex-direction : column;
	.warning{
		color : red;
		position : absolute;
		bottom : -20px;
	}
`;
export const ApField = styled.fieldset`
	border : 1px solid #7C7C7C;
	border-radius: 10px;
	padding : 12px;
	margin-bottom : 20px;
	position : relative;
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