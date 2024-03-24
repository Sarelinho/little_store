// Product.jsx
import '/src/Style/Products.css'
import React, { useContext } from 'react';
import { CartContext } from '../App';

const ProductComponent = ({ product, isRemove }) => {
    const cartContext = useContext(CartContext)

    const updateCart = () => {
        if(!isRemove) cartContext.setCartProducts(prevProducts => [...prevProducts, product])
        else cartContext.setCartProducts(prevProducts => prevProducts.filter(prod => prod.code !== product.code))
    }

    return (
        <div className="product">
            <div className="image-container">
                <img src={product.image} alt={product.name} />
                <div className="image-description">
                    <p>{product.description}</p>
                    <div className="price-add-to-cart">
                        <p className="price">מחיר: {product.price}</p> 
                        <button className="add-to-cart" onClick={updateCart}>{isRemove ? "הורד מהעגלה": "הוסף לעגלה"}</button> 
                    </div>
                </div>
            </div>
        </div>
    );
}
export default ProductComponent;
