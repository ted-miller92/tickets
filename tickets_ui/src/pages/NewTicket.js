import React from "react";
import { useState, useEffect } from 'react';

import Navigation from '../components/Navigation';
import ItemsGridView from "../components/ItemsGridView";

function NewTicket() {
    
    const [items, setItems] = useState([]);

    const loadItems = async () => {
        const response = await fetch('/items');
        const data = await response.json();
        setItems(data);
    }

    useEffect(() => {
        loadItems();
    }, []);

    
    return (
        <div>
            <Navigation />  
            <h1>New Ticket</h1>
            <form>
                <label for="cust_name">Customer Name </label>
                <input name="cust_name" id="cust_name" type="text"></input>

                <ul>
                    <li>Item 1</li>
                    <li>Item 2</li>
                    <li>Item 3</li>
                </ul>
                <button onSubmit="sendTicket">Send Ticket</button>
            </form>
            
            {/* <ItemsGridView  items={items}/> */}
        </div>
    )
}

export default NewTicket;