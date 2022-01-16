import React from "react";

const SecondaryButton = (props) => {
  const { children, onClick = () => {}, className = "" } = props;

  return (
    <button
      onClick={onClick}
      className={`btn btn-outline-primary ${className}`}
    >
      {children}
    </button>
  );
};

export default SecondaryButton;
