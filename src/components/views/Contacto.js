import React from "react";
// import { useState } from "react";
import "../views/Contacto.css";
import { Row, Col, Form, Button } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEnvelope,
  faLocationDot,
  faPhone,
} from "@fortawesome/free-solid-svg-icons";
import MapaGoogle from "./MapaGoogle";

const Contacto = () => {
  // const [nombre, setnombre] = useState("");
  // const [email, setemail] = useState("");

  return (
    <div className="bgColor py-5">
      <section className="container">
        <h2 className="my-4 text-secondary">CONTACTO</h2>
        <hr />
        <Row className="d-flex">
          <Col lg={6} md={6} sm={12} className="my-5">
            <div className="d-flex">
              <FontAwesomeIcon
                icon={faLocationDot}
                className="iconoContacto mx-3"
              ></FontAwesomeIcon>
              <p className="textoC">
                Gral Paz 320, San Miguel de Tucumán (4000). Argentina.
              </p>
            </div>
            <div className="d-flex my-4">
              <FontAwesomeIcon
                icon={faEnvelope}
                className="iconoContacto mx-3"
              ></FontAwesomeIcon>
              <p className="textoC">
                camaradedrogueriastucuman@gmail.com
              </p>
            </div>
            <div className="d-flex">
              <FontAwesomeIcon
                icon={faPhone}
                className="iconoContacto mx-3"
              ></FontAwesomeIcon>
              <p className="textoC">
                381-6833503
              </p>
            </div>
          </Col>
          <Col lg={6} md={6} sm={12} className="my-5">
            <Form.Group>
              <Form.Label className="">Nombre Completo*</Form.Label>
              <Form.Control
                type="text"
                placeholder="entre (8 y 40) caracteres."
                // onChange={(e) => setnombre(e.target.value.trim())}
              />
              <Form.Label className="my-2">Email *</Form.Label>
              <Form.Control
                type="text"
                placeholder="Ej: juanperez@gmail.com"
                // onChange={(e) => setemail(e.target.value.trim())}
              />
              <Form.Label className="my-2">Mensaje</Form.Label>
              <Form.Control as="textarea" rows={3} />
            </Form.Group>
            <Button variant="outline-dark" type="submit" className="my-4 me-0">
              Enviar
            </Button>
          </Col>
        </Row>
      </section>
      <section className="container">
      <div className='mb-5 text-secondary'>
                <h2>MAPA</h2>
                <hr />
                </div>
        <MapaGoogle></MapaGoogle>
      </section>
    </div>
  );
};

export default Contacto;
