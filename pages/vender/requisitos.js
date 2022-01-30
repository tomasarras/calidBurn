import React from "react";
import { Col, Form, Row } from "react-bootstrap";
import ContainerSell from "../../components/Container/Sell";
import HeaderSell from "../../components/Header/SellHeader";
import { useRouter } from 'next/router';

const Vender = () => {
  const router = useRouter();
  const { product } = router.query;

  return (<>
    <HeaderSell step="2" amountSteps="5" title="Requisitos Para Tokenizar Escritura"/>
    <ContainerSell redirectTo={`/vender/requisitos2${product && "?product="+product}`} title="Completá los datos para la escribanía" description="Utilizaremos la siguiente información para que podamos tokenizar la escritura de tu inmueble">
      <div>
        <h4 className="form-title">DATOS PERSONALES DEL TRANSMITENTE Y/O APODERADO</h4>
        <Row>
          <Col sm="12" md="6" className="mt-2">
            <Form.Label>Apellido y Nombre completo</Form.Label>
            <Form.Control type="text" />
          </Col>
          <Col sm="12" md="6" className="mt-2">
            <Form.Label>Fecha de nacimiento</Form.Label>
            <Form.Control type="date" />
          </Col>

          <Col sm="12" md="6" className="mt-2">
            <Form.Label>Nacionalidad</Form.Label>
            <Form.Control type="text" />
          </Col>

          <Col sm="12" md="6" className="mt-2">
            <Form.Label>CUIT/CUIL/CDI</Form.Label>
            <Form.Control type="text" />
          </Col>

          <Col sm="12" md="6" className="mt-2">
            <Form.Label>DNI</Form.Label>
            <Form.Control type="text" />
          </Col>

          <Col sm="12" md="6" className="mt-2">
            <Form.Label>Mail</Form.Label>
            <Form.Control type="text" />
          </Col>

          <Col sm="12" md="6" className="mt-2">
            <Form.Label>Telefono</Form.Label>
            <Form.Control type="text" />
          </Col>
        </Row>
      </div>
      <div>
        <h4 className="form-title">Estado de Familia: En caso de ser:</h4>
        <div className="mt-4">
          <Form.Label className="text-decoration-underline d-block">- Soltero/a:</Form.Label>
          <Form.Label>Nombre y apellido del padre</Form.Label>
          <Form.Control type="text" />
        </div>

        <div className="mt-4">
          <Form.Label>Nombre y apellido de la madre</Form.Label>
          <Form.Control type="text" />
        </div>

        <div className="mt-4">
          <Form.Label className="text-decoration-underline d-block">- Casado/a:</Form.Label>
          <Form.Label>Grado de Nupcias</Form.Label>
          <Form.Control type="text" />
        </div>

        <div className="mt-4">
          <Form.Label>Nombre y apellido del Cónyuge</Form.Label>
          <Form.Control type="text" />
        </div>

        <div className="mt-4">
          <Form.Label className="text-decoration-underline d-block">- Divorciado/a (deberá adjuntar copia de testimonio de la sentencia de divorcio):</Form.Label>
          <Form.Label>Grado de Nupcias</Form.Label>
          <Form.Control type="text" />
        </div>

        <div className="mt-4">
          <Form.Label>Nombre y apellido del ex Cónyuge</Form.Label>
          <Form.Control type="text" />
        </div>

        <div className="mt-4">
          <Form.Label>Testimonio de la sentencia del divorcio</Form.Label>
          <Form.Control type="file" />
        </div>

        <div className="mt-4">
          <Form.Label className="text-decoration-underline d-block">- Viudo/a:</Form.Label>
          <Form.Label>Grado de Nupcias</Form.Label>
          <Form.Control type="text" />
        </div>

        <div className="mt-4">
          <Form.Label>Nombre y apellido del fallecido</Form.Label>
          <Form.Control type="text" />
        </div>
      </div>
      <div>
        <h4 className="form-title">En caso de <span className="text-decoration-underline">UNIÓN CONVIVENCIAL</span>, determine:</h4>
        <div className="mt-4">
          <Form.Label>Nombre y apellido del conviviente</Form.Label>
          <Form.Control type="text" />
        </div>

        <div className="mt-4">
          <Form.Label>DNI</Form.Label>
          <Form.Control type="text" />
        </div>

        <div className="mt-4">
          <Form.Label>Datos de su registración:</Form.Label>
          <Form.Control type="text" />
        </div>
      </div>
    </ContainerSell>
  </>);
};

export default Vender;
