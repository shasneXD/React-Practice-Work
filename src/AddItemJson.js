import React,{useState,useEffect} from 'react'
import Product from './Product'
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';

export default function AddItemjson() {
    const [Products,setProd]=useState([]);

    useEffect(() => {
        axios.get("http://localhost:3000/products")
        .then(res=>
            {setProd(res.data)})
    })
    
     const ClickHandler=()=>{
         axios.post("http://localhost:3000/products",{id:document.getElementById("prodId").value,
                                                       name:document.getElementById("prodname").value,
                                                       des:document.getElementById("prodDes").value,
                                                    })
     }
    return (
        <div>
          <table align='center' style={{background:'pink',border: '20px solid pink'}}>
         <tr><td>Enter Product Name</td><td><input type="text" id="prodname" name="prodname" /></td></tr>      
          <br></br>
         <tr><td>Enter Product Id</td><td><input type="text" id="prodId" name="prodId" /></td></tr>
          <br></br>
          <tr><td>Enter Product Description</td><td> <input type="text" id="prodDes" name="prodDes"/></td></tr>
         <br></br>
          <button onClick={ClickHandler}>Add Item</button><br></br>
         </table>
        
        <br></br>
        <table align='center' >
        <div class="card-deck" style={
            {
             
             
            }}>
            {
                Products.map(item=>
                    <Product id={item.id} name={item.name} des={item.des}/>
                )
            }
        </div>
        </table> 
            </div>
    )
}
