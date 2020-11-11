import React from 'react';
import './presentation.css';
import wish from '../../../../assets/images/wish.svg';
import { IconContext } from 'react-icons';
import { FaArrowDown } from 'react-icons/fa';


class Presentation extends React.Component {

    render() {
        return(
            <div className="presentation">
                <div className="size">
                    <h1><b> CONSIGA O CABELO <br/> DE SEUS SONHOS </b></h1>
                    <p> Faça sua consulta agora </p>
                    <button className="schedule"> Agendar agora 
                        <IconContext.Provider value={{ className: "provider" }}>
                            <FaArrowDown /> 
                        </IconContext.Provider>
                    </button> 
                </div>
                <div className="logo">
                    <img className="logoImg" src={wish} alt="logo"/>
                </div>
            </div>
        );
    }
}

export default Presentation;