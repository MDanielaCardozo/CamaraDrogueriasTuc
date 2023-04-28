import React, { useState } from "react";
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
  const [nombre, setnombre] = useState("");
  const [email, setemail] = useState("");

  return (
    <div className="bgColor py-5">
      <section className="container">
        <h2 className="my-4 text-secondary">CONTACTO</h2>
        <hr />
        <Row>
          <Col lg={6} md={6} sm={12} className="my-5">
            <div className="d-flex justify-content-between">
              <FontAwesomeIcon
                icon={faLocationDot}
                className="iconoContacto mx-3"
              ></FontAwesomeIcon>
              <p>
                Pilcomayo 314, esquina Brasil 1100 Lanús Oeste, Pcia. Buenos
                Aires, Argentina
              </p>
            </div>
            <div className="d-flex justify-content-between">
              <FontAwesomeIcon
                icon={faEnvelope}
                className="iconoContacto mx-3"
              ></FontAwesomeIcon>
              <p>
                Pilcomayo 314, esquina Brasil 1100 Lanús Oeste, Pcia. Buenos
                Aires, Argentina
              </p>
            </div>
            <div className="d-flex justify-content-between">
              <FontAwesomeIcon
                icon={faPhone}
                className="iconoContacto mx-3"
              ></FontAwesomeIcon>
              <p>
                Pilcomayo 314, esquina Brasil 1100 Lanús Oeste, Pcia. Buenos
                Aires, Argentina
              </p>
            </div>
          </Col>
          <Col lg={6} md={6} sm={12} className="my-5">
            <Form.Group>
              <Form.Label className="">Nombre Completo*</Form.Label>
              <Form.Control
                type="text"
                placeholder="entre (8 y 40) caracteres."
                onChange={(e) => setnombre(e.target.value.trim())}
              />
              <Form.Label className="my-2">Email *</Form.Label>
              <Form.Control
                type="text"
                placeholder="Ej: juanperez@gmail.com"
                onChange={(e) => setemail(e.target.value.trim())}
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
      <section className="container googleMap">
        <MapaGoogle></MapaGoogle>
      </section>
    </div>
  );
};

export default Contacto;
