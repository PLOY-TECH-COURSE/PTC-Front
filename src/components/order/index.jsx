import * as _ from "./style.js";
import { useState } from "react";
import Toggle from "../../assets/survey/toggle.svg";
import ReverseToggle from "../../assets/survey/reverseToggle.svg";

const Order = () => {
    const [openIndex, setOpenIndex] = useState(null);
    const [isClick, setIsClick] = useState(Array(7).fill(false));
    const [list, setList] = useState([
        { selected: "" },
        { selected: "" },
        { selected: "" },
        { selected: "" },
        { selected: "" },
        { selected: "" },
        { selected: "" },
    ]);
    const handleClick = (index) => {
        setOpenIndex((prev) => (prev === index ? null : index));
        setIsClick((prev) =>
            prev.map((v,i) => (i === index ? !v : false))
        );
    };
    return (
        <_.UserOrderselecter>
            {list.map((item, index) => (
                <_.UserOrderselectItem key={index}>
                    <div>{index + 1}</div>
                    <_.UserOrderselectItemName onClick={() => handleClick(index)}>
                        <div>{item.selected === "" ? "멘티" : item.selected}</div>
                        <img width={"12px"} src={isClick[index]?Toggle:ReverseToggle} alt={"토글"}/>
                    </_.UserOrderselectItemName>
                    {openIndex === index && (
                        <Member
                            setList={setList}
                            idx={index}
                            onClose={() => setOpenIndex(null)}
                        />
                    )}
                </_.UserOrderselectItem>
            ))}
            <_.SubmitButton>저장</_.SubmitButton>
        </_.UserOrderselecter>
    );
};

const Member = ({ setList, idx, onClose }) => {
    const member = [
        { name: "강준영" },
        { name: "권길현" },
        { name: "곽영빈" },
        { name: "이우린" },
        { name: "이정우" },
        { name: "조현우" },
        { name: "진수화" },
    ];

    const handleSelect = (name) => {
        setList((prev) =>
            prev.map((item, i) => (i === idx ? { ...item, selected: name } : item))
        );
        onClose?.();
    };

    return (
        <_.UserSet>
            {member.map((m, i) => (
                <div key={i} onClick={() => handleSelect(m.name)}>
                    {m.name}
                </div>
            ))}
        </_.UserSet>
    );
};

export default Order;
