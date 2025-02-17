import styled from "styled-components";

export const DropdownContainer = styled.div`
    width: max-content;
    background: white;
    border: 1px solid #ccc;
    border-radius: 10px;
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    padding: 10px 16px;
    cursor: pointer;
    align-items: center;
    transition: all 0.3s ease;
    gap: 5px;
    font-size: 14px;
    &:hover {
        border-color: #aaa;
    }
    position: relative;
`


export const DropdownMenu = styled.ul`
  position: absolute;
    top: 35px;
    left: 0;
    list-style: none;
    border: 1px solid #ccc;
    border-radius: 5px;
    z-index: 11;
    height: 150px;
    max-height: max-content;
    overflow-y: auto;
    &> li:first-child{
        border-top-left-radius: 5px;
        border-top-right-radius: 5px;
    }
    &> li:last-child{
        border-bottom-left-radius: 5px;
        border-bottom-right-radius: 5px;
    }
`;

export const DropdownItem = styled.li`
  padding: 10px;
  cursor: pointer;
  transition: all 0.2s ease;
    width: 150px;
    background: white;
    z-index: 10;
  &:hover {
    background-color: #f0f0f0;
  }
`;