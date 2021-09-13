import React, { useState } from 'react'

const ProductQuestion = ({ question, setWebsiteInfo, infoUploaded }) => {
    const [productInfo, setProductInfo] = useState({});
    //prob also need to pass in the setState for websiteInfo
    const onSubmit = () => {
        const { image, name, cost, desc } = productInfo;
        if (image != null && name != "" && cost != "" && desc != "") {
            const productInformation = {
                name: productInfo.name,
                cost: productInfo.cost,
                desc: productInfo.desc
            }
            setWebsiteInfo(websiteInfo => {
                return { ...websiteInfo, products: [...websiteInfo.products, productInformation], productPhotos: [...websiteInfo.productPhotos, productInfo.image]}
            });
            setProductInfo({name: "", cost: "", desc: "", image: null});
        }
    }

    const onChange = (e) => {
        console.log(productInfo);
        setProductInfo(prevState => {
            if (e.target.name === 'image') return { ...prevState, [e.target.name]: e.target.files[0] }
            else return { ...prevState, [e.target.name]: e.target.value }
        });
    }

    return (
        <div className="question">
            <div className="questionBox">
                <p>{question}</p>
            </div>
            <div className="inputBox">
                <label for="productName">Product Name</label>
                <input id="productName" name="name" type="text" onChange={onChange} value={productInfo.name} placeholder={"Ex. Chocolate Cake"} /><br />
                <label for="productCost">Product Cost</label>
                <input id="productCost" name="cost" type="text" onChange={onChange} value={productInfo.cost} placeholder={"Ex. 9.99"} /><br />
                <label id="productDesc">Product Description</label>
                <textarea id="productDesc" name="desc" onChange={onChange} value={productInfo.desc} rows="4" cols="50" /><br />
                <label for="uploadPhoto">Product Image</label>
                <input id="uploadPhoto" name="image" type="file" onChange={onChange} /><br />
                <input className="submit" type="submit" value="Upload" onClick={onSubmit} />
                <input id="productsCompleted" className="submit" type="submit" value="Done Uploads" onClick={infoUploaded}/>
            </div>
        </div>
    )
}

export default ProductQuestion
