import React from "react";
import { Row, Col, Card } from "react-bootstrap";
import Semin from "../../img/seminariosEd.jpeg";
import AseCont from "../../img/asesorCont.jpeg";
import AseReg from "../../img/asesorReg.jpeg";
import "../../components/views/Home.css";

const Servicios = () => {
  return (
    <div className="bgColor py-5">
      <article className="container sitiosBg py-5">
        <h2 className="text-secondary">SERVICIOS</h2>
        <hr />
        <div>
          <Row className="my-5">
            <Col
              lg={4}
              md={6}
              sm={12}
              className="d-flex justify-content-center"
            >
              <Card className="p-1 mb-3 cardSocios">
                <Card.Img variant="top" src={Semin} className="imgCard" />
                <Card.Body className="p-1 text-center">
                  <Card.Text className="tituloSer">
                    SEMINARIOS EDUCATIVOS
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col
              lg={4}
              md={6}
              sm={12}
              className="d-flex justify-content-center"
            >
              <Card className="p-1 mb-3 cardSocios">
                <Card.Img variant="top" src={AseCont} className="imgCard" />
                <Card.Body className="p-1 text-center">
                  <Card.Text className="tituloSer">
                    ASESORAMIENTO CONTABLE
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col
              lg={4}
              md={6}
              sm={12}
              className="d-flex justify-content-center"
            >
              <Card className="p-1 mb-3 cardSocios">
                <Card.Img variant="top" src={AseReg} className="imgCard" />
                <Card.Body className="p-1 text-center">
                  <Card.Text className="tituloSer">
                    ASESORAMIENTO REGULADOR TECNICO JURIDICO
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </div>
      </article>
    </div>
  );
};

export default Servicios;
