import React from 'react';
import ItemSmallView from './ItemSmallView.js';
import './css/TicketItems.css';

function TicketItems( {ticket}) {
    console.log(ticket);
    const items = ticket.items;
    console.log(items);

    return (
        <ol>
            {items.map((item, i) => <ItemSmallView item={item} key={i} />)}
        </ol>
    );
}

export default TicketItems;