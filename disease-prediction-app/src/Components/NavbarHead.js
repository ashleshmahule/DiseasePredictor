import React from 'react';
import Navbar from 'react-bootstrap/Navbar'
import NavDropdown from 'react-bootstrap/NavDropdown'
import Nav from 'react-bootstrap/Nav'
import { Link } from "react-router-dom";
import './NavbarHead.css'

function NavbarHead() {
  return (
    <Navbar fixed="top" collapseOnSelect expand="lg" bg="primary" variant="dark">
      <Link to="/">
        <Navbar.Brand className="brand">Disease Predictor</Navbar.Brand>
      </Link>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="mr-auto">

          <Nav.Link as={Link} className="lnk" to="/DiseasePrediction">Predict Disease</Nav.Link>

          <Nav.Link as={Link} className="lnk" to="/Statistics">View Statistics</Nav.Link>
        {/* <NavDropdown title="Dropdown" id="collasible-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
            </NavDropdown> */}
        </Nav>
      <Nav>
        <Nav.Link eventKey={2} href="https://ashleshmahule.me/" className="lnk">Developer</Nav.Link>
      </Nav>
      </Navbar.Collapse>
    </Navbar >

  );
}

export default NavbarHead;