import React from "react";
import "../views/SitiosOficiales.css";
import { Col, Row } from "react-bootstrap";
import Minist from "../../img/logominsalud.jpg";
import Anmat from "../../img/logoAnmat.jpg";
import SuperIn from "../../img/logoSuper.jpg";
import MinTuc from "../../img/logoMinisTuc.jpg";
import CajaPrevis from "../../img/logoCajaDePrevision.jpg";
import Amt from "../../img/logoAmt.png";
import ColAbog from "../../img/colegioAbogadosTuc.jpg";
import CircOdont from "../../img/logoCirculoOdont.png";
import ColProc from "../../img/colegioProcuradoresTuc.jpg";

const SitiosOficiales = () => {
  return (
    <div className="bgColor py-5">
      <article className="container sitiosBg py-5">
        <h2 className="text-secondary">SITIOS OFICIALES</h2>
        <hr />
        <div>
          <Row className="my-5">
            <Col lg={3} className="d-flex justify-content-center">
              <a
                href="https://www.argentina.gob.ar/salud"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src={Minist}
                  alt="Logo del Ministerio de Salud de la Nación"
                  className="imgMinis"
                />
              </a>
            </Col>
            <Col lg={3} className="d-flex justify-content-center">
              <a
                href="https://www.argentina.gob.ar/anmat"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src={Anmat} alt="Logo de la Anmat" className="" />
              </a>
            </Col>
            <Col lg={3} className="d-flex justify-content-center">
              <a
                href="https://www.argentina.gob.ar/sssalud"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src={SuperIn}
                  alt="Logo de la Superintendencia de servicios de salud"
                  className=""
                />
              </a>
            </Col>
            <Col lg={3} className="d-flex justify-content-center">
              <a
                href="https://msptucuman.gov.ar/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src={MinTuc}
                  alt="Logo del Ministerio de Salud del Gobierno de Tucumán"
                  className="imgMinis"
                />
              </a>
            </Col>
          </Row>
          
        </div>
        <h2 className="text-secondary">CONVENIOS DE INTERCAMBIO DE INFORMACION OFICIAL</h2>
        <hr />
        <h4 className="text-secondary">ASESORAMIENTO TECNICO JURIDICO:</h4>
        <Row className="my-5">
            <Col lg={3} className="d-flex justify-content-center">
              <a
                href="https://magistradostucuman.org.ar/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src={Amt}
                  alt="Logo Asociación de Magistrados de Tucumán"
                  className="imgMinis mb-5"
                />
              </a>
            </Col>
            <Col lg={3} className="d-flex justify-content-center">
              <a
                href="https://www.cajaabogtuc.org.ar/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src={CajaPrevis}
                  alt="Logo de la Caja de previsión y seguridad social de abogados y procuradores de Tucumán"
                  className="imgMinis"
                />
              </a>
            </Col>
            <Col lg={3} className="d-flex justify-content-center">
              <a
                href="https://cottucumano.com.ar/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src={CircOdont}
                  alt="Logo de la Caja de previsión y seguridad social de abogados y procuradores de Tucumán"
                  className="imgMinis"
                />
              </a>
            </Col>
            <Col lg={3} className="text-center">
              <a
                href="https://colegioabogadostuc.org.ar/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src={ColAbog}
                  alt="Logo de la Caja de previsión y seguridad social de abogados y procuradores de Tucumán"
                  className="w-50 p-2 mb-3"
                />
              </a>
            </Col>
            <Col lg={3} className="d-flex justify-content-center">
              <a
                href="https://www.facebook.com/procuradorestucuman/?locale=es_LA"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src={ColProc}
                  alt="Logo de la Caja de previsión y seguridad social de abogados y procuradores de Tucumán"
                  className="imgMinis"
                />
              </a>
            </Col>
          </Row>
      </article>
    </div>
  );
};

export default SitiosOficiales;
