import React from 'react'
import {CardDeck, Card, Container} from 'react-bootstrap';
import Qr1 from '../../img/png/codigoBasico.png'
import Qr2 from '../../img/png/CodigoIntermedio.png'
import Qr3 from '../../img/png/CodigoPro.png'
import './PreciosQr.scss'
function PreciosQr() {
    return (
        <div className="preciosQr" id="Servicios">
            <h1 className="titulo wow animate__animated animate__bounce" data-wow-delay="1s">NUESTROS PRODUCTOS</h1>
    <span className="border"></span>
    <p className="titulo wow animate__animated animate__pulse" data-wow-delay="1s">Aquí puedes ver un demo de nuestros productos en acción, puedes escanear cada código y ver nuestros servicios.</p>
    <Container>
        <CardDeck>
  <Card className="card1 wow animate__animated animate__backInLeft" data-wow-delay="1s">
    <Card.Img variant="top" src={Qr1} />
    <Card.Body>
      <Card.Title>Básico</Card.Title>
      <Card.Text>
      <h2>$1000.00 Mx.</h2>
      El menú de papel que actualmente utilizas, pero digitalizado, una opción económica y eficaz.  
        <li>1 año de servicio</li>
        <li>Seccion redes Sociales</li>
        <li>Menú cambia sección</li>
      </Card.Text>
    </Card.Body>
  </Card>
  <Card className="card2 wow animate__animated animate__zoomIn" data-wow-delay="1s">
    <Card.Img variant="top" src={Qr2} />
    <Card.Body>
      <Card.Title>Intermedio</Card.Title>
      <Card.Text>
          <h2>$1700.00 Mx.</h2>
          100% código, completamente interactivo, menús y submenús  con las opciones que ofreces. 
      <li>1 año de servicio</li>
      <li>Menu Interactivo</li>
      <li>Banner logo o promición</li>
      <li>Sección redes sociales</li>
      <li>Producto y precio</li>
      </Card.Text>
    </Card.Body>
  </Card>
  <Card className="card3 wow animate__animated animate__backInRight" data-wow-delay="1s">
    <Card.Img variant="top" src={Qr3} />
    <Card.Body>
      <Card.Title>Pro</Card.Title>
      <Card.Text>
      <h2>$2100.00 Mx.</h2>
      Menú que no solo es digital, también se convierte en una poderosa forma de mercadotecnia. 
      <li>1 año de servicio</li>
      <li>Menu Interactivo</li>
      <li>Banner Slider</li>
      <li>Sección redes sociales</li>
      <li>Producto, fotografía, precio y descripción breve </li>
      </Card.Text>
    </Card.Body>
  </Card>
</CardDeck>   
</Container>
        </div>
    )
}

export default PreciosQr
