import React from "react";
import { Container } from "react-bootstrap";
import Payments from "../components/Payments";
import SwiperCatalogs from "../components/Swipers/Catalogs";
import SwiperHome from "../components/Swipers/Home";
import SwiperOffers from "../components/Swipers/Offers";

export default function Home() {

  return (
    <Container className="text-white mb-4">
      <SwiperHome />

      <h3 className="my-4">Elegí como pagar</h3>
      <Payments/>

      <h3 className="my-4">Ofertas</h3>
      <SwiperOffers/>

      <h3 className="my-4">Catálogos</h3>
      <SwiperCatalogs/>
    </Container>
  );
}
