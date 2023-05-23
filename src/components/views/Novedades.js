import React from "react";
import { Row, Col, Card } from "react-bootstrap";
import "../views/Novedades.css";
import NewsUno from "../../img/newsUno.webp";
import NewsDos from "../../img/newsDos.webp";
import NewsTres from "../../img/newsTres.webp";
import NewsCuatro from "../../img/newsCuatro.jpeg";
import NewsCinco from "../../img/newsCinco.jpg";
import NewsSeis from "../../img/newsSeis.jpeg";
import NewsSiete from "../../img/newsSiete.webp";

const Novedades = () => {
  return (
    <div className="bgColor py-5">
      <article className="container sitiosBg py-5">
        <h2 className="text-secondary">NOVEDADES</h2>
        <hr />
        <h5 className=" my-5">
          Conocé nuestras últimas noticias y agenda de actividades.
        </h5>
        <div>
          <Row className="my-5">
            <Col
              lg={6}
              md={6}
              sm={12}
              className="d-flex justify-content-center"
            >
              <Card className="p-1 mb-3 cardNovedades">
                <Card.Img variant="top" src={NewsUno} className="cardImgNov" />
                <Card.Body className="text-center">
                  <Card.Title className="tituloSer my-3">
                    La Legislatura habilitará la eximición de Ingresos Brutos
                    para 17 droguerías tucumanas.
                  </Card.Title>
                  <Card.Text>
                    El Poder Legislativo dará luz verde a la habilitación de la
                    eximición del pago del Impuesto sobre los Ingresos Brutos
                    (IIBB) a 17 droguerías que ya operan en Tucumán. A cambio,
                    las firmas beneficiadas deberán llevar adelante una serie de
                    inversiones previstas en las iniciativas.
                    <br />
                  </Card.Text>
                  <hr />
                  <div className="d-flex justify-content-between">
                    <p className="text-secondary">01/09/2020</p>
                    <a
                      href="https://www.lagaceta.com.ar/nota/858589/actualidad/legislatura-habilitara-eximicion-ingresos-brutos-para-17-droguerias-tucumanas.html?utm_source=Whatsapp&utm_medium=Social&utm_campaign=botonmovil"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="tituloSer subrayado"
                    >
                      Ver mas...
                    </a>
                  </div>
                </Card.Body>
              </Card>
            </Col>
            <Col
              lg={5}
              md={6}
              sm={12}
              className="d-flex justify-content-center"
            >
              <Card className="p-1 mb-3 cardNovedades">
                <Card.Img variant="top" src={NewsDos} className="cardImgNov" />
                <Card.Body className="p-1 text-center">
                  <Card.Title className="tituloSer my-3">
                    En la Legislatura se espera una sesión cargada de temas,
                    chicanas y polémica
                  </Card.Title>
                  <Card.Text>
                    Entre ellos, se destacan 19 dictámenes “con nombre y
                    apellido” de la comisión de Presupuesto y Hacienda que
                    encabeza el oficialista Juan Ruiz Olivares para que 19
                    droguerías tucumanas accedan a una exención de Ingresos
                    Brutos durante cinco años.
                    <br />
                  </Card.Text>
                  <hr />
                  <div className="d-flex justify-content-between">
                    <p className="text-secondary">09/09/2020</p>
                    <a
                      href="https://www.lagaceta.com.ar/nota/859676/actualidad/legislatura-se-espera-sesion-cargada-temas-chicanas-polemica.html?utm_source=Whatsapp&utm_medium=Social&utm_campaign=botonmovil"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="tituloSer subrayado"
                    >
                      Ver mas ...
                    </a>
                  </div>
                </Card.Body>
              </Card>
            </Col>
          </Row>
          <Row className="my-5">
            <Col
              lg={6}
              md={6}
              sm={12}
              className="d-flex justify-content-center"
            >
              <Card className="p-1 mb-3 cardNovedades">
                <Card.Img variant="top" src={NewsTres} className="cardImgNov" />
                <Card.Body className="p-1 text-center">
                  <Card.Title className="tituloSer my-3">
                    Tucumán está a un paso de contar con un laboratorio de
                    Medicamentos Citostáticos
                  </Card.Title>
                  <Card.Text>
                    La ministra de Salud, Rossana Chahla, visitó este jueves las
                    instalaciones del laboratorio Biostasys y conoció los
                    procedimientos que se llevan adelante en la planta respecto
                    al tratamiento de medicaciones citostáticas, área próxima a
                    inaugurar.
                    <br />
                  </Card.Text>
                  <hr />
                  <div className="d-flex justify-content-between">
                    <p className="text-secondary">24/06/2021</p>
                    <a
                      href="https://www.lagaceta.com.ar/nota/899456/actualidad/tucuman-esta-paso-contar-laboratorio-medicamentos-citostaticos.html?utm_source=Whatsapp&utm_medium=Social&utm_campaign=botonmovil"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="tituloSer subrayado"
                    >
                      Ver mas...
                    </a>
                  </div>
                </Card.Body>
              </Card>
            </Col>
            <Col
              lg={5}
              md={6}
              sm={12}
              className="d-flex justify-content-center"
            >
              <Card className="p-1 mb-3 cardNovedades">
                <Card.Img
                  variant="top"
                  src={NewsCuatro}
                  className="cardImgNov"
                />
                <Card.Body className="p-1 text-center">
                  <Card.Title className="tituloSer my-3">
                    El Colegio de Abogados de Tucumán presentará la Tarjeta
                    Azul, el Servicio de Salud para sus Matriculados
                  </Card.Title>
                  <Card.Text>
                    El día 20 de agosto a las 11:30 hs. se realizará el
                    lanzamiento del Primer Servicio de Salud para matriculados
                    del Colegio de Abogados de Tucumán, denominado "Tarjeta Azul
                    - Servicio de Salud". Dicho servicio cuenta con importantes
                    descuentos en profesionales médicos, así como farmacias y
                    droguerías para los matriculados.
                  </Card.Text>
                  <hr />
                  <div className="d-flex justify-content-between">
                    <p className="text-secondary">10/08/2021</p>
                    <a
                      href="https://colegioabogadostuc.org.ar/el-colegio-de-abogados-de-tucuman-presentara-la-tarjeta-azul-el-servicio-de-salud-para-sus-matriculados/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="tituloSer subrayado"
                    >
                      Ver mas ...
                    </a>
                  </div>
                </Card.Body>
              </Card>
            </Col>
          </Row>
          <Row className="my-5">
            <Col
              lg={6}
              md={6}
              sm={12}
              className="d-flex justify-content-center"
            >
              <Card className="p-1 mb-3 cardNovedades">
                <Card.Img
                  variant="top"
                  src={NewsCuatro}
                  className="cardImgNov"
                />
                <Card.Body className="p-1 text-center">
                  <Card.Title className="tituloSer my-3">
                    Tarjeta Azul - Servicio de Salud: Funcionamiento
                  </Card.Title>
                  <Card.Text>
                    La Tarjeta azul - Servicio de salud abarca al matriculado y
                    a su grupo familiar. Para obtener el beneficio debe
                    presentar la misma. Solamente se emite una tarjeta a nombre
                    del matriculado (no se emiten tarjetas adicionales al grupo
                    familiar) Los descuentos no se superpones a los de la obra
                    social que tuviera el matriculado.
                    <br />
                  </Card.Text>
                  <hr />
                  <div className="d-flex justify-content-between">
                    <p className="text-secondary">24/08/2021</p>
                    <a
                      href="https://colegioabogadostuc.org.ar/tarjeta-azul-servicio-de-salud-funcionamiento/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="tituloSer subrayado"
                    >
                      Ver mas...
                    </a>
                  </div>
                </Card.Body>
              </Card>
            </Col>
            <Col
              lg={5}
              md={6}
              sm={12}
              className="d-flex justify-content-center"
            >
              <Card className="p-1 mb-3 cardNovedades">
                <Card.Img
                  variant="top"
                  src={NewsCinco}
                  className="cardImgNov"
                />
                <Card.Body className="p-1 text-center">
                  <Card.Title className="tituloSer my-3">
                    Descuento en medicamentos para todos nuestro afiliados |
                    Cámara empresarial de Droguerías de Tucumán
                  </Card.Title>
                  <Card.Text>
                    Descuento en medicamentos para todos nuestro afiliados |
                    Cámara empresarial de Droguerías de Tucumán. ➡Medicamentos:
                    hasta 35% de descuento. Tu Caja pone a disposición una red
                    de farmacias adheridas, donde podrá acceder al medicamento
                    recetado con descuento.
                  </Card.Text>
                  <hr />
                  <div className="d-flex justify-content-between">
                    <p className="text-secondary">21/08/2021</p>
                    <a
                      href="https://www.facebook.com/108242799266248/posts/4504192446337906/?sfnsn=scwspwa"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="tituloSer subrayado"
                    >
                      Ver mas ...
                    </a>
                  </div>
                </Card.Body>
              </Card>
            </Col>
          </Row>
          <Row className="my-5">
            <Col
              lg={6}
              md={6}
              sm={12}
              className="d-flex justify-content-center"
            >
              <Card className="p-1 mb-3 cardNovedades">
                <Card.Img variant="top" src={NewsSeis} className="cardImgNov" />
                <Card.Body className="p-1 text-center">
                  <Card.Title className="tituloSer my-3">
                    La Asociación de Magistrados/as de Tucumán firmó dos nuevos
                    convenios
                  </Card.Title>
                  <Card.Text>
                    El pasado jueves 16 de septiembre del corriente año, la
                    Presidenta de la Asociación de Magistrados/as de Tucumán
                    (AMT), Marcela Ruiz, firmó en representación del organismo
                    dos nuevos convenios de cooperación: por un lado, con
                    Gustavo Blanco Ojeda, Presidente de la Asociación Civil
                    Cámara Empresarial de Droguerías de Tucumán.
                    <br />
                  </Card.Text>
                  <hr />
                  <div className="d-flex justify-content-between">
                    <p className="text-secondary">20/09/2021</p>
                    <a
                      href="https://magistradostucuman.org.ar/2021/09/la-asociacion-de-magistrados-as-de-tucuman-firmo-dos-nuevos-convenios/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="tituloSer subrayado"
                    >
                      Ver mas...
                    </a>
                  </div>
                </Card.Body>
              </Card>
            </Col>
            <Col
              lg={5}
              md={6}
              sm={12}
              className="d-flex justify-content-center"
            >
              <Card className="p-1 mb-3 cardNovedades">
                <Card.Img
                  variant="top"
                  src={NewsSiete}
                  className="cardImgNov"
                />
                <Card.Body className="p-1 text-center">
                  <Card.Title className="tituloSer my-3">
                    Laboratorios advierten un futuro faltante de medicamentos
                  </Card.Title>
                  <Card.Text>
                    Hablamos con Gustavo Blanco, presidente de la Cámara
                    Empresarial de Droguerías de Tucumán, aseguró que en la
                    provincia no hay faltante de medicamentos pero si hubo
                    aumentos significativos en los precios. En este sentido, los
                    medicamentos también han sufrido las consecuencias de la
                    inestabilidad económica del país, con la suba de precios
                    hasta el 15%.
                  </Card.Text>
                  <hr />
                  <div className="d-flex justify-content-between">
                    <p className="text-secondary">17/05/2023</p>
                    <a
                      href="https://losprimeros.tv/contenido/241672/laboratorios-advierten-un-futuro-faltante-de-medicamentos"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="tituloSer subrayado"
                    >
                      Ver mas ...
                    </a>
                  </div>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </div>
      </article>
    </div>
  );
};

export default Novedades;
