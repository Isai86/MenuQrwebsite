import React from 'react';
import {Container, Col, Row} from 'react-bootstrap';
import Imagen from '../../img/png/menus1.png';
import {ReactComponent as QrIcon} from "../../img/svg/qr.svg";
import {ReactComponent as MenuIcon} from "../../img/svg/mdigital.svg";
import {ReactComponent as SelectIcon} from "../../img/svg/hand.svg";
import {ReactComponent as StarIcon} from "../../img/svg/star.svg";
import './Ofrecer.scss';



function Ofrecer() {
    return (
        <Container className="oferta" id="Funciona">
        <Row>
            <Col md={6} className="imagen">
             <img src={Imagen} alt=""  data-wow-delay="1s" />
            </Col>
            <Col md={6} className="texto">
                <h1>¿Cómo Funciona?</h1>
                <br/>
                <Row className="content1" data-wow-delay="1s">
                    <Col md={3} className="imagensvg justify-content-center">
                    <QrIcon/>
                    </Col>
                    <Col md={9}  className="descripcion">
                    <p>El cliente escanea el <span>código QR</span> desde su teléfono. </p>  
                    </Col>
                </Row>
                <Row className="content2" data-wow-delay="1s">
                    <Col md={3} className="imagensvg justify-content-center">
                    <MenuIcon/>
                    </Col>
                    <Col md={9} className="descripcion">
                    <p id="subtitulo">Verifica el menú en su <span>smartphone</span>. </p>  
                    </Col>
                </Row>
                <Row className="content3" data-wow-delay="1s">
                    <Col md={3} className="imagensvg justify-content-center">
                    <SelectIcon/>
                    </Col>
                    <Col md={9} className="descripcion">
                    <p id="subtitulo">El cliente <span>selecciona una opción </span> y realiza su pedido. </p>  
                    </Col>
                </Row>
                <Row className="content4" data-wow-delay="1s">
                    <Col md={3} sm={3} xs={12} className="imagensvg justify-content-center">
                    <StarIcon/>
                    </Col>
                    <Col md={9} sm={9} xs={12} className="descripcion">
                    <p id="subtitulo">Ofrece un servicio de calidad y <span>evita contagios </span>. </p>  
                    </Col>
                </Row>
            </Col>
            <Col md={6} className="imagen2">
             <img src={Imagen} alt="" data-wow-delay="1s"/>
            </Col>
        </Row>
        </Container>
    )
}

export default Ofrecer
