import React from 'react';
import ItemOnTicket from './ItemOnTicket';
import './css/TicketItems.css';

function TicketItems( {ticket}) {
    
    const ticket_items = ticket.ticket_items;

    return (
        <ol>
            {ticket_items.map((item, i) => <ItemOnTicket item={item} key={i} />)}
        </ol>
    );
}

export default TicketItems;