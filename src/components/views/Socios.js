import React from "react";
import "../views/Socios.css";
import { Card, Col, Row } from "react-bootstrap";
import LogoPhar from "../../img/PharmaTukLogo.png";
import LogoDrog from "../../img/ophicusLogoHome.png";
import LogoDrogDos from "../../img/logoDrogueriaDos.jpg";
import LogoOnc from "../../img/logoOncofarma.jpg";
import LogoDrogFg from "../../img/logo-CamaraFG.jpg";
import LogoDrogPlaza from "../../img/drogueriaPlazaO.png";
import LogoDrogMacro from "../../img/drogueriaMacropharma.png";
import LogoDrogTuSalud from "../../img/drogueriaTuSalud.jpg";
import LogoDrogCosmo from "../../img/drogueriacosmopharma.jpg";

const Socios = () => {
  return (
    <div className="bgColor py-5">
      <article className="container sociosArt py-4">
        <h2 className="my-4 text-secondary">SOCIOS</h2>
        <hr />
        <div>
          <Row className="my-5">
            <Col
              sm={12}
              md={6}
              lg={3}
              className="d-flex justify-content-center"
            >
              <a href="http://drogueriaophicus.com.ar" target="_blank" rel="noopener noreferrer" className="subrayadoText">
                <Card className="p-1 mb-3 cardSocios">
                  <Card.Img variant="top" src={LogoDrog} className="imgCard" />

                  <Card.Body className="p-1 text-center">
                    <Card.Text>OPHICUS SRL</Card.Text>
                  </Card.Body>
                </Card>
                </a>
            </Col>
            <Col
              sm={12}
              md={6}
              lg={3}
              className="d-flex justify-content-center"
            >
              <a href="https://drogueriapharmatuk.com.ar/" target="_blank" rel="noopener noreferrer" className="subrayadoText">
                <Card className="p-1 mb-3 cardSocios">
                  <Card.Img variant="top" src={LogoPhar} className="imgCard" />
                  <Card.Body className="p-1 text-center">
                    <Card.Text>PHARMATUK SRL</Card.Text>
                  </Card.Body>
                </Card>
                </a>
            </Col>
            <Col
              sm={12}
              md={6}
              lg={3}
              className="d-flex justify-content-center"
            >
              <a href="http://" target="_blank" rel="noopener noreferrer" className="subrayadoText">
                <Card className="p-1 mb-3 cardSocios">
                  <Card.Img
                    variant="top"
                    src={LogoDrogDos}
                    className="imgCard"
                  />
                  <Card.Body className="p-1 text-center">
                    <Card.Text>ARGENTIA MEDICAL SRL</Card.Text>
                  </Card.Body>
                </Card>
                </a>
            </Col>
            <Col
              sm={12}
              md={6}
              lg={3}
              className="d-flex justify-content-center"
            >
              <a href="http://" target="_blank" rel="noopener noreferrer" className="subrayadoText">
                <Card className="p-1 mb-3 cardSocios">
                  <Card.Img
                    variant="top"
                    src={LogoDrogFg}
                    className="imgCard"
                  />
                  <Card.Body className="p-1 text-center">
                    <Card.Text>DROGUERIA FG</Card.Text>
                  </Card.Body>
                </Card>
                </a>
            </Col>
          </Row>
          <Row className="mb-5">
            <Col
              sm={12}
              md={6}
              lg={3}
              className="d-flex justify-content-center"
            >
              <a href="https://www.drogueriaplazaona.com.ar/" target="_blank" rel="noopener noreferrer" className="subrayadoText">
                <Card className="p-1 mb-3 cardSocios">
                  <Card.Img
                    variant="top"
                    src={LogoDrogPlaza}
                    className="imgCard"
                  />
                  <Card.Body className="p-1 text-center">
                    <Card.Text>PLAZA OÑA</Card.Text>
                  </Card.Body>
                </Card>
                </a>
            </Col>
            <Col
              sm={12}
              md={6}
              lg={3}
              className="d-flex justify-content-center"
            >
              <a href="http://" target="_blank" rel="noopener noreferrer" className="subrayadoText">
                <Card className="p-1 mb-3 cardSocios">
                  <Card.Img
                    variant="top"
                    src={LogoDrogDos}
                    className="imgCard"
                  />
                  <Card.Body className="p-1 text-center">
                    <Card.Text>NOVAMED</Card.Text>
                  </Card.Body>
                </Card>
                </a>
            </Col>
            <Col
              sm={12}
              md={6}
              lg={3}
              className="d-flex justify-content-center"
            >
              <a href="http://" target="_blank" rel="noopener noreferrer" className="subrayadoText">
                <Card className="p-1 mb-3 cardSocios">
                  <Card.Img
                    variant="top"
                    src={LogoDrogDos}
                    className="imgCard"
                  />
                  <Card.Body className="p-1 text-center">
                    <Card.Text>Drogueria traful srl</Card.Text>
                  </Card.Body>
                </Card>
                </a>
            </Col>
            <Col
              sm={12}
              md={6}
              lg={3}
              className="d-flex justify-content-center"
            >
              <a href="http://" target="_blank" rel="noopener noreferrer" className="subrayadoText">
                <Card className="p-1 mb-3 cardSocios">
                  <Card.Img
                    variant="top"
                    src={LogoDrogDos}
                    className="imgCard"
                  />
                  <Card.Body className="p-1 text-center">
                    <Card.Text>Drogueria victoria S.A.S</Card.Text>
                  </Card.Body>
                </Card>
                </a>
            </Col>
          </Row>
          <Row className="mb-5">
            <Col
              sm={12}
              md={6}
              lg={3}
              className="d-flex justify-content-center"
            >
              <a href="http://" target="_blank" rel="noopener noreferrer" className="subrayadoText">
                <Card className="p-1 mb-3 cardSocios">
                  <Card.Img
                    variant="top"
                    src={LogoDrogDos}
                    className="imgCard"
                  />
                  <Card.Body className="p-1 text-center">
                    <Card.Text>Martínez Duloc Andrea Karina</Card.Text>
                  </Card.Body>
                </Card>
              </a>
            </Col>
            <Col
              sm={12}
              md={6}
              lg={3}
              className="d-flex justify-content-center"
            >
              <a href="http://" target="_blank" rel="noopener noreferrer" className="subrayadoText">
                <Card className="p-1 mb-3 cardSocios">
                  <Card.Img
                    variant="top"
                    src={LogoDrogDos}
                    className="imgCard"
                  />
                  <Card.Body className="p-1 text-center">
                    <Card.Text>Echevarría Julio Cesar</Card.Text>
                  </Card.Body>
                </Card>
                </a>
            </Col>
            <Col
              sm={12}
              md={6}
              lg={3}
              className="d-flex justify-content-center"
            >
              <a href="http://" target="_blank" rel="noopener noreferrer" className="subrayadoText">
                <Card className="p-1 mb-3 cardSocios">
                  <Card.Img variant="top" src={LogoOnc} className="imgCard" />
                  <Card.Body className="p-1 text-center">
                    <Card.Text>Droguería Oncofarma SRL</Card.Text>
                  </Card.Body>
                </Card>
                </a>
            </Col>
            <Col
              sm={12}
              md={6}
              lg={3}
              className="d-flex justify-content-center"
            >
              <a href="http://" target="_blank" rel="noopener noreferrer" className="subrayadoText">
                <Card className="p-1 mb-3 cardSocios">
                  <Card.Img
                    variant="top"
                    src={LogoDrogMacro}
                    className="imgCard"
                  />
                  <Card.Body className="p-1 text-center">
                    <Card.Text>Macropharma S.A.</Card.Text>
                  </Card.Body>
                </Card>
                </a>
            </Col>
          </Row>
          <Row className="mb-5">
            <Col
              sm={12}
              md={6}
              lg={3}
              className="d-flex justify-content-center"
            >
              <a href="http://" target="_blank" rel="noopener noreferrer" className="subrayadoText">
                <Card className="p-1 mb-3 cardSocios">
                  <Card.Img
                    variant="top"
                    src={LogoDrogDos}
                    className="imgCard"
                  />
                  <Card.Body className="p-1 text-center">
                    <Card.Text>DROGUERIA SAN JUAN SRL</Card.Text>
                  </Card.Body>
                </Card>
                </a>
            </Col>
            <Col
              sm={12}
              md={6}
              lg={3}
              className="d-flex justify-content-center"
            >
              <a href="http://" target="_blank" rel="noopener noreferrer" className="subrayadoText">
                <Card className="p-1 mb-3 cardSocios">
                  <Card.Img
                    variant="top"
                    src={LogoDrogDos}
                    className="imgCard"
                  />
                  <Card.Body className="p-1 text-center">
                    <Card.Text>MEDICINA INTEGRAL SRL</Card.Text>
                  </Card.Body>
                </Card>
                </a>
            </Col>
            <Col
              sm={12}
              md={6}
              lg={3}
              className="d-flex justify-content-center"
            >
              <a href="http://" target="_blank" rel="noopener noreferrer" className="subrayadoText">
                <Card className="p-1 mb-3 cardSocios">
                  <Card.Img
                    variant="top"
                    src={LogoDrogDos}
                    className="imgCard"
                  />
                  <Card.Body className="p-1 text-center">
                    <Card.Text>DROGUERIA DEL NORTE</Card.Text>
                  </Card.Body>
                </Card>
                </a>
            </Col>
            <Col
              sm={12}
              md={6}
              lg={3}
              className="d-flex justify-content-center"
            >
              <a href="http://" target="_blank" rel="noopener noreferrer" className="subrayadoText">
                <Card className="p-1 mb-3 cardSocios">
                  <Card.Img
                    variant="top"
                    src={LogoDrogTuSalud}
                    className="imgCard"
                  />
                  <Card.Body className="p-1 text-center">
                    <Card.Text>TU SALUD S.R.L</Card.Text>
                  </Card.Body>
                </Card>
                </a>
            </Col>
          </Row>
          <Row className="mb-5">
            <Col
              sm={12}
              md={6}
              lg={3}
              className="d-flex justify-content-center"
            >
              <a href="http://" target="_blank" rel="noopener noreferrer" className="subrayadoText">
                <Card className="p-1 mb-3 cardSocios">
                  <Card.Img
                    variant="top"
                    src={LogoDrogDos}
                    className="imgCard"
                  />
                  <Card.Body className="p-1 text-center">
                    <Card.Text>DROGUERÍA ÁRNICA S.A.S.</Card.Text>
                  </Card.Body>
                </Card>
                </a>
            </Col>
            <Col
              sm={12}
              md={6}
              lg={3}
              className="d-flex justify-content-center"
            >
              <a href="https://cosmopharma.com.ar/" target="_blank" rel="noopener noreferrer" className="subrayadoText">
                <Card className="p-1 mb-3 cardSocios">
                  <Card.Img
                    variant="top"
                    src={LogoDrogCosmo}
                    className="imgCard"
                  />
                  <Card.Body className="p-1 text-center">
                    <Card.Text>COSMO PHARMA SRL</Card.Text>
                  </Card.Body>
                </Card>
                </a>
            </Col>
          </Row>
        </div>
      </article>
    </div>
  );
};

export default Socios;
