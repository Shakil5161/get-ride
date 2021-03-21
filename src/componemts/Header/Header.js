import React from 'react';
import { Button, Form, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Header.css';
import Logo from '../Img/logo.png'

const Header = () => {

  return (
    <Navbar  bg="light" expand="lg">
      <div className="container">
      <Link className=" main-menu" to="/"><Navbar.Brand > <img height="40px" src={Logo} alt="" /> <b style={{fontSize: "20px"}}>Get-Ride</b> </Navbar.Brand></Link>
        
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ml-auto">
            <Link className=" main-menu" to="/">Home</Link>
            <Link className=" main-menu" to="/destination">Destination</Link>
            <Link className=" main-menu" to="/contact">Contact</Link>
          </Nav>
          <Form inline>
          <Link to="/login"><Button style={{color:'black'}} variant="outline-warning">Login</Button></Link>
          </Form>
        </Navbar.Collapse>
      </div>
    </Navbar>
  );
};

export default Header;