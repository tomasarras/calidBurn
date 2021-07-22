import React, { useState, useEffect, useContext } from "react";
import CustomModal from "../../components/CustomModal/CustomModal";
import ProductForm from "../../components/ProductForm/ProductForm";
import ProductList from "../../components/ProductList/ProductList";
import UserContext from "../../contexts/UserContext";
import * as productService from "../../services/ProductService";

const MyProductsPublished = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const [products, setProducts] = useState([]);
  const { token } = useContext(UserContext);

  const toggleModal = () => setModalOpen(!modalOpen);

  useEffect(() => {
    if (token) {
      const fetchData = async () => {
        const newProducts = await productService.getPublished(0, 10);
        setProducts(newProducts);
      };
      
      fetchData();
    }
  }, [token])

  const createProduct = async (product) => {
    const newProduct = await productService.create(product);
    setProducts([...products, newProduct]);
    toggleModal();
  }

  return <>
    <button className="btn btn-outline-primary" onClick={toggleModal}>Crear producto</button>
    <CustomModal open={modalOpen} toggle={toggleModal} modalTitle="Ingresa los datos del producto">
      <ProductForm onSubmit={createProduct}/>
    </CustomModal>
    <ProductList products={products}/>
  </>;
};

export default MyProductsPublished;
