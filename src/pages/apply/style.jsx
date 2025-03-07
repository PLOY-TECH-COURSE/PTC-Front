import styled from 'styled-components';

export const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(108, 108, 108, 0.5);
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
  padding: 44px 80px 68px 80px;
  border-radius: 10px;
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
	gap:20px;
	.warning{
		color : red;
		position : absolute;
		bottom : -20px;
	}
`;
export const ApField = styled.fieldset`
	min-height:88px;
	border : 1px solid #7C7C7C;
	border-radius: 10px;
	position : relative;
	legend{
		margin-left : 6px;
		padding : 0 2px;
		font-size : 12px;
	}
	textarea {
	  background-color: rgba(0, 0, 0, 0);
		margin : 2px 6px 6px 6px;
		width :97.5%;
		height : 100%;	
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