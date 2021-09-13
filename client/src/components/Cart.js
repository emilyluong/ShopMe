import React, { useContext } from 'react'
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import CartContext from '../context/cartContext';


const Cart = () => {
    const cartContext = useContext(CartContext);

    //cart is the purchase Array
    const { cart, clearCart } = cartContext;

    return (
            <div>
            <Navbar/>
            <div className="cart">
                <table className="table">
                    <tr>
                        <th>Product</th>
                        <th>Quantity</th>
                        <th>Total</th>
                    </tr>
                    {cart && cart.map((item, i) => (<tr key={i}>
                        <td>{item.name}</td>
                        <td>{item.quantity}</td>
                        <td>{item.cost}</td>
                    </tr>))}
                    {cart && <tr>
                        <th style={{"background-color": "white"}}></th>
                        <th></th>
                        <th>{cart.reduce((x, item) => x + (item.cost*item.quantity), 0).toFixed(2)}</th>
                    </tr>}
                    </table>
                    <button id="purchase" onClick={clearCart}><h2>Purchase</h2></button>
            </div>
            <Footer />
        </div>
    )
}

export default Cart
