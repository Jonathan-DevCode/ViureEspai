import React from 'react';
import "./portait.css";

function Portait(props) {
    return(
        <div className="portait">
            {props.value.icon}
            <p className="course"> {props.value.text} </p>
            { props.value.link ? 
                <a href={props.value.link} target="_blank"> {props.value.link} </a>
                :
                <p className="sub"> {props.value.plain} </p>
            }
        </div>
    );
}

export default Portait;