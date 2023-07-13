import React from 'react';
import Ticket from './Ticket';
import './css/TicketList.css';

function TicketList({tickets}) {
    return (
        <div className="horizontalScrollMenu">
            {tickets.map((ticket, i) => <Ticket ticket={ticket}
            key={i} />)}
        </div>
    )
}

export default TicketList;