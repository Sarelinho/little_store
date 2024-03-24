// Cart.jsx
import React, { useContext, useState ,useEffect} from "react";
import Header from "./Header";
import { CartContext } from "../App";
import ProductComponent from "./Product";
import '/src/Style/Cart.css';

const Cart = () => {
  const cartContext = useContext(CartContext);
  const [totalPrice, setTotalPrice] = useState(0);

  const calculateTotalPrice = () => {
    let total = 0;
    cartContext.cartProducts.forEach((product) => {
      total += parseFloat(product.price);
    });
    return total;
  };

  
  useEffect(() => {
    const totalPrice = calculateTotalPrice();
    setTotalPrice(totalPrice);
  }, [cartContext.cartProducts]);

  return (
    <div className="cart-container">
    <Header />
    <div className="cart-content">
      <h2>עגלת קניות</h2>
      <div className="products-container">
        {cartContext.cartProducts.map((product) => (
          <ProductComponent key={product.code} product={product} isRemove={true} />
        ))}
      </div>
    </div>     
      <div className="total-price">
<h3 >סכום כולל: {totalPrice} ש"ח</h3>
<button>לביצוע הזמנה</button>
      </div>
    </div>
  
);
};

export default Cart;
