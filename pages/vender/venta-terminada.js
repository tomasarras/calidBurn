import { useRouter } from "next/router";
import React, { useEffect } from "react";
import ContainerSell from "../../components/Container/Sell";
import HeaderSell from "../../components/Header/SellHeader";


const VentaTerminada = () => {
  const router = useRouter();
  const { hash } = router.query;

  

  useEffect(() => {
  }, [hash])
  
  
  return (<>
    <HeaderSell title="Requisitos Para Tokenizar Escritura"/>
    <ContainerSell redirectTo="/" title="¡Felicitaciónes! se completo el contrato" description={<span>Este es el hash que se genero: <a href={hash}>{hash}</a></span>}>
    </ContainerSell>
  </>);
};

export default VentaTerminada;
