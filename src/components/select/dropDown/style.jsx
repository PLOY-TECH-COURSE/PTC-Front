
import styled from 'styled-components';

export const DropdownList = styled.ul`
  background-color:#fff;
	border-radius: 10px;
  list-style: none;
  padding: 0;
  margin: 0;
  border: 1px solid #D1D1D1;
	z-index : 1;
	position:absolute;
	top : 32px;
	left:0;
`;

export const DropdownItem = styled.li`
  padding: 12px 16px;
  background-color:rgba(255, 255, 255, 0);
  font-size: 10px;
  color: #333;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #f1f1f1;
  }
`;
