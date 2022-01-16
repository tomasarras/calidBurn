import React from "react";

const PrimaryButton = (props) => {
  const { children, onClick = () => {}, className = "" } = props;

  return (
    <button onClick={onClick} className={`btn btn-primary ${className}`}>
      {children}
    </button>
  );
};

export default PrimaryButton;
