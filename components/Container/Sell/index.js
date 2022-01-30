import React, { Children } from 'react';
import { Container } from 'react-bootstrap';
import PrimaryButton from '../../Buttons/Primary';
import styles from './ContainerSell.module.css';
import { useRouter } from 'next/router';

const ContainerSell = (props) => {
  const { children, title, description, redirectTo, onConfirm } = props;
  const arrayChildren = Children.toArray(children);
  const router = useRouter();


  const handleConfirm = async () => {
    const href = await onConfirm();
    if (href) {
      router.push(href);
    }
  }

  return (
    <div className={styles.container}>
      <Container>
        <div className="d-flex justify-content-center">
          <div className={styles.container}>
            <div className={`card ${styles.card} my-5`}>
              <div className={`px-5 pt-5 pb-3`}>
                <h4 className={styles.title}>{title}</h4>
                <p className={styles.description}>{description}</p>
              </div>
              <hr/>
              {arrayChildren.map((child, index) => (<div key={index}>
                <div className={`p-5 pt-1`}>
                  {child}
                </div>
                <hr/>
              </div>))}
              <div className="p-5 d-flex flex-row-reverse">
                {onConfirm
                  ? <PrimaryButton onClick={handleConfirm}>Confirmar</PrimaryButton>
                  : <PrimaryButton href={redirectTo}>Confirmar</PrimaryButton>
                }
              </div>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default ContainerSell;
