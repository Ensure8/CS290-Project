import {useState} from "react";
import { IoChevronUp, IoChevronDown } from "react-icons/io5";

function OrderQuantity ({product}){
    const [quantity, setQuantity] = useState(0);
    
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
            <i><IoChevronDown onClick={decrement}/></i>
                {quantity}
            <i><IoChevronUp onClick={increment}/></i>
        </div>
    );
}

export default OrderQuantity;