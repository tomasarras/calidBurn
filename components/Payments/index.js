import React from "react";
import { Container } from "react-bootstrap";
import styles from "./Payments.module.css";
import Link from 'next/link'

const Payments = () => {
  const Payment = ({ icon, name, href="#" }) => (
    <div className="d-flex">
      <div className={`rounded-circle d-flex justify-content-center align-items-center ${styles.logoContainer}`}>
        <img src={`./icons/payments/${icon}`} alt="icon"/>
      </div>
      <div className="d-flex align-items-center ms-2">
        <div className="d-flex flex-column">
          <span>{name}</span>
          <div>
            <Link href={href}><a className="text-primary">Ver más</a></Link>
          </div>
        </div>
      </div>
    </div>
  );
  return (
    <div className="bg-white w-100 rounded text-black">
      <Container className={`d-flex justify-content-between ${styles.container}`}>
        <Payment icon="cal.png" name="CalidBurn (CAL)"/>
        <Payment icon="lemon.png" name="Lemon Cash"/>
        <Payment icon="lemon2.png" name="Lemon Cash"/>
      </Container>
    </div>
  );
};

export default Payments;
