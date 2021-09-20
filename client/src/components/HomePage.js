import React, { useState } from 'react'
import NavigationBar from './NavigationBar';
import SingleQuestion from './SingleQuestion';
import PictureQuestion from './PictureQuestion';
import ProductQuestion from './ProductQuestion';
import TextBoxQuestion from './TextBoxQuestion';
import axios from 'axios';
const HomePage = ({ history }) => {
    const [websiteInfo, setWebsiteInfo] = useState({ questionNumber: 1, gallery: [], products: [], productPhotos: [] });

    const infoUploaded = async () => {
        const form_data = new FormData();
        for (const key in websiteInfo) {
            if (key === "gallery" || key == "productPhotos") {
                for (const photo of websiteInfo[key]) {
                    form_data.append(key, photo);
                }
            } else if (key === "products") {
                for (const productObj of websiteInfo[key]) {
                    form_data.append(key, JSON.stringify(productObj));
                }
                form_data.append(key, "");
            } else {
                form_data.append(key, websiteInfo[key]);
            }
        }

        const config = {
            headers: {
                'accept': 'application/json',
                'Accept-Language': 'en-US,en;q=0.8',
                'Content-Type': `multipart/form-data; boundary=${form_data._boundary}`
            }
        }
        try {
            await axios.post('/store', form_data, config);
            history.push('/' + websiteInfo.url_extension);
        } catch (error){
            console.log(error.message)
        }
    }

    const aboutUsExampleDescription = "We take dessert delivery to another level! Have the perfect desserts delivered " +
                                    "straight to your doorstep with a 100% customer satisfaction guarantee. " +
                                    "Frozen or freshly baked we supply the best desserts that money can buy. " +
                                    "Order online and have your order at your doorstep within 48 hours anywhere in Canada. " +
                                    "All Orders are specially refrigerated to keep it as fresh as when it was first made.";

    return (
        <div className="homePage">
            <NavigationBar />
            { websiteInfo.questionNumber === 1 && <SingleQuestion setWebsiteInfo={setWebsiteInfo} websiteInfo={websiteInfo} question="What will you name your website?" placeholder="Ex. Desserts Galore" resultName="site_name" /> }
            { websiteInfo.questionNumber === 2 && <SingleQuestion setWebsiteInfo={setWebsiteInfo} websiteInfo={websiteInfo} question="What will your website extension be?" placeholder="Ex. dessertsGalore" resultName="url_extension" /> }
            { websiteInfo.questionNumber === 3 && <PictureQuestion setWebsiteInfo={setWebsiteInfo} websiteInfo={websiteInfo} question="Upload the picture you will use as the main image on the homepage of your website" resultName="main_photo" /> }
            { websiteInfo.questionNumber === 4 && <PictureQuestion setWebsiteInfo={setWebsiteInfo} websiteInfo={websiteInfo} question="Upload the picture you want to use as the picture first photo in your gallery (1/6)" resultName="gallery" /> }
            { websiteInfo.questionNumber === 5 && <PictureQuestion setWebsiteInfo={setWebsiteInfo} websiteInfo={websiteInfo} question="Upload the picture you want to use as the picture second photo in your gallery (2/6)" resultName="gallery" /> }
            { websiteInfo.questionNumber === 6 && <PictureQuestion setWebsiteInfo={setWebsiteInfo} websiteInfo={websiteInfo} question="Upload the picture you want to use as the picture third photo in your gallery (3/6)" resultName="gallery" /> }
            { websiteInfo.questionNumber === 7 && <PictureQuestion setWebsiteInfo={setWebsiteInfo} websiteInfo={websiteInfo} question="Upload the picture you want to use as the picture fourth photo in your gallery (4/6)" resultName="gallery" /> }
            { websiteInfo.questionNumber === 8 && <PictureQuestion setWebsiteInfo={setWebsiteInfo} websiteInfo={websiteInfo} question="Upload the picture you want to use as the picture fifth photo in your gallery (5/6)" resultName="gallery" /> }
            { websiteInfo.questionNumber === 9 && <PictureQuestion setWebsiteInfo={setWebsiteInfo} websiteInfo={websiteInfo} question="Upload the picture you want to use as the picture sixth photo in your gallery (6/6)" resultName="gallery" /> }
            { websiteInfo.questionNumber === 10 && <TextBoxQuestion setWebsiteInfo={setWebsiteInfo} websiteInfo={websiteInfo} question="Tell us about your company!" resultName="about" placeholder={aboutUsExampleDescription} /> }
            { websiteInfo.questionNumber === 11 && <TextBoxQuestion setWebsiteInfo={setWebsiteInfo} websiteInfo={websiteInfo} question="What is your companies message?" resultName="message" placeholder="" /> }
            { websiteInfo.questionNumber === 12 && <ProductQuestion setWebsiteInfo={setWebsiteInfo} question="Upload information about one of the products you wish to sell" resultName="products" infoUploaded={infoUploaded} /> }
        </div>
    )
}

export default HomePage
