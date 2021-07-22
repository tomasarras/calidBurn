import React, { useState, useRef } from "react";

const ProductForm = (props) => {
  const { onSubmit } = props;
  const inputName = useRef();
  const inputDescription = useRef();
  const inputPrice = useRef();
  const inputImage = useRef();

  const handleSumbmit = async (e) => {
    e.preventDefault();
    const name = inputName.current.value;
    const description = inputDescription.current.value;
    const price = inputPrice.current.value;
    const image = inputImage.current.files[0];

    const product = { name, description, price, image };
    await onSubmit(product);
  };

  return (
    <form onSubmit={handleSumbmit}>

      <div className="form-group">
        <label htmlFor="input-name">Nombre del producto</label>
        <input
          ref={inputName}
          type="text"
          className="form-control"
          id="input-name"
          placeholder="Producto"
        />
      </div>

      <div className="form-group">
        <label htmlFor="input-description">Descripcion del producto</label>
        <input
          ref={inputDescription}
          type="text"
          className="form-control"
          id="input-description"
          placeholder="Descripcion"
        />
      </div>

      <div className="form-group">
        <label htmlFor="input-price">Precio del producto</label>
        <input
          ref={inputPrice}
          type="number"
          className="form-control"
          id="input-price"
          min="0"
        />
      </div>

      <div className="form-group">
        <label htmlFor="input-image">Imagen del producto</label>
        <input
          type="file"
          ref={inputImage}
          className="form-control-file"
          id="input-image"
        />
      </div>
      
      <button type="submit" className="btn btn-primary mt-4">
        Crear
      </button>

    </form>
  );
};

export default ProductForm;
