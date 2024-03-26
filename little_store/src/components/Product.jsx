// Product.jsx
import '/src/Style/Products.css'
import React, { useContext, useState } from 'react';
import { CartContext } from '../App';
import { v4 as uuidv4 } from 'uuid';


const ProductComponent = ({ product, isRemove }) => {
    const cartContext = useContext(CartContext)
    const UpdateCart = () => {
        const newProduct ={
            ...product,
            id: uuidv4()
        }
        
        if(!isRemove) cartContext.setCartProducts(prevProducts => [...prevProducts, newProduct])
        else cartContext.setCartProducts(prevProducts => prevProducts.filter(prod => prod.code !== product.code))
    }

    return (
        <div className="product">
            <div className="product-container">
                <div className="image-container">
                    <img src={product.image} alt={product.name} />
                </div>
                <div className="image-description">
                    <p>{product.description}</p>
                    <div className="price-add-to-cart">
                        <p className="price">מחיר: {product.price}</p> 
                        <button className="add-to-cart" onClick={UpdateCart}>{isRemove ? "הורד מהעגלה": "הוסף לעגלה"}</button> 
                    </div>
                </div>
            </div>
        </div>
    );
}
export default ProductComponent;
