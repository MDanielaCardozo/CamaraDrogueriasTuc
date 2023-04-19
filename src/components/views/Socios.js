import React from "react";
import "../views/Socios.css";
import { Card, Col, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import LogoPhar from "../../img/PharmaTukLogo.png";
import LogoDrog from "../../img/logoDrogueria.jpg";
import LogoDrogDos from "../../img/logoDrogueriaDos.jpg";

const Socios = () => {
  return (
    <div className="bgColor py-5">
      <article className="container sociosArt py-4">
        <h2 className="my-4">SOCIOS</h2>
        <div>
          <Row className="mb-5">
            <Col
              sm={12}
              md={6}
              lg={3}
              className="d-flex justify-content-center"
            >
              <Card className="p-1 mb-3 cardSocios">
                <Link>
                  <Card.Img variant="top" src={LogoDrog} className="imgCard"/>
                  <Card.Body className="p-1 text-center">
                    <Card.Text>OPHICUS SRL</Card.Text>
                  </Card.Body>
                </Link>
              </Card>
            </Col>
            <Col
              sm={12}
              md={6}
              lg={3}
              className="d-flex justify-content-center"
            >
              <Card className="p-1 mb-3 cardSocios">
                <Link>
                  <Card.Img variant="top" src={LogoPhar} className="imgCard"/>
                  <Card.Body className="p-1 text-center">
                    <Card.Text>PHARMATUK SRL</Card.Text>
                  </Card.Body>
                </Link>
              </Card>
            </Col>
            <Col
              sm={12}
              md={6}
              lg={3}
              className="d-flex justify-content-center"
            >
              <Card className="p-1 mb-3 cardSocios">
                <Link>
                  <Card.Img variant="top" src={LogoDrogDos} className="imgCard"/>
                  <Card.Body className="p-1 text-center">
                    <Card.Text>ARGENTINA MEDICAL SRL</Card.Text>
                  </Card.Body>
                </Link>
              </Card>
            </Col>
            <Col
              sm={12}
              md={6}
              lg={3}
              className="d-flex justify-content-center"
            >
              <Card className="p-1 mb-3 cardSocios">
                <Link>
                  <Card.Img variant="top" src={LogoDrogDos} className="imgCard"/>
                  <Card.Body className="p-1 text-center">
                    <Card.Text>DROGUERIA FG</Card.Text>
                  </Card.Body>
                </Link>
              </Card>
            </Col>
          </Row>
          <Row className="mb-5">
            <Col
              sm={12}
              md={6}
              lg={3}
              className="d-flex justify-content-center"
            >
              <Card className="p-1 mb-3 cardSocios">
                <Link>
                  <Card.Img variant="top" src={LogoDrogDos} className="imgCard"/>
                  <Card.Body className="p-1 text-center">
                    <Card.Text>PLAZA OÑA</Card.Text>
                  </Card.Body>
                </Link>
              </Card>
            </Col>
            <Col
              sm={12}
              md={6}
              lg={3}
              className="d-flex justify-content-center"
            >
              <Card className="p-1 mb-3 cardSocios">
                <Link>
                  <Card.Img variant="top" src={LogoDrogDos} className="imgCard"/>
                  <Card.Body className="p-1 text-center">
                    <Card.Text>NOVAMED</Card.Text>
                  </Card.Body>
                </Link>
              </Card>
            </Col>
            <Col
              sm={12}
              md={6}
              lg={3}
              className="d-flex justify-content-center"
            >
              <Card className="p-1 mb-3 cardSocios">
                <Link>
                  <Card.Img variant="top" src={LogoDrogDos} className="imgCard"/>
                  <Card.Body className="p-1 text-center">
                    <Card.Text>Drogueria traful srl</Card.Text>
                  </Card.Body>
                </Link>
              </Card>
            </Col>
            <Col
              sm={12}
              md={6}
              lg={3}
              className="d-flex justify-content-center"
            >
              <Card className="p-1 mb-3 cardSocios">
                <Link>
                  <Card.Img variant="top" src={LogoDrogDos} className="imgCard"/>
                  <Card.Body className="p-1 text-center">
                    <Card.Text>Drogueria victoria S.A.S</Card.Text>
                  </Card.Body>
                </Link>
              </Card>
            </Col>
          </Row>
          <Row className="mb-5">
            <Col
              sm={12}
              md={6}
              lg={3}
              className="d-flex justify-content-center"
            >
              <Card className="p-1 mb-3 cardSocios">
                <Link>
                  <Card.Img variant="top" src={LogoDrogDos} className="imgCard"/>
                  <Card.Body className="p-1 text-center">
                    <Card.Text>Martínez Duloc Andrea Karina</Card.Text>
                  </Card.Body>
                </Link>
              </Card>
            </Col>
            <Col
              sm={12}
              md={6}
              lg={3}
              className="d-flex justify-content-center"
            >
              <Card className="p-1 mb-3 cardSocios">
                <Link>
                  <Card.Img variant="top" src={LogoDrogDos} className="imgCard"/>
                  <Card.Body className="p-1 text-center">
                    <Card.Text>Echevarría Julio Cesar</Card.Text>
                  </Card.Body>
                </Link>
              </Card>
            </Col>
            <Col
              sm={12}
              md={6}
              lg={3}
              className="d-flex justify-content-center"
            >
              <Card className="p-1 mb-3 cardSocios">
                <Link>
                  <Card.Img variant="top" src={LogoDrogDos} className="imgCard"/>
                  <Card.Body className="p-1 text-center">
                    <Card.Text>Droguería Oncofarma SRL</Card.Text>
                  </Card.Body>
                </Link>
              </Card>
            </Col>
            <Col
              sm={12}
              md={6}
              lg={3}
              className="d-flex justify-content-center"
            >
              <Card className="p-1 mb-3 cardSocios">
                <Link>
                  <Card.Img variant="top" src={LogoDrogDos} className="imgCard"/>
                  <Card.Body className="p-1 text-center">
                    <Card.Text>Macropharma S.A.</Card.Text>
                  </Card.Body>
                </Link>
              </Card>
            </Col>
          </Row>
          <Row className="mb-5">
            <Col
              sm={12}
              md={6}
              lg={3}
              className="d-flex justify-content-center"
            >
                <Card className="p-1 mb-3 cardSocios">
                <Link>
                  <Card.Img variant="top" src={LogoDrogDos} className="imgCard"/>
                  <Card.Body className="p-1 text-center">
                    <Card.Text>DROGUERIA SAN JUAN SRL</Card.Text>
                  </Card.Body>
                </Link>
              </Card>
              
            </Col>
            <Col
              sm={12}
              md={6}
              lg={3}
              className="d-flex justify-content-center"
            >
                <Card className="p-1 mb-3 cardSocios">
                <Link>
                  <Card.Img variant="top" src={LogoDrogDos} className="imgCard"/>
                  <Card.Body className="p-1 text-center">
                    <Card.Text>MEDICINA INTEGRAL SRL</Card.Text>
                  </Card.Body>
                </Link>
              </Card>
              
            </Col>
            <Col
              sm={12}
              md={6}
              lg={3}
              className="d-flex justify-content-center"
            >
              <Card className="p-1 mb-3 cardSocios">
                <Link>
                  <Card.Img variant="top" src={LogoDrogDos} className="imgCard"/>
                  <Card.Body className="p-1 text-center">
                    <Card.Text>DROGUERIA DEL NORTE</Card.Text>
                  </Card.Body>
                </Link>
              </Card>
            </Col>
            <Col
              sm={12}
              md={6}
              lg={3}
              className="d-flex justify-content-center"
            >
              <Card className="p-1 mb-3 cardSocios">
                <Link>
                  <Card.Img variant="top" src={LogoDrogDos} className="imgCard"/>
                  <Card.Body className="p-1 text-center">
                    <Card.Text>TU SALUD S.R.L</Card.Text>
                  </Card.Body>
                </Link>
              </Card>
            </Col>
          </Row>
          <Row className="mb-5">
            <Col
              sm={12}
              md={6}
              lg={3}
              className="d-flex justify-content-center"
            >
              <Card className="p-1 mb-3 cardSocios">
                <Link>
                  <Card.Img variant="top" src={LogoDrogDos} className="imgCard"/>
                  <Card.Body className="p-1 text-center">
                    <Card.Text>DROGUERÍA ÁRNICA S.A.S.</Card.Text>
                  </Card.Body>
                </Link>
              </Card>
            </Col>
            <Col
              sm={12}
              md={6}
              lg={3}
              className="d-flex justify-content-center"
            >
              <Card className="p-1 mb-3 cardSocios">
                <Link>
                  <Card.Img variant="top" src={LogoDrogDos} className="imgCard"/>
                  <Card.Body className="p-1 text-center">
                    <Card.Text>COSMO PHARMA SRL</Card.Text>
                  </Card.Body>
                </Link>
              </Card>
            </Col>
          </Row>
        </div>
      </article>
    </div>
  );
};

export default Socios;
