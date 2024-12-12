import {useState} from "react";
import { IoChevronUp, IoChevronDown } from "react-icons/io5";

function OrderQuantity ({product, quantity, setQuantity}){
    
    
    const increment = () => {
        if (quantity < 10) {
            setQuantity(quantity + 1);
        }
    }

    const decrement = () => {
        if (quantity > 0) {
            setQuantity(quantity - 1);
        }
    }

    return (
        <div className="clicker">
            <i><IoChevronDown size={25} onClick={decrement}/></i>
                {quantity}
            <i><IoChevronUp size={25} onClick={increment}/></i>
        </div>
    );
}

export default OrderQuantity;