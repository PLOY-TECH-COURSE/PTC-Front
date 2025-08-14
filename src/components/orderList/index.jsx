import * as _ from "./style.js";
import { useState } from "react";

const OrderList = () => {
    const [list, setList] = useState([
        { name: "강준영" },
        { name: "곽영빈" },
        { name: "권길현" },
        { name: "이우린" },
        { name: "이정우" },
        { name: "조현우" },
        { name: "진수화" }
    ]);
    return (
        <_.UserOrderselecter>
            {list.map((item, index) => (
                <_.UserOrderselectItem key={index}>
                    <div>{index + 1}</div>
                    <_.UserOrderselectItemName>
                        {item.name}
                    </_.UserOrderselectItemName>
                </_.UserOrderselectItem>
            ))}
        </_.UserOrderselecter>
    );
};

export default OrderList;
