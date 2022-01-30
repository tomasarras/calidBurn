import React, { useCallback, useState } from "react";
import { Col, Form, Row } from "react-bootstrap";
import ContainerSell from "../../components/Container/Sell";
import HeaderSell from "../../components/Header/SellHeader";
import Dropzone from 'react-dropzone'
import styles from "./index.module.css";
import { create } from "../../services/ProductService";

const Vender = () => {
  const [images, setImages] = useState([]);
  const [type, setType] = useState("Departamento");
  const [cantidadDormitorios, setCantidadDormitorios] = useState("");
  const [superficie, setSuperficie] = useState("");
  const [ambientes, setAmbientes] = useState("");
  const [baños, setBaños] = useState("");

  const onDrop = useCallback(acceptedFiles => {
    setImages(acceptedFiles);
  }, []);

  const onConfirm = async () => {
    const data = {};
    if (images.length > 0) {
      const image = images[0];
      data.image = image;
      data.imageLocalUrl = window.URL.createObjectURL(image);
      localStorage.setItem("imageLocalUrl", data.imageLocalUrl);
      data.name = `${type} con ${cantidadDormitorios} dormitorios`;
      data.description = `${data.name}, de ${superficie}m² con ${ambientes} ambientes y ${baños} baños`;
      const productCreated = await create(data);
      return "/vender/requisitos?product=" + productCreated.id;
    } else {
      return "/vender/requisitos";
    }
  }

  return (<>
    <HeaderSell step="1" amountSteps="5" title="Empezá describiendo el inmueble"/>
    <ContainerSell onConfirm={onConfirm} redirectTo="/vender/requisitos" title="Completá las características del inmueble" description="Tendrás mejor ubicación en los resultados de búsqueda y los interesados tendrán toda la información que necesitan.">
      <div>
        <div className="mt-4">
          <Form.Label>¿A qué categoría pertenece? *</Form.Label>
          <Form.Select value={type} onChange={(e) => setType(e.target.value)}>
            <option value="Departamento">Departamentos</option>
            <option value="Casa">Casas</option>
            <option value="Casa">Campos</option>
            <option value="Cochera">Cocheras</option>
            <option value="Consultorio">Consultorios</option>
            <option value="Depositos y galpones">Depositós y Galpones</option>
            <option value="Fondos de Comercio">Fondos de Comercio</option>
            <option value="Locales">Locales</option>
            <option value="Oficinas">Oficinas</option>
            <option value="PH">PH</option>
            <option value="Quintas">Quintas</option>
            <option value="Terrenos y Lotes">Terrenos y Lotes</option>
          </Form.Select>
        </div>

        <div className="mt-4">
          <Form.Label className="d-block" htmlFor="vender-alquilar">¿Vas a vender o alquilar?</Form.Label>
          <Form.Check
            inline
            label="Vender"
            name="vender-alquilar"
            type="radio"
          />
          <Form.Check
            inline
            label="Alquilar"
            name="vender-alquilar"
            type="radio"
          />
          <Row>
            <Col sm="12" md="6" className="mt-2">
              <Form.Label>Superficie total *</Form.Label>
              <Form.Control value={superficie} onChange={(e) => setSuperficie(e.target.value)} type="number" placeholder="m²" />
            </Col>

            <Col sm="12" md="6" className="mt-2">
              <Form.Label>Superficie cubierta *</Form.Label>
              <Form.Control type="number" placeholder="m²" />
            </Col>

            <Col sm="12" md="6" className="mt-2">
              <Form.Label>Ambientes *</Form.Label>
              <Form.Control value={ambientes} onChange={(e) => setAmbientes(e.target.value)} type="number" />
            </Col>

            <Col sm="12" md="6" className="mt-2">
              <Form.Label>Dormitorios *</Form.Label>
              <Form.Control value={cantidadDormitorios} onChange={(e) => setCantidadDormitorios(e.target.value)} type="number" />
            </Col>

            <Col sm="12" md="6" className="mt-2">
              <Form.Label>Baños *</Form.Label>
              <Form.Control value={baños} onChange={(e) => setBaños(e.target.value)} type="number" />
            </Col>

            <Col sm="12" md="6" className="mt-2">
              <Form.Label>Cocheras *</Form.Label>
              <Form.Control type="number" />
            </Col>

            <Col sm="12" md="6" className="mt-2">
              <Form.Label>Bodegas</Form.Label>
              <Form.Control type="text" />
            </Col>

            <Col sm="12" md="6" className="mt-2">
              <Form.Label>Cantidad de pisos</Form.Label>
              <Form.Control type="number" />
            </Col>

            <Col sm="12" md="6" className="mt-2">
              <Form.Label>Departamentos por piso</Form.Label>
              <Form.Control type="number" />
            </Col>

            <Col sm="12" md="6" className="mt-2">
              <Form.Label>Número de piso de la ciudad</Form.Label>
              <Form.Control type="text" />
            </Col>

            <Col sm="12" md="6" className="mt-2">
              <Form.Label>Disposición</Form.Label>
              <Form.Select aria-label="Disposición">
                <option>Elegir</option>
                <option>Contrafrente</option>
                <option>Frente</option>
                <option>Interno</option>
                <option>Lateral</option>
              </Form.Select>
            </Col>

            <Col sm="12" md="6" className="mt-2">
              <Form.Label>Orientación</Form.Label>
              <Form.Select aria-label="Orientación">
                <option>Elegir</option>
                <option>Sur</option>
                <option>Oeste</option>
                <option>Norte</option>
                <option>Este</option>
              </Form.Select>
            </Col>

            <Col sm="12" md="6" className="mt-2">
              <Form.Label>Antigüedad</Form.Label>
              <Form.Control type="date" />
            </Col>

            <Col sm="12" md="6" className="mt-2">
              <Form.Label>Código de la propiedad</Form.Label>
              <Form.Control type="text" />
            </Col>

            <Col sm="12" md="6" className="mt-2">
              <Form.Label className="d-block">Apto crédito</Form.Label>
              <Form.Check
                inline
                label="Sí"
                name="apto-credito"
                type="radio"
              />
              <Form.Check
                inline
                label="No"
                name="apto-credito"
                type="radio"
              />
            </Col>

            <Col sm="12" md="6" className="mt-2">
              <Form.Label className="d-block">Apto profesional</Form.Label>
              <Form.Check
                inline
                label="Sí"
                name="apto-profesional"
                type="radio"
              />
              <Form.Check
                inline
                label="No"
                name="apto-profesional"
                type="radio"
              />
            </Col>

            <Col sm="12" md="6" className="mt-2">
              <Form.Label className="d-block">Dependencia de servicio</Form.Label>
              <Form.Check
                inline
                label="Sí"
                name="dependencia"
                type="radio"
              />
              <Form.Check
                inline
                label="No"
                name="dependencia"
                type="radio"
              />
            </Col>

            <Col sm="12" md="6" className="mt-2">
              <Form.Label className="d-block">Jardin</Form.Label>
              <Form.Check
                inline
                label="Sí"
                name="jardin"
                type="radio"
              />
              <Form.Check
                inline
                label="No"
                name="jardin"
                type="radio"
              />
            </Col>

            <Col sm="12" md="6" className="mt-2">
              <Form.Label className="d-block">Parrilla</Form.Label>
              <Form.Check
                inline
                label="Sí"
                name="parrilla"
                type="radio"
              />
              <Form.Check
                inline
                label="No"
                name="parrilla"
                type="radio"
              />
            </Col>

            <Col sm="12" md="6" className="mt-2">
              <Form.Label className="d-block">Pileta</Form.Label>
              <Form.Check
                inline
                label="Sí"
                name="pileta"
                type="radio"
              />
              <Form.Check
                inline
                label="No"
                name="pileta"
                type="radio"
              />
            </Col>

            <Col sm="12" md="6" className="mt-2">
              <Form.Label className="d-block">Terraza</Form.Label>
              <Form.Check
                inline
                label="Sí"
                name="terraza"
                type="radio"
              />
              <Form.Check
                inline
                label="No"
                name="terraza"
                type="radio"
              />
            </Col>

            <Col sm="12" md="6" className="mt-2">
              <Form.Label className="d-block">Toilette</Form.Label>
              <Form.Check
                inline
                label="Sí"
                name="toilette"
                type="radio"
              />
              <Form.Check
                inline
                label="No"
                name="toilette"
                type="radio"
              />
            </Col>


          </Row>
        </div>
      </div>
      <div>
        <h4 className="form-title">Otras características</h4>
        <p className="m-0">Agregá más detalles del inmueble para que los interesados lo conozcan mejor</p>
      </div>
      <div>
        <h6>Servicios</h6>
        <Row>
          <Col sm="12" md="6" className="mt-2">
            <Form.Check
              inline
              label="Acceso a internet"
              type="checkbox"
            />
          </Col>

          <Col sm="12" md="6" className="mt-2">
            <Form.Check
              inline
              label="Luz eléctrica"
              type="checkbox"
            />
          </Col>

          <Col sm="12" md="6" className="mt-2">
            <Form.Check
              inline
              label="Gas natural"
              type="checkbox"
            />
          </Col>

          <Col sm="12" md="6" className="mt-2">
            <Form.Check
              inline
              label="Agua corriente"
              type="checkbox"
            />
          </Col>

          <Col sm="12" md="6" className="mt-2">
            <Form.Check
              inline
              label="Línea telefónica"
              type="checkbox"
            />
          </Col>
        </Row>
      </div>
      <div>
        <h6>Seguridad</h6>
        <Row>
          <Col sm="12" md="6" className="mt-2">
            <Form.Check
              inline
              label="Seguridad 24 horas"
              type="checkbox"
            />
          </Col>

          <Col sm="12" md="6" className="mt-2">
            <Form.Check
              inline
              label="Sistema contra insendio"
              type="checkbox"
            />
          </Col>
        </Row>
      </div>
      <div>
        <h6>Arrastra imagenes del inmueble</h6>
        <span>.jpg .png .gif .zip .pdf .docx</span>
        <Dropzone onDrop={onDrop}>
          {({getRootProps, getInputProps}) => (
            <section className={`mt-4 ${styles.dropzone}`}>
              <div {...getRootProps()}>
                <input {...getInputProps()} />
                <div className="d-flex align-items-center p-2 flex-column">
                  <h4 className="d-block">Arrastra archivos aqui</h4>
                  <span>O</span>
                  <span className={styles.browseFiles}>Elegir archivos</span>
                </div>
              </div>
            </section>
          )}
        </Dropzone>
      </div>  

      <div>
        <h6>Arrastra imagenes de los planos del inmueble</h6>
        <span>.jpg .png .gif .zip .pdf .docx</span>

        <Dropzone>
          {({getRootProps, getInputProps}) => (
            <section className={`mt-4 ${styles.dropzone}`}>
              <div {...getRootProps()}>
                <input {...getInputProps()} />
                <div className="d-flex align-items-center p-2 flex-column">
                  <h4 className="d-block">Arrastra archivos aqui</h4>
                  <span>O</span>
                  <span className={styles.browseFiles}>Elegir archivos</span>
                </div>
              </div>
            </section>
          )}
        </Dropzone>
      </div>    
    </ContainerSell>
  </>);
};

export default Vender;
