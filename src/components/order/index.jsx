import * as _ from "./style.js";
import {useEffect, useState} from "react";
import Toggle from "../../assets/survey/toggle.svg";
import ReverseToggle from "../../assets/survey/rToggle.svg";
import {getStudentList} from "../../api/studentsList.js";
import {decideOrder, getStudentOrder} from "../../api/surveyOrder.js";

const Order = ({form_id}) => {
    const [user, setUser] = useState([]);
    const [openIndex, setOpenIndex] = useState(null);
    const [isClick, setIsClick] = useState(Array(7).fill(false));
    const [memberList, setMemberList] = useState(
        () => Array.from({ length: 7 }, () => ({ name: null, completed: false }))
    );
    const [list, setList] = useState([]);
    useEffect(() => {
        getStudentList().then((data) => {
            console.log("수강  데이터:", data);
            setUser(data);
        })
        getStudentOrder(form_id).then((data) => {
            console.log("수강자 순서 조회:", data);
            const next = Array.from({ length: 7 }, () => ({ name: null, completed:false }));
            if (Array.isArray(data)) {
                data.forEach(({ order, name ,completed}) => {
                    const idx = (order ?? 0) - 1;
                    if (idx >= 0 && idx < next.length) next[idx] = { name, completed };
                });
            } else if (data && typeof data === "object") {
                const idx = (data.order ?? 0) - 1;
                if (idx >= 0 && idx < next.length) next[idx] = { name: data.name, completed: data.completed };
            }
            setMemberList(next);
        });
    },[])
    console.log("맴버",memberList);
    useEffect(() => {
        console.log(list)
    },[list])
    const handleNon = (e) => {
        e.stopPropagation()
    }
    const handleClick = (e,index) => {
        e.stopPropagation()
        setOpenIndex((prev) => (prev === index ? null : index));
        setIsClick((prev) =>
            prev.map((v,i) => (i === index ? !v : false))
        );
    };
    const handleSubmit = () => {
        decideOrder(form_id,list).then(r =>

            console.log("순서저장 잘 됨",r)
        )
    }
    return (
        <_.UserOrderselecter onClick={handleNon}>
            {memberList.map((item, index) => (
                <_.UserOrderselectItem key={index}>
                    <div>{index + 1}</div>
                    <_.UserOrderselectItemName completed={item.completed} onClick={(e) => handleClick(e,index)}>
                        <div>{item.name === null ? "멘티" : item.name}</div>
                        <img width={"12px"} src={isClick[index]?Toggle:ReverseToggle} alt={"토글"}/>
                    </_.UserOrderselectItemName>
                    {openIndex === index && !item.completed && (
                        <Member
                            list={list}
                            setList={setList}
                            onClose={() => setOpenIndex(null)}
                            user={user}
                            idx={index}
                            setMemberList={setMemberList}
                            handleClick={handleClick}
                        />
                    )}
                </_.UserOrderselectItem>
            ))}
            <_.SubmitButton onClick={handleSubmit}>저장</_.SubmitButton>
        </_.UserOrderselecter>
    );
};

const Member = ({ setList, onClose, user ,idx, setMemberList,handleClick}) => {
    const handleSelect = (e,name,student_id) => {
        setList(prev => {
            const updated = prev.filter(item => item.order !== idx + 1);
            return [
                ...updated,
                {
                    student_id: student_id,
                    order: idx + 1
                }
            ];
        });
        setMemberList((prev) =>
            prev.map((item, i) => (i === idx ? {name: name} : item))
        );
        handleClick(e,idx)
        onClose?.();
    };
    return (
        <_.UserSet>
            {user.map((m, i) => (
                <div key={i} onClick={(e) => handleSelect(e,m.name,m.student_id)}>
                    {m.name}
                </div>
            ))}
        </_.UserSet>
    );
};

export default Order;
