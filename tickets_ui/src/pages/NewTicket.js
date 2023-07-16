import React from "react";
import { useState, useEffect } from 'react';

import Navigation from '../components/Navigation';
import ItemsGridView from "../components/ItemsGridView";
import { useNavigate } from "react-router-dom";
import AddItemToTicket from "../components/AddItemToTicket";

function NewTicket() {

    const navigate = useNavigate();
    
    const [items, setItems] = useState([]);
    const [cust_name, setCustName] = useState();
    const [ticket_items, setTicketItems] = useState();
    const [active, setActive] = useState();
    
    const [isOpen, setIsOpen] = useState(false);

    const loadItems = async () => {
        const response = await fetch('/items');
        const data = await response.json();
        setItems(data);
    }

    useEffect(() => {
        loadItems();
    }, []);

    const createTicket = async () => {
        const newTicket = {cust_name, ticket_items, active};

        const response = await fetch('/tickets', {
            method: "POST",
            body: JSON.stringify(newTicket),
            headers: {
                'Content-Type' : 'application/json'
            }
        });

        if (response.status === 201) {
            console.log("added new ticket");
        } else {
            console.log(`error: ${response.status}`);
        }
        
        // redirect home
        navigate("/");
    }
    
    return (
        <div>
            <Navigation />  
            <h1>New Ticket</h1>
            
                <label for="cust_name">Customer Name </label>
                <input 
                    type="text" 
                    name="cust_name" 
                    id="cust_name" 
                    onChange={e =>setCustName(e.target.value)}
                    />
                
                <br/>

                <button onClick={() => setIsOpen(true)}>Add Item to Ticket</button>

                {isOpen && <AddItemToTicket setIsOpen={setIsOpen} />}
                
                <button>Send Ticket</button>
            
            
            {/* <ItemsGridView  items={items}/> */}
        </div>
    )
}

export default NewTicket;