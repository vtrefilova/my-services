import React, { useState, cloneElement } from 'react';
import Modal from 'react-bootstrap/Modal';
import { ModalContext }  from '../../contexts/context.js';

export const ModalWindow = ({ text, children }) => {

const [show, setShow] = useState(false);

const handleClose = () => setShow(false);
const handleShow = () => setShow(true);

return (
  <>
    {cloneElement(children.modalTrigger, { handleModal: handleShow })}

    <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>{text}</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <ModalContext.Provider value={handleClose}>
        {children.modalContent}
        </ModalContext.Provider>
      </Modal.Body>
    </Modal>
  </>
);
}