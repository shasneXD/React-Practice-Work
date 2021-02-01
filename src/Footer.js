import React from 'react'
import {Navbar,Nav} from 'react-bootstrap'

const Footer=(props)=> {
    return(<footer
        style={{
            position: 'fixed',
            left: '0',
            bottom: '0',
            width:'100%',
            alignContent:'center'
            }}><Navbar bg="dark" variant="dark">
    <Navbar.Brand href="#home">All Rights Reserved @ Sneha Sharma</Navbar.Brand>
    
  </Navbar></footer>);
  }
  

export default Footer;