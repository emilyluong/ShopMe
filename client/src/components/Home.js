import React from 'react'
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import mainPhoto from '../pictures/mainPhoto.jpg';
import gallery1 from '../pictures/gallery/gallery1.jpg';
import gallery2 from '../pictures/gallery/gallery2.jpg';
import gallery3 from '../pictures/gallery/gallery3.jpg';
import gallery4 from '../pictures/gallery/gallery4.jpg';
import gallery5 from '../pictures/gallery/gallery5.jpg';
import gallery6 from '../pictures/gallery/gallery6.jpg';

const Home = () => {
    return (
        <div className="home">
            <Navbar/>
            <div className="mainPhotoContainer">
                <img src={mainPhoto} alt="Advertisement" />
                <button className='btn'>Shop Now</button>
            </div>
            <div className="productDescription">
                <h2>Our Message</h2>
                <div>
                    We take dessert devliery to another level! Have the perfect desserts devilvered
                    straight to your doorstep with a 100% customer satisfaction Garentee.
                    Frozen or freshly baked we supply the best desserts that money can buy.
                    Order online and have your order at your doorstep within 48 hours anywhere in Canada.
                    All Orders are specially refridgerated to keep it as fresh as when it was first made.

                </div>
            </div>
            <div className="photoGallery">
                <ul>
                    <li><img className='photo' src={gallery1} alt="gallery1" /></li>
                    <li><img className='photo' src={gallery2} alt="gallery2" /></li>
                    <li><img className='photo' src={gallery3} alt="gallery3" /></li>
                </ul>
                <ul>
                    <li><img className='photo' src={gallery4} alt="gallery4" /></li>
                    <li><img className='photo' src={gallery5} alt="gallery5" /></li>
                    <li><img className='photo' src={gallery6} alt="gallery6" /></li>
                </ul>
            </div>
            <Footer />
        </div>
    )
}

export default Home
