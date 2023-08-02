import React from "react";
import { useState, useEffect } from 'react';
import "./css/AddItemToTicket.css"

function AddItemToTicket({setIsOpen, items, ticket_items, setTicketItems}) {
    
    const [selectedItem, setSelectedItem] = useState('');
    const [itemName, setItemName] = useState();
    const [price, setPrice] = useState();
    const [mods, setMods] = useState();
    
    function handleItemChange(item){
        // Multiple steps involved in setting the selected item
        // Make the dropdown reflect the currently selected item
        setSelectedItem(item);

        // parse the item to access properties of it
        const parsedItem = JSON.parse(item);

        // set state variables to use when adding item to ticket
        setPrice(parsedItem.price);
        setItemName(parsedItem.item_name);
    }

    return (
        <>
            <div className="modal">
                <h1>Add Item to Ticket</h1>
                <div className="formWrapper">
                    {/* the list of selectable items*/ }
                    
                    <label for="selectedItem">Choose an item: </label>
                    <select
                        name="selectedItem"
                        value={selectedItem}
                        onChange={e => handleItemChange(e.target.value)}>

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
                        // spread operator to add items to ticket_items array
                        [                    
                        ...ticket_items,
                        {
                            item_name: itemName,
                            price: price,
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