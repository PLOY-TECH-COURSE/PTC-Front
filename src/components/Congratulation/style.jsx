import styled, {keyframes, css} from "styled-components";

export const Animation = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 30px;
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 100;
    background: rgb(0,0,0,0.25);
`
const show = keyframes`
    0%{
        opacity: 0;
        height: 0;
    }
    100%{
        opacity: 1;
        height: 70%;
    }
`
export const Popup = styled.div`
    z-index: 110;
    overflow: hidden;
    & > div{
        display: flex;
        align-content: center;
        justify-content: flex-end;
        background: white;
        font-size: 12px;
        box-shadow: 0 2px 2px 0 rgba(0, 0, 0, 0.05);
        border-top-left-radius: 10px;
        border-top-right-radius: 10px;
        padding: 8px 16px;
        gap: 10px;
    }
    & > img{
        width: 500px;
        height: max-content;
        box-shadow:  0px 0px 10px 0px rgba(0, 0, 0, 0.25);
        border-bottom-left-radius: 10px;
        border-bottom-right-radius: 10px;
    }
    & > div > div > p{
        line-height: 2;
    }
    & > div > div{
        display: flex;
        gap: 4px;
    }
    & > div > img{
        width: 24px;
        cursor: pointer;
    }
    animation: ${show} ease-in-out 1s;
`
export const UnBox = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
`
export const Box = styled.div`
    position: absolute;
    top: ${(props)=>props.$top}%;
    left: ${(props)=>props.$left}%;
    bottom: ${(props)=>props.$bottom}%;
    right: ${(props)=>props.$right}%;
`
export const Label = styled.label`
  position: relative;
  display: flex;
  align-items: center;
  cursor: pointer;
  .peer {
    display: none; // input checkbox 숨기기
  }
`;

export const CheckboxContainer = styled.div`
    width: 1rem;
    height: 1rem; /* h-8 -> 2rem */
    border-radius: 0.2rem; /* rounded-lg */
    background-color: white; /* bg-white */
    border: 1.5px solid #4970FB; /* border-purple-500 */
    transition: all 0.3s ease-in-out; /* transition-all duration-300 ease-in-out */

    .peer:checked + & {
        background: linear-gradient(to bottom right, #4970FB, #96ADFD); /* bg-gradient-to-br from-purple-500 to-pink-500 */
        border: none; /* border-0 */
        transform: rotate(12deg); /* rotate-12 */
    }

    /* after 스타일 */

    &::after {
        content: "";
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        width: 0.7rem; /* w-5 */
        height: 0.7rem; /* h-5 */
        opacity: 0; /* opacity-0 */
        background-image: url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIiBzdHJva2U9IiNmZmZmZmYiIHN0cm9rZS13aWR0aD0iMyIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIj48cG9seWxpbmUgcG9pbnRzPSIyMCA2IDkgMTcgNCAxMiI+PC9wb2x5bGluZT48L3N2Zz4=');
        background-size: contain; /* bg-contain */
        background-repeat: no-repeat; /* bg-no-repeat */
        transition: opacity 0.3s; /* transition-opacity duration-300 */
    }

    /* 체크박스가 체크되었을 때 */

    .peer:checked + &::after {
        opacity: 1; /* opacity-100 */
    }

    &:hover {
        box-shadow: 0 0 15px rgba(85, 155, 247, 0.5); /* hover:shadow-[0_0_15px_rgba(168,85,247,0.5)] */
    }
`;

export const Text = styled.span`
  margin-left: 0.75rem; /* ml-3 */
  font-size: 0.875rem; /* text-sm */
  font-weight: 500; /* font-medium */
  color: #1f2937; /* text-gray-900 */
`;