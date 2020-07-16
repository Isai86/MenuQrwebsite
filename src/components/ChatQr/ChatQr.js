import React from 'react'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faCommentAlt} from '@fortawesome/free-solid-svg-icons';
import { faFacebookMessenger, faWhatsapp } from '@fortawesome/free-brands-svg-icons'
import './ChatQr.scss';
function ChatQr() {
    return (
        <div className="fab-container1">
            <div className=" fab-icon-holder" id="fab">
            <FontAwesomeIcon icon={faCommentAlt} id="globo"/>
            </div>
            <ul className="fab-options">
                <li>
                <span className="fab-label">Messenger</span>
                <a href="https://m.me/640141460147704" className="fab-icon-holder" id="messenger">
            <FontAwesomeIcon icon={faFacebookMessenger} id="globo"/>
            </a>
                </li>
                <li>
                <a className="fab-label">whatsapp</a>
                <a href="https://api.whatsapp.com/send?phone=+525539352920&text=Hola!%20Quiero%20un%20sitio%20web!" className="fab-icon-holder" id="what">
            <FontAwesomeIcon icon={faWhatsapp} id="globo1"/>
            </a>
                </li>
            </ul>
        </div>
    )
}

export default ChatQr
