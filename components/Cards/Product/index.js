import React from "react";
import { Card } from "react-bootstrap";
import styles from "./Product.module.css";

const ProductCard = (props) => {
  const { previewImage, title, category } = props;

  return (
    <Card style={{ width: '255px', height: '450px' }} className="text-black">
      <Card.Img className="p-2" variant="top" src={previewImage} />
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <span>{category}</span>
      </Card.Body>
      <Card.Footer className={`mb-2 bg-white d-flex justify-content-center align-items-center ${styles.footer}`}>
        <button className={styles.buttonAddCart}>Add to cart</button>
      </Card.Footer>
    </Card>
  );
};

export default ProductCard;
