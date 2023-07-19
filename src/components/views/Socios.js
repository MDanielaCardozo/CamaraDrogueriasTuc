import React, { useEffect } from "react";
import "../views/Socios.css";
import { Card, Col, Row } from "react-bootstrap";
import LogoPhar from "../../img/PharmaTukLogo.png";
import LogoDrog from "../../img/logoOphicusSrl.png";
import LogoDrogDos from "../../img/logoDrogueriaDos.jpg";
import LogoOnc from "../../img/logoOncofarma.jpg";
import LogoDrogFg from "../../img/logo-CamaraFG.jpg";
import LogoDrogPlaza from "../../img/drogueriaPlazaO.png";
import LogoDrogMacro from "../../img/drogueriaMacropharma.png";
import LogoDrogTuSalud from "../../img/drogueriaTuSalud.jpg";
import LogoDrogCosmo from "../../img/drogueriacosmopharma.jpg";
import LogoMedInt from "../../img/logoMedicinaIntegral.jpg";
const Socios = () => {

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="bgColor py-5">
      <article className="container sociosArt py-4">
        <h2 className="my-4 text-secondary">SOCIOS</h2>
        <hr />
        <div>
          <Row className="">
            <Col
              sm={12}
              md={6}
              lg={3}
              className="d-flex justify-content-center mb-4"
            >
              <a
                href="http://"
                target="_blank"
                rel="noopener noreferrer"
                className="subrayadoText"
              >
                <Card className="h-100 cardSocios">
                  <Card.Img
                    variant="top"
                    src={LogoMedInt}
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
              className="d-flex justify-content-center mb-4"
            >
              <a
                href="https://drogueriapharmatuk.com.ar/"
                target="_blank"
                rel="noopener noreferrer"
                className="subrayadoText"
              >
                <Card className="h-100 cardSocios">
                  <Card.Img variant="top" src={LogoPhar} className="imgCardPhar" />
                  <Card.Body className="p-1 d-flex justify-content-center align-items-end">
                    <Card.Text>PHARMATUK SRL</Card.Text>
                  </Card.Body>
                </Card>
              </a>
            </Col>
            <Col
              sm={12}
              md={6}
              lg={3}
              className="d-flex justify-content-center mb-4"
            >
              <a
                href="https://drogueriaophicus.netlify.app/"
                target="_blank"
                rel="noopener noreferrer"
                className="subrayadoText"
              >
                <Card className="h-100 cardSocios">
                  <Card.Img variant="top" src={LogoDrog} className="imgCardPhar" />

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
              className="d-flex justify-content-center mb-4"
            >
              <a
                href="http://"
                target="_blank"
                rel="noopener noreferrer"
                className="subrayadoText"
              >
                <Card className="h-100 cardSocios">
                  <Card.Img
                    variant="top"
                    src={LogoDrogDos}
                    className="imgCard"
                  />
                  <Card.Body className="p-1 text-center">
                    <Card.Text>DROGUERIA TRAFUL SRL</Card.Text>
                  </Card.Body>
                </Card>
              </a>
            </Col>
          </Row>
          <Row className="">
            <Col
              sm={12}
              md={6}
              lg={3}
              className="d-flex justify-content-center mb-4"
            >
              <a
                href="https://www.drogueriaplazaona.com.ar/"
                target="_blank"
                rel="noopener noreferrer"
                className="subrayadoText"
              >
                <Card className="h-100 cardSocios">
                  <Card.Img
                    variant="top"
                    src={LogoDrogPlaza}
                    className="imgCardPhar"
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
              className="d-flex justify-content-center mb-4"
            >
              <a
                href="http://"
                target="_blank"
                rel="noopener noreferrer"
                className="subrayadoText"
              >
                <Card className="h-100 cardSocios">
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
              className="d-flex justify-content-center mb-4"
            >
              <a
                href="http://"
                target="_blank"
                rel="noopener noreferrer"
                className="subrayadoText"
              >
                <Card className="h-100 cardSocios">
                  <Card.Img
                    variant="top"
                    src={LogoDrogFg}
                    className="imgCardPhar"
                  />
                  <Card.Body className="p-1 text-center">
                    <Card.Text>DROGUERIA FG</Card.Text>
                  </Card.Body>
                </Card>
              </a>
            </Col>

            <Col
              sm={12}
              md={6}
              lg={3}
              className="d-flex justify-content-center mb-4"
            >
              <a
                href="http://"
                target="_blank"
                rel="noopener noreferrer"
                className="subrayadoText"
              >
                <Card className="h-100 cardSocios">
                  <Card.Img
                    variant="top"
                    src={LogoDrogDos}
                    className="imgCard"
                  />
                  <Card.Body className="p-1 text-center">
                    <Card.Text>DROGUERIA VICTORIA S.A.S</Card.Text>
                  </Card.Body>
                </Card>
              </a>
            </Col>
          </Row>
          <Row className="">
            <Col
              sm={12}
              md={6}
              lg={3}
              className="d-flex justify-content-center mb-4"
            >
              <a
                href="http://"
                target="_blank"
                rel="noopener noreferrer"
                className="subrayadoText"
              >
                <Card className="h-100 cardSocios">
                  <Card.Img
                    variant="top"
                    src={LogoDrogDos}
                    className="imgCard"
                  />
                  <Card.Body className="p-1 text-center">
                    <Card.Text>DROGUERIA DISTRIBUIDORA TUCUMAN</Card.Text>
                  </Card.Body>
                </Card>
              </a>
            </Col>
            <Col
              sm={12}
              md={6}
              lg={3}
              className="d-flex justify-content-center mb-4"
            >
              <a
                href="http://"
                target="_blank"
                rel="noopener noreferrer"
                className="subrayadoText"
              >
                <Card className="h-100 cardSocios">
                  <Card.Img
                    variant="top"
                    src={LogoDrogDos}
                    className="imgCard"
                  />
                  <Card.Body className="p-1 text-center">
                    <Card.Text>DROGUERIA EL PARQUE</Card.Text>
                  </Card.Body>
                </Card>
              </a>
            </Col>
            <Col
              sm={12}
              md={6}
              lg={3}
              className="d-flex justify-content-center mb-4"
            >
              <a
                href="http://"
                target="_blank"
                rel="noopener noreferrer"
                className="subrayadoText"
              >
                <Card className="h-100 cardSocios">
                  <Card.Img variant="top" src={LogoOnc} className="imgCard" />
                  <Card.Body className="p-1 text-center">
                    <Card.Text>DROGUERIA ONCOFARMA SRL</Card.Text>
                  </Card.Body>
                </Card>
              </a>
            </Col>
            <Col
              sm={12}
              md={6}
              lg={3}
              className="d-flex justify-content-center mb-4"
            >
              <a
                href="http://"
                target="_blank"
                rel="noopener noreferrer"
                className="subrayadoText"
              >
                <Card className="h-100 cardSocios">
                  <Card.Img
                    variant="top"
                    src={LogoDrogMacro}
                    className="imgCardPhar"
                  />
                  <Card.Body className="p-1 text-center">
                    <Card.Text>MACROPHARMA S.A.</Card.Text>
                  </Card.Body>
                </Card>
              </a>
            </Col>
          </Row>
          <Row className="">
            <Col
              sm={12}
              md={6}
              lg={3}
              className="d-flex justify-content-center mb-4"
            >
              <a
                href="http://"
                target="_blank"
                rel="noopener noreferrer"
                className="subrayadoText"
              >
                <Card className="h-100 cardSocios">
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
              className="d-flex justify-content-center mb-4"
            >
              <a
                href="http://"
                target="_blank"
                rel="noopener noreferrer"
                className="subrayadoText"
              >
                <Card className="h-100 cardSocios">
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
              className="d-flex justify-content-center mb-4"
            >
              <a
                href="http://"
                target="_blank"
                rel="noopener noreferrer"
                className="subrayadoText"
              >
                <Card className="h-100 cardSocios">
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
              className="d-flex justify-content-center mb-4"
            >
              <a
                href="http://"
                target="_blank"
                rel="noopener noreferrer"
                className="subrayadoText"
              >
                <Card className="h-100 cardSocios">
                  <Card.Img
                    variant="top"
                    src={LogoDrogTuSalud}
                    className="imgCardPhar"
                  />
                  <Card.Body className="p-1 text-center">
                    <Card.Text>TU SALUD S.R.L</Card.Text>
                  </Card.Body>
                </Card>
              </a>
            </Col>
          </Row>
          <Row className="">
            <Col
              sm={12}
              md={6}
              lg={3}
              className="d-flex justify-content-center mb-4"
            >
              <a
                href="http://"
                target="_blank"
                rel="noopener noreferrer"
                className="subrayadoText"
              >
                <Card className="h-100 cardSocios">
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
              className="d-flex justify-content-center mb-4"
            >
              <a
                href="https://cosmopharma.com.ar/"
                target="_blank"
                rel="noopener noreferrer"
                className="subrayadoText"
              >
                <Card className="h-100 cardSocios">
                  <Card.Img
                    variant="top"
                    src={LogoDrogDos}
                    className="imgCard"
                  />
                  <Card.Body className="p-1 text-center">
                    <Card.Text>DROGUERIA GüEMES</Card.Text>
                  </Card.Body>
                </Card>
              </a>
            </Col>
            <Col
              sm={12}
              md={6}
              lg={3}
              className="d-flex justify-content-center mb-4"
            >
              <a
                href="https://cosmopharma.com.ar/"
                target="_blank"
                rel="noopener noreferrer"
                className="subrayadoText"
              >
                <Card className="h-100 cardSocios">
                  <Card.Img
                    variant="top"
                    src={LogoDrogDos}
                    className="imgCard"
                  />
                  <Card.Body className="p-1 text-center">
                    <Card.Text>DROGUERIA PHARMA ESTETIC</Card.Text>
                  </Card.Body>
                </Card>
              </a>
            </Col>
            <Col
              sm={12}
              md={6}
              lg={3}
              className="d-flex justify-content-center mb-4"
            >
              <a
                href="https://cosmopharma.com.ar/"
                target="_blank"
                rel="noopener noreferrer"
                className="subrayadoText"
              >
                <Card className="h-100 cardSocios">
                  <Card.Img
                    variant="top"
                    src={LogoDrogCosmo}
                    className="imgCardPhar"
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
