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
import AvatInst from "../../img/avatInst.jpg";
import Autorid from "../../img/autoridadesCamaraDrog.jpg";
import { useEffect } from "react";

const Home = () => {

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

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
        <div className=" w-100 d-flex justify-content-center text-light tituloMov">
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
              <div className="iconoBtn">
                <Link to={"/socios"}>
                  <div className="iconoBg">
                    <FontAwesomeIcon icon={faPeopleGroup}></FontAwesomeIcon>
                  </div>
                </Link>
                <div className="btnIconos">
                  <Link to={"/socios"} className="btn text-white">
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
              <div className="iconoBtn">
                <Link to={"/servicios"}>
                  <div className="iconoBg">
                    <FontAwesomeIcon icon={faCircleNodes}></FontAwesomeIcon>
                  </div>
                </Link>
                <div className="btnIconos">
                  <Link to={"/servicios"} className="btn text-white">
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
              <div className="iconoBtn">
                <Link to={"/novedades"}>
                  <div className="iconoBg">
                    <FontAwesomeIcon icon={faBullhorn}></FontAwesomeIcon>
                  </div>
                </Link>
                <div className="btnIconos">
                  <Link to={"/novedades"} className="btn text-white">
                    <p className="h6 mt-1 fs-5">NOVEDADES</p>
                  </Link>
                </div>
              </div>
            </Col>
          </Row>
        </div>
      </section>
      <section className="containerText text-dark">
        <div className="container content">
          <Carousel className="carouselInfo">
            <Carousel.Item>
              <div className="">
                <Row className="">
                  <Col
                    lg={3}
                    md={3}
                    xs={4}
                    className="d-flex justify-content-center"
                  >
                    <div className="iconoTexto ">
                      <FontAwesomeIcon icon={faQuoteLeft}></FontAwesomeIcon>
                    </div>
                  </Col>
                  <Col lg={2} md={3} xs={4}>
                    <div className="fotoAvatar">
                      <img src={AvatInst} alt="" className="w-100" />
                    </div>
                  </Col>
                  <Col lg={6} md={5} sm={12} className="texto">
                    <p className="parrafo">
                      Dice Gustavo Blanco, Presidente del Directorio de la
                      Cámara de Droguerías de Tucumán "Consideramos la imperiosa
                      necesidad de crear la Cámara, debido a la necesidad de
                      sentirnos representados y lo fundamental que es para el
                      sistema de salud."
                    </p>
                  </Col>
                </Row>
              </div>
            </Carousel.Item>
            <Carousel.Item>
              <div>
                <Row>
                  <Col
                    lg={3}
                    md={3}
                    xs={4}
                    className="d-flex justify-content-center"
                  >
                    <div className=" iconoTexto">
                      <FontAwesomeIcon icon={faQuoteLeft}></FontAwesomeIcon>
                    </div>
                  </Col>
                  <Col lg={2} md={3} xs={4}>
                    <div className="fotoAvatar">
                      <img src={AvatInst} alt="" className="w-100" />
                    </div>
                  </Col>
                  <Col lg={6} md={5} sm={12} className="texto">
                    <p className="parrafo">
                      El socio gerente de Biostasys, Horacio Prette dijo "Le
                      hicimos una invitación a la ministra Chahla porque este es
                      un laboratorio que depende del trabajo conjunto del área
                      de salud. Esta iniciativa surgió también a partir de una
                      ley de exenciones impositiva que nos permitió hacer nuevas
                      inversiones, que después se irán amortizando con el paso
                      de los meses".
                    </p>
                  </Col>
                </Row>
              </div>
            </Carousel.Item>
            <Carousel.Item>
              <div>
                <Row>
                  <Col
                    lg={3}
                    md={3}
                    xs={4}
                    className="d-flex justify-content-center"
                  >
                    <div className=" iconoTexto">
                      <FontAwesomeIcon icon={faQuoteLeft}></FontAwesomeIcon>
                    </div>
                  </Col>
                  <Col lg={2} md={3} xs={4}>
                    <div className="fotoAvatar">
                      <img src={AvatInst} alt="" className="w-100" />
                    </div>
                  </Col>
                  <Col lg={6} md={5} sm={12} className="texto">
                    <p className="parrafo">
                      Gustavo Blanco, presidente de la Cámara Empresarial de
                      Droguerías de Tucumán, aseguró que en la provincia no hay
                      faltante de medicamentos pero si hubo aumentos
                      significativos en los precios.
                    </p>
                  </Col>
                </Row>
              </div>
            </Carousel.Item>
          </Carousel>
        </div>
      </section>
      <article className="py-5 container">
        <Row>
          <Col lg={8} md={12}>
            <h1 className="tituloNos mb-3 fontW">Nosotros</h1>
            <hr />
            <p className="my-5 me-lg-5 m p-2">
              Con el objeto de promover y concretar la defensa de los intereses
              del sector en forma armónica, en un marco de principios éticos y
              solidarios, un grupo conformado por importantes Empresas del
              sector, decidió crear la Cámara de Droguerías de Tucumán. Somos un
              eslabón muy importante en la cadena de comercialización y
              distribución, por lo tanto no podemos carecer de representatividad
              ante los distintos subsectores que componen el sistema. Somos una
              herramienta fundamental de ayuda al sistema de salud en general,
              para enfrentar las distintas enfermedades que padece cada hombre
              en cualquier región de nuestro país. Somos colaboradores de
              confianza, especializados en facilitar el acceso a los más
              variados medicamentos de terapias especiales con el mayor
              profesionalismo. Garantizamos a la sociedad desde cada una de
              nuestras Empresas, Calidad, Seguridad y Eficacia. Es necesario
              coordinar las acciones de los Asociados, con el fin de mejorar la
              gestión y la capacitación en los distintos lugares de trabajo, sin
              olvidar que somos un país federal, extenso y con características
              epidemiológicas diferentes. La complejidad de la situación y su
              marco, nos obliga a dominar el entramado legal y regulatorio de
              cada provincia, como respuesta a las distintas problemáticas
              frente a realidades cambiantes. Pretendemos brindar además,
              asesoramiento y lograr la representatividad ante los distintos
              organismos, nacionales y provinciales. Sentimos que no podemos
              bajo ningún aspecto concepto olvidarnos de la Responsabilidad
              Social que le cabe a un servicio tan sensible, tendiente a mejorar
              la calidad de vida. Debemos interpretar al mercado y llevar
              adelante investigaciones que nos permitan luego de profundos
              análisis, comprender las políticas macro y micro económicas. De
              esta manera podremos seguir creciendo sostenidamente, dando lo
              mejor de nosotros para el bien de la población.
            </p>
          </Col>
          <Col lg={4} md={12}>
            <h4 className="tituloNos mt-3">Comisión directiva</h4>
            <hr />
            <p className="my-5 font">
              <strong className="tituloNos">Presidente: </strong>
              <a
                href="https://drogueriaophicus.netlify.app/"
                target="_blank"
                rel="noopener noreferrer"
                className="tituloSer text-decoration-none"
              >
                Blanco Ojeda Gustavo Ezequiel
              </a>
              <br />
              <strong className="tituloNos">Vicepresidente: </strong>Quintana
              Manuel Francisco
              <br />
              <strong className="tituloNos">Secretario: </strong> Echeverria
              Julio César <strong>†</strong>
              <br />
              <strong className="tituloNos">Tesorero: </strong> Gambarte Flavia
              Lorena
              <br />
              <strong className="tituloNos">Vocal Titular 1°: </strong> Gómez
              Mario Rolando <strong>†</strong>
              <br />
              <strong className="tituloNos">Vocal Titular 2°: </strong>
              Salvatore Enzo
              <br />
              <strong className="tituloNos">Vocal Titular 3°: </strong>Ramón
              Gustavo Ariel Juan
              <br />
              <strong className="tituloNos">Vocal Titular 4°: </strong>Plaza
              Díaz Elias Juan
              <br />
              <strong className="tituloNos">Vocal Suplente 1°: </strong> Bonatas Silvia Lorena
              <br />
              <strong className="tituloNos">Vocal Suplente 2°: </strong>
              Silveti Ricardo Eugenio
              <br />
              <strong className="tituloNos">Revisor de cuentas titular 1°: </strong>Prette Rubén Horacio
              <br />
              <strong className="tituloNos">Revisor de cuentas titular 1°: </strong>Ciancaglini Mario Rubén
              <br />
              <strong className="tituloNos">Revisor de cuentas titular 1°: </strong>Salvatore Enzo
              <br />
            </p>
          </Col>
          <Col lg={12} md={12}>
            <hr />
          <div className="m-lg-5 imgAuto text-center">
          <img src={Autorid} alt="Autoridades y socios de la Cámara" className="fotoAutoridades"/>
          </div>
          <hr />
          </Col>
        </Row>
      </article>
    </main>
  );
};

export default Home;
