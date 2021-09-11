import React, { useContext } from 'react'
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import CartContext from '../context/cartContext';
const About = () => {
    const cartContext = useContext(CartContext);
    const { websiteInfo } = cartContext;
    return (
        <div className="about">
            <Navbar/>
            <div id="aboutUs">
                <h2 id="aboutUsHeader">About Us</h2>
                <div id="aboutUsDescription">
                    { websiteInfo.about }
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default About
