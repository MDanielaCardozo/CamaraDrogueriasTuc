import React, { useState } from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Link, NavLink } from "react-router-dom";
import "./Menu.css";
import Logo from "../../img/logoTransp.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHouse } from "@fortawesome/free-solid-svg-icons";

function CollapsibleExample() {

  const [expanded, setExpanded] = useState(false);

  return (
    <Navbar
      expanded={expanded}
      className="navBg mt-0 pt-0"
      expand="lg"
      variant="dark"
    >
      <Container>
        <Navbar.Brand as={Link} to="/">
          <img src={Logo} alt="" width="180px" height="auto" className="py-2" />
        </Navbar.Brand>
        <Navbar.Toggle onClick={() => setExpanded(expanded ? false : "expanded")} aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="ms-auto">
            <NavLink onClick={() => setExpanded(false)} to="/" className="nav-item nav-link hovMenu">
              <FontAwesomeIcon icon={faHouse} />
            </NavLink>
            <NavLink onClick={() => setExpanded(false)} to="/socios" className="nav-item nav-link hovMenu">SOCIOS</NavLink>
            <NavLink onClick={() => setExpanded(false)} to="/sitiosOficiales" className="nav-item nav-link hovMenu">SITIOS OFICIALES</NavLink>
            <NavLink onClick={() => setExpanded(false)} to="/servicios" className="nav-item nav-link hovMenu">SERVICIOS</NavLink>
            <NavLink onClick={() => setExpanded(false)} to="/novedades" className="nav-item nav-link hovMenu">NOVEDADES</NavLink>
            <NavLink onClick={() => setExpanded(false)} to="/contacto" className="nav-item nav-link hovMenu"> CONTACTO</NavLink>
          </Nav>
          <Nav></Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default CollapsibleExample;
