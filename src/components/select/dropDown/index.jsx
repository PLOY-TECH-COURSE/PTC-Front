import * as _ from "./style";

function Dropdown({ onAuthChange }) {
  console.log("onAuthChange : ",onAuthChange)
  const userRole = ["USER","STUDENT","ADMIN"];
  return (
    <_.DropdownList>
      {userRole.map((item)=>(
        <_.DropdownItem onClick={() => onAuthChange(item)}>{item}</_.DropdownItem>
      ))}
    </_.DropdownList>
  );
}

export default Dropdown;
