import React from 'react'
import { Link } from "react-scroll";
import './BannerQr.scss';
function BannerQr() {
    return (
        <div className="bannerQr">
          <div className="container">
              <h1><span>MENÚ DE CÓDIGOS QR</span></h1>
              <span className="des"></span>
                <Link
    activeClass="active"
    to="Servicios"
    spy={true}
    smooth={true}
    offset={-70}
    duration= {500}
    className="btn"
>VER PLANES</Link>
              </div>  
        </div>
    )
}

export default BannerQr
