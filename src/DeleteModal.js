import React from 'react'
import Modal from 'react-bootstrap/Modal';

export default function ModalFunc(props) {
    const ClickHandler=()=>{
        props.onDelete();
        
      }
    return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Modal heading
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <p>Are you Sure You want to delete the Data</p>
        <button type='button' onClick={props.onHide}>No</button> 
        <button type='button' onClick={ClickHandler}>Yes</button>
      </Modal.Body>
      <Modal.Footer>
        
      </Modal.Footer>
    </Modal>
  );
}

