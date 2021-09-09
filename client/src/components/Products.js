import React, { useState } from 'react'
import gallery1 from '../pictures/gallery/gallery1.jpg';
import gallery2 from '../pictures/gallery/gallery2.jpg';

const Products = ({ products }) => {
    const productList = [{
        name: "Freshly Baked Cupcakes",
        description: "A 12 pack of the most amazing freshly baked muffins",
        displayDescription: false
    }];
    
    let [displayDescriptionValue, setDisplayDescriptionValue] = useState(false);
    const name = "Freshly Baked Cupcakes";
    const description = "A 12 pack of the most amazing freshly baked muffins";

    const displayDescription = (name, show) => {
        setDisplayDescriptionValue(show);
    }

    return (
        <div className="products">
            {
            <div className="container">
                <div className="rows">
                    <div className="product">
                        <div className="productPhotoContainer" onMouseDown={() => displayDescription("Freshly Baked Cupcakes", true)} onMouseUp={() => displayDescription("Freshly Baked Cupcakes", false)}>
                            {!displayDescriptionValue &&
                                <img className='productPhoto' src={gallery1} alt="gallery1" />
                            }
                            {displayDescriptionValue &&
                                <div className="description">{description}</div>
                            }
                        </div>
                        <div className="productName">
                            Freshly Baked Cupcakes
                        </div>
                        <button className="btn">Add To Cart</button>
                    </div>
                    <div className="product">
                        <div className="productPhotoContainer">
                            <img className='productPhoto' src={gallery2} alt="gallery1" />
                        </div>
                        <div className="productName">
                            Mocha Ice Cream
                        </div>
                        <div className="productName">
                            
                        </div>
                        <button className="btn">$9.99</button>
                    </div>
                    <div className="product">
                        <div className="productPhotoContainer">
                            <img className='productPhoto' src={gallery1} alt="gallery1" />
                        </div>
                        <div className="productName">
                            Freshly Baked Cupcakes
                        </div>
                        <button className="btn">Add To Cart</button>
                    </div>
                </div>
                <div className="rows">
                    <div className="product">
                        <div className="productPhotoContainer">
                            <img className='productPhoto' src={gallery1} alt="gallery1" />
                        </div>
                        <div className="productName">
                            Freshly Baked Cupcakes
                        </div>
                        <button className="btn">Add To Cart</button>
                    </div>
                    <div className="product">
                        <div className="productPhotoContainer">
                            <img className='productPhoto' src={gallery2} alt="gallery1" />
                        </div>
                        <div className="productName">
                            Mocha Ice Cream
                        </div>
                        <button className="btn">Add To Cart</button>
                    </div>
                    <div className="product">
                        <div className="productPhotoContainer">
                            <img className='productPhoto' src={gallery1} alt="gallery1" />
                        </div>
                        <div className="productName">
                            Freshly Baked Cupcakes
                        </div>
                        <button className="btn">Add To Cart</button>
                    </div>
                </div>
            </div>
        }
        </div>
    )
}

export default Products
