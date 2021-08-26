import React, { useState } from "react";
import Modal from "react-modal";

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
  },
};
Modal.setAppElement("#root");

export const CalendarModal = () => {
  const [isOpen, setIsOpen] = useState(true);

  const closeModal = () => {
    setIsOpen(false);
  };

  return (
    <Modal
      isOpen={isOpen}
      style={customStyles}
      onRequestClose={closeModal}
      className="modal"
      overlayClassName="modal-fondo"
      closeTimeoutMS={200}
      //   ariaHideApp={ !process.env.NODE_ENV === 'test' }
    >
      <h1>Hola Mundo</h1>
      <hr />
      <span>Hola de nuevo</span>
    </Modal>
  );
};
