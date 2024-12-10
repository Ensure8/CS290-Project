import products from "../data/products";
import OrderRow from "./OrderRow";

function OrderPage(){
    return (
        <>
            <h2>Order</h2>
            <article>
                <p>On this page you will be able to order different pet products from a multitude of different companies.</p>
                    <table>
                        <caption>Current Products</caption>
                        <thead> 
                            <tr>
                                <th>Company</th>
                                <th>Product</th>
                                <th>Price</th>
                                <th>Quantity</th>
                            </tr>
                        </thead>

                        <tbody>
                            {products.map((product, i) => (
                                <OrderRow 
                                    product={product} 
                                    key={i}
                                />))
                            }
                        </tbody>

                        <tfoot>
                            <tr>
                                <th colSpan="3">Running Total
                                    {/*  */}
                                </th>
                            </tr>    
                        </tfoot>                        
                    </table>                    
            </article>
        </>
    )
}
export default OrderPage;