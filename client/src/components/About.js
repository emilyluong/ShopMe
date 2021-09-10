import React from 'react'
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const About = () => {
    return (
        <div className="about">
            <Navbar/>
            <div id="aboutUs">
                <h2 id="aboutUsHeader">About Us</h2>
                <div id="aboutUsDescription">
                    We take dessert devliery to another level! Have the perfect desserts devilvered
                    straight to your doorstep with a 100% customer satisfaction Garentee.
                    Frozen or freshly baked we supply the best desserts that money can buy.
                    Order online and have your order at your doorstep within 48 hours anywhere in Canada.
                    All Orders are specially refridgerated to keep it as fresh as when it was first made.
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default About
