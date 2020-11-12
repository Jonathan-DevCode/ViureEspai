import React from 'react';

import './landing.css';

import Nav from '../../components/pages/landing/nav/nav';
import Presentation from '../../components/pages/landing/presentation/presentation';
import Portait from '../../components/utilities/portait/portait';
import Social from "../../components/utilities/social/social";
import Maps from '../../components/utilities/maps/maps';
import Datapicker from '../../components/utilities/datapicker/datapicker';
import variable from '../../data/achievements';
import Transition from '../../components/utilities/transition/transition';

class Landing extends React.Component {

    render() {
        return(
            <div className="landing">


                <div className="first">
                    <div className="nav">
                        <Nav />
                    </div>
                    <Presentation />
                </div>

                <div className="second">
                        <Transition value={{h3: "Tire suas duvidas", p: "Veja como chegar ou agende sua consulta"}} />
                        <Social />
                </div>
                
                <div className="third">
        
                    <div className="achievements">

                        <h3 style={{ marginTop: "2rem"}} > Qualificações </h3>
                        <p> Alguns programas e referências </p>

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
                        
                        <Transition value={{h3: "Tire suas duvidas", p: "Veja como chegar ou agende sua consulta"}} />

                    <div className="other">
                        <div className="lanMaps">
                            <Maps />
                        </div>
                        <div className="lanData">
                            <Datapicker />
                        </div>
                    </div>
                </div>  
                
            </div>
        );
    }
}

export default Landing;