import React, { useContext } from 'react';
import { Button, Form, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Header.css';
import Logo from '../Img/logo.png'
import { UserContext } from '../../App';
import firebase from "firebase/app";
import "firebase/auth";
const Header = () => {
 const [loggedInUSer, setLoggedInUser] = useContext(UserContext);
 const signOut = () => {
  firebase.auth().signOut()
    .then(res => {
      const userSignOut = {
        isLoggedIn: false,
        name: '',
        email: '',
        photo: '',
        error: '',
        success: false
      }
      setLoggedInUser(userSignOut);
    })
    .catch(err => {
      console.error(err);
      console.log(err.message);
    })
}
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
            {
              loggedInUSer.email ?<Button onClick={signOut} style={{color:'black'}} variant="outline-warning">Log Out</Button>
              : <Link to="/login"><Button style={{color:'black'}} variant="outline-warning">Log In</Button></Link>
            }
          </Form>
        </Navbar.Collapse>
      </div>
    </Navbar>
  );
};

export default Header;