import React from 'react'
import './Beneficios.scss';
import Media from 'react-bootstrap/Media' 
import {ReactComponent as VirusIcon} from "../../img/svg/precaution.svg";
import {ReactComponent as ClockIcon} from "../../img/svg/clock.svg";
import {ReactComponent as PromoIcon} from "../../img/svg/improvement.svg";
import {ReactComponent as PlantIcon} from "../../img/svg/plant.svg";
function Beneficios() {
    return (
        <div className="beneficios" id="Beneficios">
          <div className="box wow animate__animated animate__zoomIn" data-wow-delay="1s">
            <h1>Beneficios</h1> 
            <Media>
    <VirusIcon/>
    <Media.Body>
      <h5>
Solución higiénica contra COVID-19</h5>
      <p>
      Pedidos seguros y sin contacto. Los cambiadores impresos son un portador de bacterias estadísticamente grande.
      </p>
    </Media.Body>
  </Media> 
  <Media>
    <ClockIcon/>
    <Media.Body>
      <h5> Sin espera</h5>
      <p>
      El cliente ya no tiene que esperar el menú. Él vendrá, se instalará y podrá ver de inmediato lo que está ofreciendo actualmente en el restaurante.
      </p>
    </Media.Body>
  </Media> 
  <Media>
    <PromoIcon/>
    <Media.Body>
      <h5>Promocion de su empresa</h5>
      <p>
      Los enlaces a redes sociales como Instagram o Facebook están disponibles en la versión en línea del menú. Simplemente vincular a su sitio permitirá a los clientes dejar sus comentarios y compartir su negocio mucho más rápido y más fácil.
      </p>
    </Media.Body>
  </Media> 
  <Media>
    <PlantIcon/>
    <Media.Body>
      <h5>Amigable con el medio ambiente</h5>
      <p>
      Un menú en línea reduce la impresión, por ejemplo, de los menús de almuerzo diarios todos los días. Y estará ahorrando dinero y el medio ambiente.
      </p>
    </Media.Body>
  </Media>      
          </div>
          
        </div>
    )
}

export default Beneficios
