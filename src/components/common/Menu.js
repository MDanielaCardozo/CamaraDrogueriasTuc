import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Link, NavLink } from "react-router-dom";
import "./Menu.css";
import Logo from "../../img/logoTransp.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHouse } from "@fortawesome/free-solid-svg-icons";

function CollapsibleExample() {
  return (
    <Navbar
      collapseOnSelect
      className="navBg mt-0 pt-0"
      expand="lg"
      variant="dark"
    >
      <Container>
        <Navbar.Brand as={Link} to="/">
          <img src={Logo} alt="" width="180px" height="auto" className="py-2" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="ms-auto">
            <NavLink to="/" className="nav-item nav-link hovMenu">
              <FontAwesomeIcon icon={faHouse} />
            </NavLink>
            <Nav.Link href="#features">SOCIOS</Nav.Link>
            <Nav.Link href="#pricing">SITIOS OFICIALES</Nav.Link>
            <Nav.Link href="#deets">SERVICIOS</Nav.Link>
            <Nav.Link href="#deets">NOVEDADES</Nav.Link>
            <Nav.Link href="#deets"> CONTACTO</Nav.Link>
          </Nav>
          <Nav></Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default CollapsibleExample;
