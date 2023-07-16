import React from "react";
import { useState, useEffect } from 'react';
import ItemsListView from "./ItemsListView";

function AddItemToTicket({setIsOpen, ticket_items, items}) {

    
    return (
        <div>
            <h1>ADD ITEM TO TICKET</h1>

            <ItemsListView items={items}/>

            <button onClick={() => setIsOpen(false)}>CLOSE</button>
        </div>
    )
}

export default AddItemToTicket;