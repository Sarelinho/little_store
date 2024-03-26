import React, { useState } from "react";
import Header from "./Header";
import { useContext } from "react";
import { ProductsContext } from "../App";
import { EditProduct } from "./EditProduct";
import "/src/Style/Admin.css";

const Admin = () => {
  const appProducts = useContext(ProductsContext);
  const [openEdit, setOpenEdit] = useState(false);
  const [openAddProducts, setOpenProducts] = useState(false);
 
  const [newProduct, setNewProduct] = useState({
    code: "",
    description: "",
    price: "",
    image: "",
  });

  // const handleRemove = (code) => {
  //   appProducts.setProducts((prevProducts) =>
  //     prevProducts.filter((p) => p.code !== code)
  //   );
  // };

  // const handleEdit = (product) => {
  //   setOpenEdit(true);
  //   setSelectedProduct(product);
  // };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewProduct((prevProduct) => ({
      ...prevProduct,
      [name]: value,
    }));
  };

  const handleAddProduct = () => {
    console.log("New product:", newProduct);
    appProducts.setProducts((prevProducts) => [...prevProducts, newProduct]);
  };

  return (
    <div className="admin-container">
      <Header />
      <div className="sidebar">
        <div
          className="sidebar-button"
          onClick={() => {
            setOpenEdit(false);
            setOpenProducts(true);
          }}
        >
          הוספת מוצר חדש
        </div>
        <div
          className="sidebar-button"
          onClick={() => {
            setOpenProducts(false);
            setOpenEdit(true);
          }}
        >
          עריכת מוצר
        </div>
      </div>
      <div className="admin-content">
        {openAddProducts && (
          <>
            <h2>הוספת מוצר חדש</h2>
            <form>
              <label htmlFor="code">קוד מוצר:</label>
              <input
                type="text"
                id="code"
                name="code"
                value={newProduct.code}
                onChange={handleInputChange}
              />

              <label htmlFor="description">הסבר:</label>
              <input
                type="text"
                id="description"
                name="description"
                value={newProduct.description}
                onChange={handleInputChange}
              />

              <label htmlFor="price">מחיר:</label>
              <input
                type="text"
                id="price"
                name="price"
                value={newProduct.price}
                onChange={handleInputChange}
              />

              <label htmlFor="image">כתובת תמונה:</label>
              <input
                type="text"
                id="image"
                name="image"
                value={newProduct.image}
                onChange={handleInputChange}
              />

              <button type="button" onClick={handleAddProduct}>
                הוסף מוצר
              </button>
            </form>
          </>
        )}
        {openEdit &&<EditProduct
          closeDialog={() => {
            setSelectedProduct(null);
            setOpenEdit(false);
          }}
        />}
      </div>
    </div>
  );
};

export default Admin;
