import React, { useState, useContext } from 'react'
import gallery1 from '../pictures/gallery/gallery1.jpg';
import CartContext from '../context/cartContext';

const Products = ({ productList }) => {
    const cartContext = useContext(CartContext);
    const { addCart, toBase64 } = cartContext;
    
    let [productListDisplay, setDisplayDescriptionValue] = useState(productList);

    const displayDescription =  (i, show) => {
        setDisplayDescriptionValue(prevState => {
            const productListUpdated = [...prevState];
            productListUpdated[i].displayDescription = show;
            return productListUpdated;
        });
    }

    return (
        <div className="products">
            <div className="container">
                {productList && productList.map((item, i) => (
                    i % 3 == 0 && <div className="rows" key={i}>
                    <div className="product" key={i}>
                        <div className="productPhotoContainer" onMouseDown={() => displayDescription(i, true)} onMouseUp={() => displayDescription(i, false)}>
                            {(productListDisplay[i].displayDescription == undefined || !productListDisplay[i].displayDescription) &&
                                <img className='productPhoto' src={`data:${productList[i].image.data.contentType};base64,${toBase64(productList[i].image.data.data)}`} alt={productList[i].description}/>
                            }
                            {productListDisplay[i].displayDescription &&
                                <div className="description">{productList[i].desc}</div>
                            }
                        </div>
                        <div className="productName">
                            {productList[i].name}
                        </div>
                        <button className="btn" onClick={() => addCart(productList[i])}>{productList[i].cost}</button>
                    </div>
                    {productList[i+1] && <div className="product" key={i+1}>
                        <div className="productPhotoContainer" onMouseDown={() => displayDescription(i+1, true)} onMouseUp={() => displayDescription(i+1, false)}>
                            {(productListDisplay[i+1].displayDescription == undefined || !productListDisplay[i+1].displayDescription) &&
                                <img className='productPhoto' src={`data:${productList[i+1].image.data.contentType};base64,${toBase64(productList[i+1].image.data.data)}`} alt={productList[i+1].description} />
                            }
                            {productListDisplay[i+1].displayDescription &&
                                <div className="description">{productList[i+1].desc}</div>
                            }
                        </div>
                        <div className="productName">
                            {productList[i].name}
                        </div>
                        <button className="btn" onClick={() => addCart(productList[i+1])}>{productList[i].cost}</button>
                    </div>}
                    {productList[i+2] && <div className="product" key={i+2}>
                        <div className="productPhotoContainer" onMouseDown={() => displayDescription(i+2, true)} onMouseUp={() => displayDescription(i+2, false)}>
                            {(productListDisplay[i+2].displayDescription == undefined || !productListDisplay[i+2].displayDescription) &&
                                <img className='productPhoto' src={`data:${productList[i+2].image.data.contentType};base64,${toBase64(productList[i+2].image.data.data)}`} alt={productList[i+2].description} />
                            }
                            {productListDisplay[i+2].displayDescription &&
                                <div className="description">{productList[i+2].desc}</div>
                            }
                        </div>
                        <div className="productName">
                            {productList[i+2].name}
                        </div>
                        <button className="btn" onClick={() => addCart(productList[i+2])}>{productList[i+2].cost}</button>
                    </div> }
                </div>
                ))}
                {/* <div className="rows">
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
                        <button className="btn" onClick={() => addCart({name: 'Mocha Ice Cream',
                                                                        description: 'Freshly made mocha icecream specially stored to keep it extremly fresh',
                                                                        cost: 9.99,
                                                                        quantity: 1
                                                                        })}>Add To Cart</button>
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
                </div> */}
            </div>
        </div>
    )
}

export default Products
