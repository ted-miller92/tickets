import React from 'react';
import TicketItems from './TicketItems';

function Ticket ({ticket}){
    const ticket_class = ticket.active == true ? "active" : "inactive";

    return (
        <div className={`${ticket_class}`}>
            {ticket.cust_name}
            {ticket.date}
            {ticket.time}
            <TicketItems ticket={ticket} />
        </div>
    );
}

export default Ticket;