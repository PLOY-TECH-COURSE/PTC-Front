import styled from 'styled-components';

export const PaginationContainer = styled.div`
  position: absolute;
  bottom: 10px;
  width: 95%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  gap: 10px;
  text-align: center;
  z-index: 10;
  opacity: ${({ $isHovered }) => ($isHovered ? 1 : 0)};
  pointer-events: ${({ $isHovered }) => ($isHovered ? "auto" : "none")};
  transition: opacity 0.3s ease;
  
  & > .swiper-pagination-bullet {
    background-color: #8c8c8c;
    cursor: pointer;
    opacity: 0.7;
  }
  & > .swiper-pagination-bullet-active {
    background-color: #4970FB;
    opacity: 1;
  }
`;

export const CustomButton = styled.button`
  position: absolute;
  width: 30px;
  height: 30px;
  top: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  transform: translateY(-50%);
  background: white;
  border: 2px solid #4970FB;
  padding: 10px;
  cursor: pointer;
  z-index: 10;
  font-size: 18px;
  border-radius: 50%;
  opacity: ${({ $isHovered }) => ($isHovered ? 1 : 0)};
  pointer-events: ${({ $isHovered }) => ($isHovered ? "auto" : "none")};
  transition: opacity 0.3s ease;
  ${(props)=>props.$id === "left" ? "left: 40px;" : "right: 40px;"}
`;