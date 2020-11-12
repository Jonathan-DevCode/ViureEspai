import React from 'react';
import './maps.css'

function Maps() {
    return(
        <div className="maps card">
            <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3644.3010849776083!2d-46.46634628490667!3d-24.02044558459095!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ce1ef66ea78ed3%3A0x8183177c600728d0!2sR.%20Muiraquit%C3%A3%2C%20400%20-%20Vila%20Tupi%2C%20Praia%20Grande%20-%20SP%2C%2011703-760!5e0!3m2!1spt-BR!2sbr!4v1604599884642!5m2!1spt-BR!2sbr"
                className="google"
                title="Google Maps"
            ></iframe>
            <div className="something card-text">
                <p> Localização </p>
                <small> 
                    Rua Muiraquitã, 398 - Vila Tupi, Praia Grande - SP
                </small>
            </div>
        </div>
    );
}

export default Maps;