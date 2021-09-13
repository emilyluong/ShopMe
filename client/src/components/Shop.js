import React, { useContext } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Products from '../components/Products';
import CartContext from '../context/cartContext';

const Shop = () => {
    const cartContext = useContext(CartContext);
    const { websiteInfo } = cartContext;

    return (
        <div className="shop">
            <Navbar/>
            <Products productList={websiteInfo.products}/>
            <Footer />
        </div>
    )
}

export default Shop
