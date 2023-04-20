import React from 'react';
import "../views/Contacto.css";
import { Row, Col } from 'react-bootstrap';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLocationDot } from '@fortawesome/free-solid-svg-icons';


const Contacto = () => {
    return (
        <div className='bgColor py-5'>
            <section className='container'>
            <h2 className="my-4 text-secondary">CONTACTO</h2>
            <hr />
            <Row>
                <Col className='d-flex'>
                <div className='iconoContacto mx-3'>
                <FontAwesomeIcon icon={faLocationDot}></FontAwesomeIcon>
                </div>
                <p>Pilcomayo 314, esquina Brasil 1100 Lanús Oeste, Pcia. Buenos
              Aires, Argentina</p>
                </Col>
                <Col></Col>
            </Row>
            </section>
        </div>
    );
};

export default Contacto;