import * as S from './style.jsx';
import Down from '../../assets/down.svg';

// name = 지금선택되어있는 요소
// item = 드랍다운했을때 나오는 요소들
// change = 선택된 요소로 name 을 바꾸는 함수
// isOpen = 메뉴를 보이게할지
// click = 드랍다운을 했다가 다시 누르면 닫히게 하는 함수
//예 :               <Dropdown
//                     name={floor}
//                     item={f}
//                     change={(event) => setFloor(event)}
//                     isOpen={isOpen[1]}
//                     click={() => setIsOpen([false, !isOpen[1], false])}
//                 />

export default function Dropdown({name, item, change, click, isOpen}) {
    return (
        <S.DropdownContainer onClick={()=>click()}>
            <p>{name}</p>
            <img src={Down} alt={"down"}></img>
            {isOpen ?
                <S.DropdownMenu>
                    {item && item.map((currentItem, index) => {
                        return (
                            <S.DropdownItem
                                onClick={()=>change(currentItem)}
                                key={index}
                                value={currentItem}
                            >{currentItem}
                            </S.DropdownItem>
                        );
                    })}
                </S.DropdownMenu>
                : null}
        </S.DropdownContainer>
    )
}