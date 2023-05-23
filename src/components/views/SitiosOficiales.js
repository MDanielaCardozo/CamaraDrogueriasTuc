import React from "react";
import "../views/SitiosOficiales.css";
import { Col, Row } from "react-bootstrap";
import Minist from "../../img/logominsalud.jpg";
import Anmat from "../../img/logoAnmat.jpg";
import SuperIn from "../../img/logoSuper.jpg";
import MinTuc from "../../img/logoMinisTuc.jpg";

const SitiosOficiales = () => {
  return (
    <div className="bgColor py-5">
      <article className="container sitiosBg py-5">
        <h2 className="text-secondary">SITIOS OFICIALES</h2>
        <hr />
        <div>
          <Row className="my-5">
            <Col lg={3} className="d-flex justify-content-center">
              <a href="https://www.argentina.gob.ar/salud" target="_blank" rel="noopener noreferrer">
              <img src={Minist} alt="" className="imgMinis" />
              </a>
            </Col>
            <Col lg={3} className="d-flex justify-content-center">
              <a href="https://www.argentina.gob.ar/anmat" target="_blank" rel="noopener noreferrer">
              <img src={Anmat} alt="" className="" />
              </a>
            </Col>
            <Col lg={3} className="d-flex justify-content-center">
              <a href="https://www.argentina.gob.ar/sssalud" target="_blank" rel="noopener noreferrer">
              <img src={SuperIn} alt="" className="" />
              </a>
            </Col>
            <Col lg={3} className="d-flex justify-content-center">
              <a href="https://msptucuman.gov.ar/" target="_blank" rel="noopener noreferrer">
              <img src={MinTuc} alt="" className="imgMinis" />
              </a>
            </Col>
          </Row>
        </div>
      </article>
    </div>
  );
};

export default SitiosOficiales;
