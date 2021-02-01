import React from 'react'
import {Navbar,Nav} from 'react-bootstrap'

const Header=(props)=> {
    return(<header><Navbar bg="dark" variant="dark">
    <Navbar.Brand href="#home">Navbar</Navbar.Brand>
    <Nav className="mr-auto">
      <Nav.Link href="#home">Home</Nav.Link>
      <Nav.Link href="#features">Contact Us</Nav.Link>
    </Nav>
  </Navbar></header>);
  }
  

export default Header;