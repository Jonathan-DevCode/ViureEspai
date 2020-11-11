import React from 'react';
import { IconContext } from "react-icons";
import { FaInstagram, FaFacebookSquare, FaWhatsapp, FaSplotch, FaSpa } from 'react-icons/fa'; 

import './landing.css';

import Nav from '../../components/pages/landing/nav/nav';
import Presentation from '../../components/pages/landing/presentation/presentation';
import Portait from '../../components/utilities/portait/portait';
import Social from "../../components/utilities/social/social";
import Maps from '../../components/pages/landing/maps/maps';

import variable from '../../data/achievements';

class Landing extends React.Component {

    render() {
        console.log({variable})
        return(
            <div className="landing">


                <div className="first">
                    <header>
                        <Nav />
                    </header>
                    <Presentation />
                </div>

                <div className="second">
                        <h3> Quer saber mais? </h3>
                        <p> Nos acompanhe nas redes sociais e fique por dentro de tudo </p>
                        <Social />
                </div>
                
                <div className="third">
                    
                    <div className="achievements">
                        <div className="acvHeader">
                            <h3> Qualificações </h3>
                            <p> Alguns programas e referências </p>
                        </div>
                        <div className="acvDescription">
                            <div>
                                <Portait value={variable[0]} />
                                <Portait value={variable[1]} />
                            </div>
                            <div className="acvRight">
                                <Portait value={variable[2]} />
                                <Portait value={variable[3]} />
                            </div>
                        </div>
                    </div>

                    <div className="video">
                        <Portait value={variable[4]} />
                        <video width="320" height="240" controls></video>
                    </div>

                </div>

                <div className="fourth">
                    <div>
                        <div className="card">
                            maps
                        </div>
                        <div className="card">
                            datas
                        </div>
                    </div>
                </div>  
                
            </div>
        );
    }
}

export default Landing;