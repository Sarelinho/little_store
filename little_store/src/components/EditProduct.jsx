import { useContext, useState } from "react";
import { ProductsContext } from "../App";

export const EditProduct = ({ closeDialog }) => {
  const appProducts = useContext(ProductsContext);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [codeSearch, setCodeSearch] = useState("");

  const searchProduct = () => {
    const productIndex = appProducts.products.findIndex(
      (p) => p.code === codeSearch.toString()
    );
    if (!productIndex || productIndex < 0) return;
    setSelectedProduct(appProducts.products[productIndex]);
  };

  const updateProduct = (event) => {
    event.preventDefault();
    const editableProducts = [...appProducts.products];
    const productIndex = editableProducts.findIndex(
      (p) => p.code === selectedProduct.code
    );
    editableProducts[productIndex] = {
      ...editableProducts[productIndex],
      price: event.target.price.value ?? editableProducts[productIndex].price,
      description:
        event.target.description.value ??
        editableProducts[productIndex].description,
    };
    appProducts.setProducts(editableProducts);

  };

  return (
    <div>
      <input
        type="text"
        name="search"
        id="searchProduct"
        placeholder="חפש מוצר"
        value={codeSearch}
        onChange={(e) => {
          setCodeSearch(e.target.value);
        }}
      />
      <button onClick={() => searchProduct()}>חיפוש</button>
      {selectedProduct && (
        <div style={{backgroundColor:'red', width: '500px'}}>
          <form
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "30px",
              flex: 1,
            }}
            onSubmit={(event) => updateProduct(event)}
          >
            <input
              type="text"
              name="price"
              defaultValue={selectedProduct.price}
            />
            <input
              type="text"
              name="description"
              defaultValue={selectedProduct.description}
            />
            <button>סיום עריכה</button>
          </form>
        </div>
      )}
    </div>
  );
};
