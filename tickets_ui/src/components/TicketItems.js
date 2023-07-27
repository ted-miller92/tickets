import React from 'react';
import ItemOnTicket from './ItemOnTicket';
import './css/TicketItems.css';

function TicketItems( {ticket}) {
    
    const items = ticket.items;

    return (
        <ol>
            {items.map((item, i) => <ItemOnTicket item={item} key={i} />)}
        </ol>
    );
}

export default TicketItems;