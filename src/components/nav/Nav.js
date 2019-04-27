import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faComment, faUser, faSuitcase } from '@fortawesome/free-solid-svg-icons';


import './nav.scss';

const Nav = (props) => {
    return(

        <div className="nav-bar">
            <div className="logo"><a href="#" className="logo"><img src="/assets/logo.jpg" alt="Aleksander Kuźma"/></a></div>
                <nav>
                    <ul>
                    <li><a href="#about"><FontAwesomeIcon className="fa-icon" icon={faUser}/>About me</a></li>
                    <li><a href="#portfolio"><FontAwesomeIcon className="fa-icon" icon={faSuitcase}/>Portfolio</a></li>
                    <li><a href="#contact"><FontAwesomeIcon className="fa-icon" icon={faComment}/>Contact</a></li>
                    </ul>
                </nav>
        </div>
    )
}

export default Nav;