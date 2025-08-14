import {useState} from "react";

const Order = () => {
    const [isClick, setIsClick] = useState(false);
    const [list, setList] = useState([
        {
            selected : ""
        },
        {
            selected : ""
        },
        {
            selected : ""
        },
        {
            selected : ""
        },
        {
            selected : ""
        },
        {
            selected : ""
        },
        {
            selected : ""
        }
    ]);
    const handleClick = () => {
        setIsClick(!isClick);
    }
    return (
        <div>
            {list.map((item, index) => (
                <div key={index} onClick={handleClick}>{item.selected == "" ? "멘티" : item.selected}</div>
            ))}
            {isClick && <Member/>}
        </div>
    )
}
const Member = () => {
    const member = [
        {
            name : "강준영"
        },
        {
            name : "권길현"
        },
        {
            name : "곽영빈"
        },
        {
            name : "이우린"
        },
        {
            name : "이정우"
        },
        {
            name : "조현우"
        },
        {
            name : "진수화"
        },
    ]
    const handleSelect = (member) => {
        setIsSelect(member)
    }
    return (
        <div>
            {member.map((item, index) => (
                <div key={index} onClick={()=>handleSelect(item.name)}>{item.name}</div>
            ))}
        </div>
    )
}
export default Order;