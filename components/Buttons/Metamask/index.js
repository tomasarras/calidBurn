import { useWeb3React } from "@web3-react/core";
import React from "react";
import { injected } from "../../../wallet/connectors";

const Metamask = (props) => {
  const { connectLabel, disconnectLabel, className = "" } = props;
  const { active, activate, deactivate } = useWeb3React();

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
        <button onClick={connect} className={`${active ? "d-none" : ""} ${className}`}>
          {connectLabel}
        </button>
        <button onClick={disconnect} className={`${!active ? "d-none" : ""} ${className}`}>{disconnectLabel}</button>
      </div>
    </>
  );
};

export default Metamask;
