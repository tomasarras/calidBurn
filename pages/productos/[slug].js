import React, { useState, useEffect, useContext } from "react";
import * as productService from "../../services/ProductService";
import Image from "next/image";
import UserContext from "../../contexts/UserContext";

const SeeProduct = (props) => {
    const { product } = props;
    const { token } = useContext(UserContext);
    const [showMsgPurchased, setShowMsgPurchased] = useState(false);
    const [purchased, setPurchased] = useState(false);

    const purchaseProduct = async () => {
        await productService.purchase(product.id);
        setShowMsgPurchased(true);
        setPurchased(true);
    };

    useEffect(() => {
        if (token) {
            const verify = async () => {
                const isPurchased = await productService.isPurchased(product.id);
                setPurchased(isPurchased);
            }
            verify();
        }
    }, [token])

    return (
    <section className="container">

        <Image
            width={1200}
            height={700}
            src={product.path}
            alt="Imagen de producto"
        />

        <h1>{product.name}</h1>
        <p>{product.description}</p>
        <span>{product.price}$</span><br></br>
        {!purchased && 
            <button className="btn btn-outline-primary" onClick={purchaseProduct}>Comprar este producto</button>
        }
        {showMsgPurchased &&
            <div className="alert alert-success" role="alert">
            Compraste este producto
            </div>
        }
    </section>);
};

export async function getServerSideProps({ params, req, res, locale }) {
    const { slug } = params;
    const slugSplited = slug.split("-");
    const productId = slugSplited[slugSplited.length -1];
    const product = await productService.getById(productId);

    return {
      props: { product },
    };
  }

export default SeeProduct;