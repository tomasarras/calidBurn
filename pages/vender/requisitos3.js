import React from "react";
import { Form } from "react-bootstrap";
import ContainerSell from "../../components/Container/Sell";
import HeaderSell from "../../components/Header/SellHeader";
import { useRouter } from 'next/router';

const Vender = () => {
  const router = useRouter();
  const { product } = router.query;
  
  return (<>
    <HeaderSell step="4" amountSteps="5" title="Requisitos Para Tokenizar Escritura"/>
    <ContainerSell redirectTo={`/vender/requisitos4${product && "?product="+product}`} title="Adjuntá los datos para la completar el trámite" description="Completa la siguiente información para que podamos verificar la validez del inmueble">
      <div>
        <h4 className="form-title">Justificación de tu estado civil, acompañado:</h4>
        <div className="ms-3">
          <div className="mt-4">
            <Form.Label>A. Si sos viudo/a, copia certificada o partida de defunción.</Form.Label>
            <Form.Control type="file" />
          </div>

          <div className="mt-4">
            <Form.Label>B. Si sos divorciado/a, testimonio de la sentencia judicial.</Form.Label>
            <Form.Control type="file" />
          </div>

          <div className="mt-4">
            <Form.Label>C. Si sos casado/a, copia del certificado o partida de matrimonio.</Form.Label>
            <Form.Control type="file" />
          </div>

          <div className="mt-4">
            <Form.Label>D. Si tenés union convivencial, copia con la inscripción en el Registro de las Personas.</Form.Label>
            <Form.Control type="file" />
          </div>
        </div>

        <div className="mt-4">
          <Form.Label>Fotocopia de la escritura anterior (la que está a nombre del vendedor/a o su original).</Form.Label>
          <Form.Control type="file" />
        </div>

        <div className="mt-4">
          <Form.Label>Certificado de cancelacion de deuda expedido por el vendedor/a (en caso de corresponder).</Form.Label>
          <Form.Control type="file" />
        </div>

        <div className="mt-4">
          <Form.Label>Si el inmueble se ha originado por subdivisión posterior al título de propiedad, presentá una copia del plano.</Form.Label>
          <Form.Control type="file" />
        </div>

        <h6 className="mt-4">Si para efectuar la escritura traslativa de dominio el bien se debe afectar primero a propiedad horizontal, tenés que incluir</h6>

        <div className="ms-3">
          <div className="mt-4">
            <Form.Label>A. Plano de Propiedad Horizontal entelado</Form.Label>
            <Form.Control type="file" />
          </div>

          <div className="mt-4">
            <Form.Label>B. Plantillas de coeficientes.</Form.Label>
            <Form.Control type="file" />
          </div>
        </div>

        <div className="mt-4">
          <Form.Label>Fotocopia de un impuesto de ARBA o constancia de valuación fiscal.</Form.Label>
          <Form.Control type="file" />
        </div>
      </div>
    </ContainerSell>
  </>);
};

export default Vender;
