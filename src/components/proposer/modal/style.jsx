import styled from 'styled-components';

export const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(108, 108, 108, 0.5);
  backdrop-filter: blur(4px); /* 배경 흐림 효과 */
  z-index: 1000;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Modal = styled.div`
  background-color: white;
  padding: 64px;
  width: 780px;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  z-index: 1001;
  display:flex;
	flex-direction: column;
  gap : 36px;
`;
export const Info = styled.div`
	display:flex;
	flex-direction: column;
	position: relative;
  gap : 16px;
	&::before{
		content : "";
		position: absolute;
		bottom:-18px;
		left :0;
		width : 100%;
		height : 2px;
		background-color: #D1D1D1;
	}
`;
export const Name = styled.h2`
  font-size : 24px;
  font-weight : bold;
`;
export const Title = styled.h2`
  font-size : 16px;
  font-weight : bold;
`;
export const From = styled.div`
	display:flex;
	flex-direction: column;
  gap : 8px;
`;