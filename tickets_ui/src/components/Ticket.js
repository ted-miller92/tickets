import React from 'react';
import TicketItems from './TicketItems';
import './css/Ticket.css';

function Ticket ({ticket}){
    const ticket_class = ticket.active == true ? "active" : "inactive";

    return (
        <div className={`ticket ${ticket_class}`}>
            <h3>{ticket.cust_name}</h3>
            <div>{ticket.time}</div>
            <div>{ticket.date}</div>
            <hr />
            
            <TicketItems ticket={ticket} />

            <button>Mark Complete</button>
        </div>
    );
}

export default Ticket;