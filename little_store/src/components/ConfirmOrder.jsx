import React, { useContext, useState } from "react";
import { CartContext } from "../App";


export const ConfirmOrder = ({ totalPrice, open }) => {
  const cartContext = useContext(CartContext);
  const [address, setAddress] = useState('')
  const [userId, setUserId] = useState('')
  const disabled = !userId || !address
  return (
    <dialog open={open} style={{width: '500px', height: '300px'}}>
      <p>ביצוע הזמנה</p>
      <form method="dialog" onSubmit={() => cartContext.setCartProducts([])} style={{display: 'flex',flexDirection:'column', gap: '20px'}}>
        <input type="text" name="address" placeholder="כתובת" value={address} onChange={(e) => setAddress(e.target.value)}/>
        <input type="text" name="userId" placeholder="תעודת זהות" value={userId} onChange={(e) => setUserId(e.target.value)}/>
        <div>מחיר סופי: {totalPrice}</div>
        <button disabled={disabled}>OK</button>
      </form>
    </dialog>
  );
};
