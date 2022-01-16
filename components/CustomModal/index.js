import React from "react";
import Modal from "react-bootstrap/Modal";

const CustomModal = (props) => {
  const { children, open, toggle, modalTitle, size = "sm" } = props;

  return (
    <Modal show={open} onHide={toggle} size={size}>
      <Modal.Header closeButton>
        <Modal.Title>{modalTitle}</Modal.Title>
      </Modal.Header>
      <Modal.Body>{children}</Modal.Body>
    </Modal>
  );
};

export default CustomModal;
