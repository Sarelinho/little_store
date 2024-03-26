// Cart.jsx
import React, { useContext, useState } from "react";
import Header from "./Header";
import { CartContext } from "../App";
import {ConfirmOrder} from "./ConfirmOrder";
import "/src/Style/Cart.css";

const Cart = () => {
  const cartContext = useContext(CartContext);
  const [confirmOrder, setConfirmOrderOpen] = useState(false)
  const totalPrice = cartContext.cartProducts.reduce(
    (acc, cur) => (acc += +cur.price),
    0
  );

  const handleRemove = (id) => {
    cartContext.setCartProducts((prevProducts) =>
      prevProducts.filter((prod) => prod.id !== id)
    );
  };

  return (
    <div className="cart-content">
      <Header />
      <div className="cart-container">
        <h2>עגלת קניות</h2>
        <table className="products-table">
          <thead>
            <tr>
              <th>הסרת המוצר</th>
              <th>קוד</th>
              <th>מחיר</th>
              <th>תיאור</th>
              <th>תמונה</th>
            </tr>
          </thead>
          <tbody>
            {cartContext.cartProducts.map((product, i) => (
              <tr key={`${product.code}-${i}`}>
                <td id="removeButton" onClick={() => handleRemove(product.id)}>
                  X
                </td>
                <td>{product.code}</td>
                <td>{product.price}</td>
                <td>{product.description}</td>
                <td>
                  <img
                    src={product.image}
                    alt={product.image}
                    className="product_img"
                  />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <div className="total-price">
          <h3>סכום כולל: {totalPrice} ש"ח</h3>
          <button disabled={!cartContext?.cartProducts?.length} onClick={() => setConfirmOrderOpen(true)}>לביצוע הזמנה</button>
        </div>
        <ConfirmOrder totalPrice={totalPrice} open={confirmOrder}/>
      </div>
    </div>
  );
};

export default Cart;
