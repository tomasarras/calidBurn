import React from "react";
import { Form } from "react-bootstrap";
import ContainerSell from "../../components/Container/Sell";
import HeaderSell from "../../components/Header/SellHeader";
import styles from "./index.module.css";
import { useRouter } from 'next/router';

const Vender = () => {
  const router = useRouter();
  const { product } = router.query;

  const complete = (<span><Form.Control className={`${styles.inputComplete} d-inline`} type="text" placeholder="_________"/></span>);
  const optional = (<>
    <Form.Check
      inline
      label="Sí"
      name="optional"
      type="radio"
    />
    <Form.Check
      inline
      label="No"
      name="optional"
      type="radio"
    />
  </>);
  
  return (<>
    <HeaderSell step="3" amountSteps="5" title="Requisitos Para Tokenizar Escritura"/>
    <ContainerSell redirectTo={`/vender/requisitos3${product && "?product="+product}`} title="Completá los datos para la autorización" description="Completa la siguiente información para autorizarnos como transmitentes de la propiedad">
      <div>
        <h4 className="form-title">AUTORIZACIÓN DEL TRANSMITENTE</h4>
        <p>AUTORIZO a los propietarios de CalidBurn a realizar la escritura ante la Escribanía General de Gobierno de la Provincia de Buenos Aires, con relación al inmueble ubicado en el Partido de {complete} identificado según Nomenclatura Catastralmente como: {complete}.</p>

        <div className="mt-2">
          <Form.Label>Circunscripción</Form.Label>
          <Form.Control type="text" />
        </div>

        <div className="mt-2">
          <Form.Label>Sección</Form.Label>
          <Form.Control type="text" />
        </div>

        <div className="mt-2">
          <Form.Label>Quinta/ Chacra/ Fracción</Form.Label>
          <Form.Control type="text" />
        </div>

        <div className="mt-2">
          <Form.Label>Manzana</Form.Label>
          <Form.Control type="text" />
        </div>

        <div className="mt-2">
          <Form.Label>Parcela</Form.Label>
          <Form.Control type="text" />
        </div>

        <div className="mt-2">
          <Form.Label>Partida Inmobiliaria</Form.Label>
          <Form.Control type="text" />
        </div>

        <div className="mt-2">
          <Form.Label>El inmueble referenciado fue transmitido con fecha</Form.Label>
          <Form.Control className="mb-4" type="date" />
        </div>
        <h6>Operación: marcar lo que corresponda:</h6>
        <Form.Check
          inline
          label="A) Compraventa"
          type="checkbox"
        />
        <div className="ms-5"><p>(1) Precio {optional} Monto en pesos: {complete} Dólares {complete} Cotización fecha del boleto {complete} Equivalente en $ {complete} <br/> (1) Cancelado: {optional} Saldo pendiente: {complete}. Cuotas {complete}</p></div>
        <Form.Check
          inline
          label="B) Donacion"
          type="checkbox"
        />

        <Form.Check
          inline
          label="C) Afectación a Régimen de Propiedad Horizontal y adjudicación"
          type="checkbox"
        />

        <div>

          <Form.Check
            className="me-2"
            inline
            type="checkbox"
          />
          <span>D) Otros {complete}</span>
        </div>

      </div>
    </ContainerSell>
  </>);
};

export default Vender;
