import styled from 'styled-components';

export const SwiperContainer = styled.div`
  width: 600px;
  margin: auto;
  position: relative;

  &:hover {
    .custom-prev,
    .custom-next {
      opacity: 1;
    }
  }
`;

export const CustomButton = styled.button<{ direction: 'prev' | 'next' }>`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  background: rgba(0, 0, 0, 0.5);
  border: none;
  color: white;
  font-size: 24px;
  padding: 8px 12px;
  cursor: pointer;
  opacity: 0;
  transition: opacity 0.3s ease;
  z-index: 10;
  user-select: none;

  ${({ direction }) => (direction === 'prev' ? 'left: 10px;' : 'right: 10px;')}
`;