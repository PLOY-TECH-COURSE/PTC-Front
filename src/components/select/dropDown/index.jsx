import * as _ from "./style";

function Dropdown({ onAuthChange }) {
  const handleClick = (auth) => {
    onAuthChange(auth); // 클릭한 권한을 부모로 전달
  };

  return (
    <_.DropdownList>
      <_.DropdownItem onClick={() => handleClick("USER")}>USER</_.DropdownItem>
      <_.DropdownItem onClick={() => handleClick("STUDENT")}>STUDENT</_.DropdownItem>
      <_.DropdownItem onClick={() => handleClick("ADMIN")}>ADMIN</_.DropdownItem>
    </_.DropdownList>
  );
}

export default Dropdown;
