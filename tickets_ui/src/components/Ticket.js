/* 
Ticket.js Component
A ticket that is to be rendered within the TicketList.js component
*/

import React from 'react';
import TicketItems from './TicketItems';
import './css/Ticket.css';

function Ticket ({ticket, onComplete}){
    const ticket_class = ticket.active == true ? "active" : "inactive";
    const ticket_items = ticket.ticket_items;

    return (
        <div className={`ticket ${ticket_class}`}>
            <h3>{ticket.cust_name}</h3>
            <div>{ticket.time}</div>
            <div>{ticket.date}</div>
            <hr />
            
            <TicketItems ticket_items={ticket_items} />

            <button className="button" type="button" onClick= {() => onComplete(ticket._id)}>Mark Complete</button>
        </div>
    );
}

export default Ticket;