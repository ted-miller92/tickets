import React from "react";
import { useState, useEffect } from 'react';
import "./css/AddItemToTicket.css"

function AddItemToTicket({setIsOpen, items, ticket_items, setTicketItems}) {
    
    const [selectedItem, setSelectedItem] = useState('');

    const [price, setPrice] = useState();

    const item = useState();
    const [mods, setMods] = useState();
    
    return (
        <>
        <div className="modal">
            <h1>ADD ITEM TO TICKET</h1>
            <div className="formWrapper">
                {/* the list of selectable items*/ }
                
                <label for="selectedItem">Choose an item: </label>
                <select
                    name="selectedItem"
                    value={selectedItem}
                    onChange={e => setSelectedItem(e.target.value)}
                >
                    <option>Select an Item</option>
                    {items.map((item, i) => 
                    <option
                        key={i}
                        value={JSON.stringify(item)}>
                        {item.item_name}
                    </option>
                    )}

                </select>
                
                <br />
                <label for="mods">Modifications</label>
                <br />
                <textarea name="mods"
                    value={mods}
                    onChange={e => setMods(e.target.value)}
                >

                </textarea>
                <button type="button" onClick={() => setTicketItems(
                    [                    
                    ...ticket_items,
                    {
                        item_name: selectedItem.item_name,
                        price: selectedItem.price,
                        mods: mods
                    }
                ],
                
                setIsOpen(false)
                

                )}>Add To Ticket</button>
                <button type="button" onClick={() => setIsOpen(false)}>Cancel</button>
            </div>
        </div>
        <div className="modalOverlay"></div>
        </>
    )
}

export default AddItemToTicket;