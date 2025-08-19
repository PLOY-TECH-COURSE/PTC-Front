import * as _ from "./style.js";
import {useEffect, useState} from "react";
import {getStudentOrder} from "../../api/surveyOrder.js";

const OrderList = ({form_id}) => {
    const [list, setList] = useState(null);
    useEffect(() => {
        getStudentOrder(form_id).then((data) => {
            // console.log("수강자 순서 조회 :", data);
            setList(data);
        })
    },[])
    if(!list || list.length === 0) {
        return (
            <_.UserOrderselecter>
                순서 준비중...
            </_.UserOrderselecter>
        )
    }
    else {
        return (
            <_.UserOrderselecter>
                {list.map((item, index) => (
                    <_.UserOrderselectItem key={index}>
                        <div>{index + 1}</div>
                        <_.UserOrderselectItemName completed={item.completed}>
                            {item.name}
                        </_.UserOrderselectItemName>
                    </_.UserOrderselectItem>
                ))}
            </_.UserOrderselecter>
        );
    }
};

export default OrderList;
