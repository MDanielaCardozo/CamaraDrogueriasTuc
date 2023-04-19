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
            <NavLink to="/socios" className="nav-item nav-link hovMenu">SOCIOS</NavLink>
            <NavLink to="/sitiosOficiales" className="nav-item nav-link hovMenu">SITIOS OFICIALES</NavLink>
            <NavLink to="/servicios" className="nav-item nav-link hovMenu">SERVICIOS</NavLink>
            <NavLink to="/novedades" className="nav-item nav-link hovMenu">NOVEDADES</NavLink>
            <NavLink to="/contacto" className="nav-item nav-link hovMenu"> CONTACTO</NavLink>
          </Nav>
          <Nav></Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default CollapsibleExample;
