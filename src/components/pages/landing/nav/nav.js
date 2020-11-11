import React from 'react';

import './nav.css';
import logo from  "../../../../assets/images/logo.png";

class Nav extends React.Component {

    render() {
        return(
            <nav>
                <img src={logo} alt="logo"/>
                <div>
                    <a href="_blank"> CONTATO </a>
                    <a href="_blank"> FOTOS </a>
                    <a href="_blank"> MAPA </a>
                    <button disabled> turn </button>
                </div>
            </nav>
        );
    }
}

export default Nav;