import products from "../data/products";
import OrderRow from "./OrderRow";
import {useState} from "react";

function OrderPage(){
    const [subtotals, setSubtotals] = useState(Array(products.length).fill(0));
    const total = subtotals.reduce((sum, subtotal) => sum + subtotal, 0);

    return (
        <>
            <h2>Order</h2>
            <article>
                <p>On this page you will be able to order different pet products from a multitude of different companies.</p>
                    <table id="orderTable">
                        <caption>Current Products</caption>
                        <thead> 
                            <tr>
                                <th>Company</th>
                                <th>Product</th>
                                <th>Price</th>
                                <th>Quantity</th>
                                <th>Subtotal</th>
                            </tr>
                        </thead>

                        <tbody>
                            {products.map((product, i) => (
                                <OrderRow 
                                    product={product} 
                                    key={i}
                                    index={i}
                                    setSubtotals={setSubtotals}
                                />))
                            }
                        </tbody>

                        <tfoot>
                            <tr>
                                <th colSpan="4">Running Total</th>
                                <th id="totalHeader">{total.toLocaleString('en-US',{style: 'currency',currency: 'USD', minimumFractionDigits: 2})} </th>
                            </tr>    
                        </tfoot>                        
                    </table>                    
            </article>
        </>
    )
}
export default OrderPage;