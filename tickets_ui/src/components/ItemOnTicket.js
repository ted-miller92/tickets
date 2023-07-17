import React from 'react';
import './css/ItemSmallView.css'

function ItemOnTicket(item) {
    return (
        <li>
            {item.item.item_name}
            <ul>
                <p className="mod">{item.item.mods}</p>
            </ul>
            
        </li>
    )
}

export default ItemOnTicket;