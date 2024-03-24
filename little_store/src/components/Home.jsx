import ProductComponent from "./Product";
import Header from "./Header";
import { useContext } from "react";
import { ProductsContext } from "../App";

export const Home = () => {
  const appProducts = useContext(ProductsContext);
  return (
    <div>
      <Header />
      <h1>המוצרים שלנו</h1>
      <div className="products-container">
        {appProducts.products.map((product, index) => (
          <ProductComponent key={index} product={product} isRemove={false} />
        ))}
      </div>
    </div>
  );
};
