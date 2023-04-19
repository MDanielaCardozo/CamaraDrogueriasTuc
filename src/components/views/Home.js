import React from "react";
import "../views/Home.css";
import { Carousel, Col, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBullhorn,
  faCircleNodes,
  faPeopleGroup,
  faQuoteLeft,
} from "@fortawesome/free-solid-svg-icons";
import AvatInst from "../../img/avatarInst.jpg";

const Home = () => {
  return (
    <main className="bgColor">
      <section className="CarouselPpal">
        <Carousel>
          <Carousel.Item className="portadaUno"></Carousel.Item>
          <Carousel.Item className="portadaDos"></Carousel.Item>
          <Carousel.Item className="portadaTres"></Carousel.Item>
        </Carousel>
      </section>
      <section className="titulo py-3">
        <div className=" w-100 d-flex justify-content-center text-light">
          <h1 className="text-center">CÁMARA DE DROGUERÍAS DE TUCUMÁN</h1>
        </div>
      </section>
      <section className="iconos py-5">
        <div className="container text-center">
          <Row className="w-100 d-flex flex-wrap">
            <Col
              sm={12}
              md={4}
              lg={4}
              className="d-flex justify-content-center"
            >
              <div>
                <Link to={"/"}>
                  <div className="iconoBg">
                    <FontAwesomeIcon icon={faPeopleGroup}></FontAwesomeIcon>
                  </div>
                </Link>
                <div className="btnIconos">
                  <Link to={"/"} className="btn text-white">
                    <p className="h6 mt-1 fs-5">SOCIOS</p>
                  </Link>
                </div>
              </div>
            </Col>
            <Col
              sm={12}
              md={4}
              lg={4}
              className="d-flex justify-content-center"
            >
              <div>
                <Link to={"/"}>
                  <div className="iconoBg">
                    <FontAwesomeIcon icon={faCircleNodes}></FontAwesomeIcon>
                  </div>
                </Link>
                <div className="btnIconos">
                  <Link to={"/"} className="btn text-white">
                    <p className="h6 mt-1 fs-5">SERVICIOS</p>
                  </Link>
                </div>
              </div>
            </Col>
            <Col
              sm={12}
              md={4}
              lg={4}
              className="d-flex justify-content-center"
            >
              <div>
                <Link to={"/"}>
                  <div className="iconoBg">
                    <FontAwesomeIcon icon={faBullhorn}></FontAwesomeIcon>
                  </div>
                </Link>
                <div className="btnIconos">
                  <Link to={"/"} className="btn text-white">
                    <p className="h6 mt-1 fs-5">NOVEDADES</p>
                  </Link>
                </div>
              </div>
            </Col>
          </Row>
        </div>
      </section>
      <section className="container text-dark py-5">
        <Carousel  className="carouselInfo">
          <Carousel.Item>
            <div className="">
              <Row className="">
                <Col lg={3} className="d-flex justify-content-center">
                  <div className="iconoTexto">
                    <FontAwesomeIcon icon={faQuoteLeft}></FontAwesomeIcon>
                  </div>
                </Col>
                <Col lg={2}>
                    <img src={AvatInst} alt="" srcset="" className="w-100 mt-5"/>
                </Col>
                <Col lg={6} className="texto">
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Ipsam tenetur in soluta facilis distinctio ipsa illum hic,
                    esse veniam consequuntur modi eius repellendus eligendi eos
                    cupiditate accusantium aperiam consequatur dolores."
                  </p>
                </Col>
              </Row>
            </div>
          </Carousel.Item>
          <Carousel.Item className="carouselInfo">
            <div>
              <Row>
                <Col lg={3} className="d-flex justify-content-center">
                  <div className=" iconoTexto">
                    <FontAwesomeIcon icon={faQuoteLeft}></FontAwesomeIcon>
                  </div>
                </Col>
                <Col lg={2}>foto</Col>
                <Col lg={6} className="texto">
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Ipsam tenetur in soluta facilis distinctio ipsa illum hic,
                    esse veniam consequuntur modi eius repellendus eligendi eos
                    cupiditate accusantium aperiam consequatur dolores.
                  </p>
                </Col>
              </Row>
            </div>
          </Carousel.Item>
          <Carousel.Item className="carouselInfo">
            <div>
              <Row>
                <Col lg={3} className="d-flex justify-content-center">
                  <div className=" iconoTexto">
                    <FontAwesomeIcon icon={faQuoteLeft}></FontAwesomeIcon>
                  </div>
                </Col>
                <Col lg={2}>foto</Col>
                <Col lg={6} className="texto">
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Ipsam tenetur in soluta facilis distinctio ipsa illum hic,
                    esse veniam consequuntur modi eius repellendus eligendi eos
                    cupiditate accusantium aperiam consequatur dolores.
                  </p>
                </Col>
              </Row>
            </div>
          </Carousel.Item>
        </Carousel>
      </section>
    </main>
  );
};

export default Home;
