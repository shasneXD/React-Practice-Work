import React from 'react'
import Modal from 'react-bootstrap/Modal';

export default function ModalFunc(props) {
    const ModalHandler=()=>{
      let ProdName=document.getElementById("productname").value;
      let ProdDes=document.getElementById("productDesc").value;
      const ele={name:ProdName,desc:ProdDes}
      console.log(ele);
      props.onEdit(ele);

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
        <h4>Edit The Card</h4>
        Enter Product Name : <input type="text" id="productname" /><br></br>
        Enter Product Description: <input type="text" id="productDesc"/> <br></br>
        <button type='button' onClick={props.onHide}>Close</button> 
        <button type='button' onClick={ModalHandler}>Save</button>
      </Modal.Body>
      <Modal.Footer>
        
      </Modal.Footer>
    </Modal>
  );
}

