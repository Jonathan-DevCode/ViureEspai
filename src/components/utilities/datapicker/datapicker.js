import React from 'react';
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import "./datapicker.css";

export default class DemoApp extends React.Component {
    render() {
        return (
            <div className="DemoApp card">
                <FullCalendar
                    plugins={[ dayGridPlugin ]}
                    initialView="dayGridMonth"
                    aspectRatio="3"
                />
                <div className="card-text">
                    <p style={{"marginTop": "1rem"}}> Agendamento </p>
                    <small> 
                        Constam em verde os dias com horários disponíveis
                    </small> 
                </div>
            </div>
        )
    }
}