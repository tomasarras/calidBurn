import React from "react";
import Image from "next/image";
import styles from "./product.module.css";
import Link from "next/link";

const Product = (props) => {
  const { product } = props;
  return (
    <div className={`${styles.divCard} card`}>
      <Image
        className="card-img-top"
        width={320}
        height={260}
        src={product.path}
        alt="Imagen del producto"
      />
      <div className="card-body">
        <h5 className="card-title">{product.name}</h5>
        <p className="card-text">
          {product.description}
        </p>
        <Link legacyBehavior href={`/productos/${product.name.replace(/\s+/g, '-').toLowerCase()}-${product.id}`}>
          <a className="btn btn-primary w-100">
            Ver mas
          </a>
        </Link>
      </div>
    </div>
  );
};

export default Product;
