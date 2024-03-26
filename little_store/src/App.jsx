import React from "react";
import Admin from "./components/Admin";
import Cart from "./components/Cart";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Home } from "./components/Home";
import { createContext, useState } from "react";
import {defaultProducts} from './defaultProducts'



export const CartContext = createContext();
export const ProductsContext = createContext();

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home></Home>,
  },
  {
    path: "/admin",
    element: <Admin></Admin>,
  },
  {
    path: "/cart",
    element: <Cart></Cart>,
  },
]);

const App = () => {
  const [cartProducts, setCartProducts] = useState([]);
  const [products, setProducts] = useState(defaultProducts);

  return (
    <div className="app">
      <ProductsContext.Provider value={{
        products, 
        setProducts
      }}>
        <CartContext.Provider
          value={{
            cartProducts,
            setCartProducts,
          }}
        >
          <RouterProvider router={router}></RouterProvider>
        </CartContext.Provider>
      </ProductsContext.Provider>
    </div>
  );
};

export default App;
