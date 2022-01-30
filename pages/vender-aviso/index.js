import React from "react";
import styles from "./vender-aviso.module.css";
import PrimaryButton from "../../components/Buttons/Primary";

const VenderAviso = () => {
  
  return (
    <div className="container">
      <div className="d-flex justify-content-center">
        <div className="w-50">
          <div className={`card ${styles.card} my-5`}>
            <div className={`${styles.cardBody}`}>
              <h2 className={`text-center ${styles.warningTitle}`}>Ten en cuenta que a partir de ahora, toda la información que ingreses, será colgada a la blockchain y sólo tu y yo, tendremos acceso</h2>
              <p className={`text-center ${styles.warningDescription}`}>En caso de que por algún motivo el trámite no se vaya a efectuar, los contratos se autodestruirán</p>
              <div className="d-flex justify-content-center align-items-center mt-4">
                <PrimaryButton href="/vender">Comenzar</PrimaryButton>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VenderAviso;
