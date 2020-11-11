import React from 'react';
import { IconContext } from 'react-icons';
import { FaMeteor, FaStar, FaSplotch, FaFire, FaCrown, FaGlobe} from "react-icons/fa";

import "./achievements.css";

let me = {
    icon:  
        <IconContext.Provider value={{ style: { background: "#64b5f6" }, className: "icons" }}>
            <FaCrown />
        </IconContext.Provider>,
    text: "Cabeleireira com 5 anos de experiência",
    link: false,
    plain: "Fundadora da Viure Espai"
}

let first = {
    icon: 
        <IconContext.Provider value={{ style: { background: "#9575cd" }, className: "icons" }}>
            <FaMeteor />
        </IconContext.Provider>,

    text: "Marco Maia",
    link: "https://www.instagram.com/marcomaiastudio/",
}

let second = {
    icon: 
        <IconContext.Provider value={{ style: { background: "#f06292"} , className: "icons" }}>
            <FaFire />
        </IconContext.Provider>,

    text: "Renan dos Santos",
    link: "https://www.instagram.com/rshairprofissional_/",
}

let third = {
    icon: 
        <IconContext.Provider value={{ style: { background: "#4db6ac"}, className: "icons" }}>
            <FaGlobe />
        </IconContext.Provider>,
    text: "Nell Carmo",
    link: false,
    plain: "Profissional conceituado em colorimetria"
}

let fourth = {
    icon: 
        <IconContext.Provider value={{ style: { background: "#ffb74d"}, className: "icons" }}>
            <FaStar />
        </IconContext.Provider>,
    text: "Allan Ricie",
    link: false,
    plain: "Fundador da Vloss"
}


let variable = [ me, first, second, third, fourth ]

export default variable;