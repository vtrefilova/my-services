import React, { useState, createContext } from 'react';
import Modal from 'react-bootstrap/Modal';
import styles from './styles/Modal.module.css';
export const ModalContext = createContext({});

export const ModalWindow = (props) => {

const [show, setShow] = useState(false);

const handleClose = () => setShow(false);
const handleShow = () => setShow(true);
const { text, children} = props;


return (
  <>
    <div onClick={handleShow}>
    {children.modalTrigger}
    </div>
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