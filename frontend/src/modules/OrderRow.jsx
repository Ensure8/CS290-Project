import {useEffect, useState} from "react";
import OrderQuantity from "./OrderQuantity.jsx";

function OrderRow ({product, index, setSubtotals}){
    const [quantity, setQuantity] = useState(0);

    useEffect(() => {
        setSubtotals((prevSubtotals) => {
            const updatedSubtotals = [...prevSubtotals];
            updatedSubtotals[index] = product.price * quantity;
            return updatedSubtotals;
        });
    }, [quantity, product.price, index, setSubtotals]);

    return (
        <tr>
            <td>{product.company}</td>
            <td>{product.product}</td>
            <td>{product.price.toLocaleString('en-US',{style: 'currency',currency: 'USD', minimumFractionDigits: 2})}</td>
            <td><OrderQuantity product={product} quantity={quantity} setQuantity={setQuantity}/></td>
            <td>{(product.price*quantity).toLocaleString('en-US',{style: 'currency',currency: 'USD', minimumFractionDigits: 2})}</td>
        </tr>
    );
}

export default OrderRow;