import React from 'react';
import "../views/SitiosOficiales.css";
import { Col, Row } from 'react-bootstrap';
import Minist from "../../img/logominsalud.jpg";
import Anmat from "../../img/logoAnmat.jpg";
import SuperIn from "../../img/logoSuper.jpg";


const SitiosOficiales = () => {
    return (
        <div className='bgColor py-5'>
            <article className='container sitiosBg py-5'>
                <h2>SITIOS OFICIALES</h2>
                <div>
                    <Row>
                        <Col><img src={Minist} alt="" className=''/></Col>
                        <Col><img src={Anmat} alt="" className=''/></Col>
                        <Col><img src={SuperIn} alt="" className=''/></Col>
                    </Row>
                </div>
            </article>
        </div>
    );
};

export default SitiosOficiales;