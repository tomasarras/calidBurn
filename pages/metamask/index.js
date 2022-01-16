import { useWeb3React } from "@web3-react/core";
import React from "react";
import PrimaryButton from "../../components/Buttons/Primary";
import { injected } from "../../wallet/connectors";

const Metamask = () => {
  const { active, account, activate, deactivate } = useWeb3React();

  const connect = async () => {
    try {
      await activate(injected);
    } catch (e) {
      console.log(e);
    }
  };

  const disconnect = () => {
    try {
      deactivate();
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <>
      <div className="d-flex flex-column justify-content-center align-items-center">
        <PrimaryButton onClick={connect} className="mb-4">
          Conectar con metamask
        </PrimaryButton>
        {active ? (
          <span className="mb-4">{account}</span>
        ) : (
          <span className="mb-4">No conectado</span>
        )}
        <PrimaryButton onClick={disconnect}>Desconectar metamask</PrimaryButton>
      </div>
    </>
  );
};

export default Metamask;
