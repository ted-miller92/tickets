import React from "react";
import { useState, useEffect } from 'react';
import SelectItem from "./SelectItem";
import "./css/AddItemToTicket.css"

function AddItemToTicket({setIsOpen, items, ticket_items}) {
    
    const item = useState();
    

    const addItemToTicket = async () => {

    }
    
    return (
        <>
        <div className="modal">
            <h1>ADD ITEM TO TICKET</h1>
            <div className="formWrapper">
                {/* the list of selectable items*/ }
                <SelectItem items={items}/>

                <br />

                <button onClick={addItemToTicket}>Add To Ticket</button>
                <button onClick={() => setIsOpen(false)}>Cancel</button>
            </div>
        </div>
        <div className="modalOverlay"></div>
        </>
    )
}

export default AddItemToTicket;