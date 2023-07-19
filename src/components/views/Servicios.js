import React, { useEffect } from "react";
import { Row, Col, Card } from "react-bootstrap";
import Semin from "../../img/seminariosEd.jpeg";
import AseCont from "../../img/asesorCont.jpeg";
import AseReg from "../../img/asesorReg.jpeg";
import "../../components/views/Home.css";

const Servicios = () => {

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

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
              <Card className="p-1 mb-3 cardServ">
                <Card.Img variant="top" src={Semin} className="imgCardServ" />
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
              <Card className="p-1 mb-3 cardServ">
                <Card.Img variant="top" src={AseCont} className="imgCardServ" />
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
              <Card className="p-1 mb-3 cardServ">
                <Card.Img variant="top" src={AseReg} className="imgCardServ" />
                <Card.Body className="p-1 text-center">
                  <Card.Text className="tituloSer">
                    ASESORAMIENTO REGULADOR TECNICO JURIDICO
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </div>
        <h2 className="text-secondary pt-5">OBJETIVOS</h2>
        <hr />
        <div className="p-3">
          <ul className="my-5 me-lg-5">
            <li>
              Apoyar un eficiente funcionamiento del Sistema Provincial de
              Salud, colaborando con las autoridades, organizaciones pertinentes
              y consumidores para lograr un adecuado abastecimiento de
              medicamentos y productos para el cuidado de la salud
            </li>
            <li>
              Representar y defender los intereses de los asociados en los
              ámbitos público y privado.
            </li>
            <li>
              Proyectar fortaleza institucional, credibilidad, eficiencia y
              confianza ante los públicos relevantes, constituyéndose en una
              referencia del sistema de distribución en la Provincia de Tucumán.
            </li>
            <li>
              Promover actividades que permitan a los asociados y relacionados
              el mejoramiento de su productividad y eficiencia.
            </li>
            <li>
              Mantener a los asociados y relacionados informados sobre aquellos
              eventos que pueden afectar el desenvolvimiento futuro del sector.
            </li>
            <li>
              Crear, mantener y actualizar un sistema de estadísticas del sector
              de droguerías.
            </li>
            <li>
              Crear, mantener y actualizar un sistema de información sobre
              leyes, normas y regulaciones que afecten las operaciones del
              sector.
            </li>
            <li>
              Crear, mantener y actualizar un sistema de información sobre sobre
              riesgos crediticios en la industria.
            </li>
            <li>
              Emitir un boletín informativo periódico con asuntos de interés
              para todos los asociados y relacionados.
            </li>
            <li>
              Evaluar permanentemente los desenvolvimientos de las ventas
              directas de los proveedores.
            </li>
            <li>
              Vincular a la organización y sus agremiados con organizaciones
              similares y relacionadas en el ámbito nacional e internacional.
            </li>
            <li>
              Servir de espacio para la conversación franca entre los asociados
              y fomentar la concertación de proyectos comunes.
            </li>
            <li>
              Promover acuerdos transparentes entre sus asociados y entre éstos
              y autoridades provinciales y nacionales.
            </li>
            <li>
              Preservar el patrimonio de la organización y promover y ejecutar
              proyectos que redunden en beneficio de los asociados.
            </li>
            <li>
              Monitorear el desarrollo de tecnologías y servicios de apoyo a las
              operaciones del sector y divulgarlas y promoverlas entre los
              asociados.
            </li>
            <li>
              Fomentar acuerdos comunes para la contratación de asesorías y
              servicios en beneficio de los asociados.
            </li>
            <li>
              Estimular el desarrollo de prácticas operativas más eficientes que
              incentiven la calidad y la productividad del sector. Para lograr
              sus objetivos la Cámara estará capacitada para realizar todos los
              actos jurídicos y administrativos que no estén prohibidos por las
              leyes y celebrar toda clase de contratos civiles y/o comerciales.
              Las actividades detalladas no son taxativas, pudiendo efectuar
              otras no previstas pero que poseen relación directa con su objeto.
            </li>
          </ul>
        </div>
      </article>
    </div>
  );
};

export default Servicios;
