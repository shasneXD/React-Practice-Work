import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import ModalFunc from './ModalFunc'
import axios from 'axios';
import DeleteModal from './DeleteModal'
import { Modal } from 'bootstrap';


export default function Product(props) {

    const [modalShow, setModalShow] = React.useState(false);
    const [deleteShow,setDeleteModal] = React.useState(false);

    const UpdateClicker = (e) => {

         const employee = {
             name: e.name,
             des: e.desc
         }
         console.log(employee)
         axios.put('http://localhost:3000/products/'+props.id, employee)
        .then(res => console.log(res.data))
        .catch(error => {
            console.log(error);
        });
         setModalShow(false)
    }

    const DeleteData = () =>{
        axios.delete('http://localhost:3000/products/'+props.id)
        axios.get('http://localhost:3000/products/'+props.id).then(res=>{
            console.log(res.data)
        })
        setDeleteModal(false)
    }

    return (
        <div>
        <ModalFunc
        show={modalShow}
        onHide={() => setModalShow(false)}
        onEdit={UpdateClicker}
      />
      <DeleteModal 
        show={deleteShow}
        onHide={() => setDeleteModal(false)}
        onDelete={DeleteData}
      />
        <div class="card text-white bg-primary mb-3" >
        <div class="card-header"><h5>{props.name}</h5></div>
        <div class="card-body">
            <h5 class="card-title">Id : {props.id}</h5>
            <p class="card-text">Description ---- {props.des} </p>
        </div>

        <div class="btn-group">
        <button type="button" class="btn btn-secondary" onClick={() => setModalShow(true)}>Edit</button>
        <button type="button" class="btn btn-secondary" onClick={() => setDeleteModal(true)}>Delete</button>
        </div>
        </div>
        </div>
    )
}