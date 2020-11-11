import React from 'react';
import {IconContext} from "react-icons";
import {FaInstagram, FaFacebookSquare, FaWhatsapp} from "react-icons/fa";

function Social(props) {
    return(
        <div className="social">
            <IconContext.Provider value={{ style: {background: "#e57373"}, className: "icons" }}>
                <FaInstagram/> 
            </IconContext.Provider> 
            <IconContext.Provider value={{ style: {background: "#2196f3"}, className: "icons" }}>
                <FaFacebookSquare />
            </IconContext.Provider>    
            <IconContext.Provider value={{ style: {background: "#4db6ac"}, className: "icons" }}>
                <FaWhatsapp />
            </IconContext.Provider>                
        </div>
    );
}

export default Social;