import React, { useEffect, useContext, useState } from 'react'
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import CartContext from '../context/cartContext';
import axios from 'axios';

const Home = ({ history }) => {
    const cartContext = useContext(CartContext);
    const { setInfoJSON, websiteInfo, toBase64 } = cartContext;

    //const [websiteInfo, setWebsiteInfo] = useState({});

    useEffect(async () => {
        const url_extension = window.location.pathname.split("/")[1].toLowerCase();
        if (url_extension === "") {
            history.push('/create');
        } else if (url_extension !== "shop" && url_extension !== "cart" && url_extension !== "about" && url_extension !== "create") {
            if (!websiteInfo || url_extension !== websiteInfo.url_extension){
                const websiteInformation = await axios.get('/store/' + url_extension);
                console.log(websiteInformation.data.websiteInfo);
                //arr.reduce((data, byte) => data + String.fromCharCode(byte), '');
                setInfoJSON(websiteInformation.data.websiteInfo);
            }
        }
    }, []);

    return (
    websiteInfo && Object.keys(websiteInfo).length === 0 ? null :
        <div className="home">
            <Navbar name={websiteInfo.site_name}/>
            <div className="mainPhotoContainer">
                <img src={`data:${websiteInfo.main_photo.data.contentType};base64,${toBase64(websiteInfo.main_photo.data.data)}`} alt="Advertisement" />
                {console.log(toBase64(websiteInfo.main_photo.data.data))}
                <button className='btn'>Shop Now</button>
            </div>
            <div className="productDescription">
                <h2>Our Message</h2>
                <div>
                    {websiteInfo.message}
                    {/* We take dessert devliery to another level! Have the perfect desserts devilvered
                    straight to your doorstep with a 100% customer satisfaction Garentee.
                    Frozen or freshly baked we supply the best desserts that money can buy.
                    Order online and have your order at your doorstep within 48 hours anywhere in Canada.
                    All Orders are specially refridgerated to keep it as fresh as when it was first made. */}

                </div>
            </div>
            <div className="photoGallery">
                <ul>
                    <li><img className='photo' src={`data:${websiteInfo.gallery[0].data.contentType};base64,${toBase64(websiteInfo.gallery[0].data.data)}`} alt="gallery1" /></li>
                    <li><img className='photo' src={`data:${websiteInfo.gallery[1].data.contentType};base64,${toBase64(websiteInfo.gallery[1].data.data)}`} alt="gallery1" /></li>
                    <li><img className='photo' src={`data:${websiteInfo.gallery[2].data.contentType};base64,${toBase64(websiteInfo.gallery[2].data.data)}`} alt="gallery1" /></li>
                </ul>
                <ul>
                    <li><img className='photo' src={`data:${websiteInfo.gallery[3].data.contentType};base64,${toBase64(websiteInfo.gallery[3].data.data)}`} alt="gallery1" /></li>
                    <li><img className='photo' src={`data:${websiteInfo.gallery[4].data.contentType};base64,${toBase64(websiteInfo.gallery[4].data.data)}`} alt="gallery1" /></li>
                    <li><img className='photo' src={`data:${websiteInfo.gallery[5].data.contentType};base64,${toBase64(websiteInfo.gallery[5].data.data)}`} alt="gallery1" /></li>
                </ul>
            </div>
            <Footer />
        </div>
    )
}

export default Home
