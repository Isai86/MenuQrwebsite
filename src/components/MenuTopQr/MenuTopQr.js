import React, { Component } from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faTimes, faBars} from '@fortawesome/free-solid-svg-icons';
import { Link, animateScroll as scroll } from "react-scroll";
import {ReactComponent as ChefIcon} from "../../img/svg/chef.svg";
import './MenuTopQr.scss';
export class MenuTopQr extends Component {
    render() {
        return (
              
            <div className="Menu1">

              <header>
                  <input type="checkbox" id="chk1"></input>
                  <div className="logo"><ChefIcon/> <h1> Menu Qr</h1></div>
                  <ul>
                  <li><a href="/">Home</a></li>
                  <Link
    activeClass="active"
    to="Funciona"
    spy={true}
    smooth={true}
    offset={-70}
    duration= {500}
>¿Como funciona?</Link>
<Link
    activeClass="active"
    to="Beneficios"
    spy={true}
    smooth={true}
    offset={-70}
    duration= {500}
>Beneficios</Link>
<Link
    activeClass="active"
    to="Servicios"
    spy={true}
    smooth={true}
    offset={-70}
    duration= {500}
>Servicios</Link>
<li><a href="/Contacto">Contacto</a></li>
<label htmlFor="chk1" className="menu-close"><FontAwesomeIcon icon={faTimes}/></label> 
{
    
/* 
                      <li><a href="/">Home</a></li>
                      <li><a href="Nosotros">Nosotros</a> </li>
                      <li><a href="Servicios">Servicios</a></li>
                      <li><a href="Portafolio">Portafolio</a></li>
                      <li><a href="/Contacto">Contacto</a></li>
                      <label htmlFor="chk1" className="menu-close"><FontAwesomeIcon icon={faTimes}/></label> */}
                  </ul>
                  <label htmlFor="chk1" className="menu-open">
                      <FontAwesomeIcon icon={faBars}/>
                  </label>
              </header>
            </div>
        )
    }
}

export default MenuTopQr
