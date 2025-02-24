import styled from 'styled-components';

export const ProMain = styled.div`
	display:flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
`;
export const UserList = styled.div`
	width : 100vw;
	padding : 8px 124px;
	display:flex;
	flex-wrap: wrap;
	gap: 24px;
	justify-content: start;
	z-index : 2;
`;
export const Input = styled.div`
	display:flex;
	flex-direction: column;
	align-items: start;
	justify-content: center;
	gap : 12px;
	margin :24px;
`;
export const SInput = styled.div`
	display:flex;
	align-items: center;
	justify-content: center;
	border: 2px solid #4970FB;
	border-radius: 10px;
`;
export const SImg = styled.img`
	margin : 8px 12px;
`;
export const Search = styled.input`
	width : 336px;
	border:none;
	font-size:16px;
	&::placeholder {
		color: #D1D1D1;
	} 
	&:focus{
		outline: none;
	}
`;
export const Check = styled.div`
	padding: 8px 12px;
	background-color: #fff;
	border-radius: 8px;
	font-size : 8px;
	font-weight : 600;
	color : #000;
	display:flex;
	align-items: center;
	gap : 1.5rem;
`;
export const CDiv = styled.div`
	font-size : 10px;
	color : #000;
	cursor : pointer;
	display:flex;
	align-items: center;
	gap : 8px;
	    /* on */
    input{
			accent-color: #4970FB;
    }
`;