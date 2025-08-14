import * as _ from "./style.js";
import {useEffect, useState} from "react";
import Toggle from "../../assets/survey/toggle.svg";
import ReverseToggle from "../../assets/survey/reverseToggle.svg";
import {getStudentList} from "../../api/studentsList.js";

const Order = () => {
    const [user, setUser] = useState([]);
    useEffect(() => {
        getStudentList().then((data) => {
            console.log("수강  데이터:", data);
            setUser(data);
        })
    },[])
    const [openIndex, setOpenIndex] = useState(null);
    const [isClick, setIsClick] = useState(Array(7).fill(false));
    const [memberList, setMemberList] = useState(Array(7).fill({name:null}));
    const [list, setList] = useState([]);
    useEffect(() => {
        console.log(list)
    },[list])
    const handleClick = (index) => {
        setOpenIndex((prev) => (prev === index ? null : index));
        setIsClick((prev) =>
            prev.map((v,i) => (i === index ? !v : false))
        );
    };
    return (
        <_.UserOrderselecter>
            {memberList.map((item, index) => (
                <_.UserOrderselectItem key={index}>
                    <div>{index + 1}</div>
                    <_.UserOrderselectItemName onClick={() => handleClick(index)}>
                        <div>{item.name === null ? "멘티" : item.name}</div>
                        <img width={"12px"} src={isClick[index]?Toggle:ReverseToggle} alt={"토글"}/>
                    </_.UserOrderselectItemName>
                    {openIndex === index && (
                        <Member
                            list={list}
                            setList={setList}
                            onClose={() => setOpenIndex(null)}
                            user={user}
                            idx={index}
                            setMemberList={setMemberList}
                        />
                    )}
                </_.UserOrderselectItem>
            ))}
            <_.SubmitButton>저장</_.SubmitButton>
        </_.UserOrderselecter>
    );
};

const Member = ({ list,setList, onClose, user ,idx, setMemberList}) => {
    const handleSelect = (name,student_id) => {
        setList(prev => [
            ...prev,
            {
                student_id: student_id,
                order: idx + 1
            }
        ]);
        setMemberList((prev) =>
            prev.map((item, i) => (i === idx ? {name: name} : item))
        );
        onClose?.();
    };
    return (
        <_.UserSet>
            {user.map((m, i) => (
                <div key={i} onClick={() => handleSelect(m.name,m.student_id)}>
                    {m.name}
                </div>
            ))}
        </_.UserSet>
    );
};

export default Order;
