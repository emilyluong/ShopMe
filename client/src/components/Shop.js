import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Products from '../components/Products';

const Shop = () => {
    const productArray = [{
        name: 'Mocha Ice Cream',
        description: 'Freshly made mocha icecream specially stored to keep it extremly fresh',
        cost: 9.99
    }]; //Will be a prop eventually

    return (
        <div className="shop">
            <Navbar/>
            <Products products={productArray}/>
            <Footer />
        </div>
    )
}

export default Shop
