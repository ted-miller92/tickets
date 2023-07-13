import React from 'react';
import Ticket from './Ticket'

function TicketList({tickets}) {
    return (
        <ul>
            {tickets.map((ticket, i) => <Ticket ticket={ticket}
            key={i} />)}
        </ul>
    )
}

export default TicketList;