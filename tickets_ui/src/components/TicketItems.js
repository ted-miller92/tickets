import React from 'react';
import ItemSmallView from './ItemSmallView.js';

function TicketItems( {ticket}) {
    console.log(ticket);
    const items = ticket.items;
    console.log(items);

    return (
        <ul>
            {items.map((item, i) => <ItemSmallView item={item} key={i} />)}
        </ul>
    );
}

export default TicketItems;