import React from "react";
import { useState, useEffect } from 'react';
import "./css/AddItemToTicket.css"

function AddItemToTicket({setIsOpen, items, ticket_items}) {
    
    const [selectedItem, setSelectedItem] = useState();
    const [itemName, setItemName] = useState();

    const item = useState();
    const [mods, setMods] = useState();


    const addItemToTicket = async () => {
        // set attributes of item to add
        item.item_name = selectedItem.item_name;
        item.price = selectedItem.price;
        item.mods = mods;
        console.log({item});
        // push to ticket items array
        ticket_items.push({item});
        console.log(ticket_items);
        setIsOpen(false);
    }
    
    return (
        <>
        <div className="modal">
            <h1>ADD ITEM TO TICKET</h1>
            <div className="formWrapper">
                {/* the list of selectable items*/ }
                
                <label for="selectedItem">Choose an item: </label>
                <select
                    name="selectedItem"
                    value={itemName}
                    onChange={e => setSelectedItem(JSON.parse(e.target.value))}
                >
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
                <button onClick={addItemToTicket}>Add To Ticket</button>
                <button onClick={() => setIsOpen(false)}>Cancel</button>
            </div>
        </div>
        <div className="modalOverlay"></div>
        </>
    )
}

export default AddItemToTicket;