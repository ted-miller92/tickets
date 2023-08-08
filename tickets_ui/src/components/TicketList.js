/*
TicketList.js Component
Horizontal Scroll menu component for rendering the tickets
*/

import React from 'react';
import Ticket from './Ticket';
import './css/TicketList.css';

function TicketList({tickets, onComplete}) {
    return (
        <div className="horizontalScrollMenu">
            {tickets.map((ticket, i) => <Ticket 
            ticket={ticket}
            onComplete={onComplete}
            key={i} />)}
        </div>
    )
}

export default TicketList;