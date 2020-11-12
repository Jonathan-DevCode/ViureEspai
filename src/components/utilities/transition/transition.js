import React from 'react';
import "./transition.css";

function Transition(props) {
    return(
        <div className="transition">
            <h3> {props.value.h3} </h3>
            <p> {props.value.p} </p>
        </div>
    );
}

export default Transition;
