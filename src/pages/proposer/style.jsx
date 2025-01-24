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
	gap: 16px;
	justify-content: space-between;
	
`;

export const SInput = styled.div`
	display:flex;
	align-items: center;
	justify-content: center;
	margin :24px;
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