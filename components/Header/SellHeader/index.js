import React from 'react';
import { Container } from 'react-bootstrap';
import styles from "./SellHeader.module.css";

const HeaderSell = (props) => {
  const { title, step, amountSteps } = props;

  return (
    <div className={styles.container}>
      <Container className={styles.container}>
        <div className="text-white">
          {step &&
            <span className={`${styles.spanSteps}`}>Paso {step} de {amountSteps}</span>
          }
          <h2>{title}</h2>
        </div>
      </Container>
    </div>
  );
};

export default HeaderSell;
