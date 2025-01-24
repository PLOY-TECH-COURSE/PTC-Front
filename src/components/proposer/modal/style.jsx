import styled from 'styled-components';

export const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(108, 108, 108, 0.5); /* 반투명 #6C6C6C */
  backdrop-filter: blur(10px); /* 배경 흐림 효과 */
  z-index: 1000;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Modal = styled.div`
  background-color: white;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  z-index: 1001;
`;