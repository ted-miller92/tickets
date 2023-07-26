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
    const [promo_code, setPromoCode] = useState();
    const [active, setActive] = useState();
    
    const [isOpen, setIsOpen] = useState(false);

    const loadItems = async () => {
        const response = await fetch('/api/items');
        const data = await response.json();
        setItems(data);
    }

    useEffect(() => {
        loadItems();
    }, []);

    const promoCodeValidation = async() => {
        const response = await fetch(`promo_code/code?code=${promo_code}`, {
            method: "GET"
        })
        
        const result = await response.text()
        console.log(result);
    }

    const createTicket = async () => {
        const newTicket = {cust_name, ticket_items, active, promo_code};

        const response = await fetch('/api/tickets', {
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
        <>
            <h1>New Ticket</h1>
            <div className="formWrapper">
                <label for="cust_name">Customer Name </label>
                <input 
                    type="text" 
                    name="cust_name" 
                    id="cust_name" 
                    onChange={e => setCustName(e.target.value)}
                    />
                <br/>

                <button onClick={() => setIsOpen(true)}>Add Item to Ticket</button>

                {isOpen && <AddItemToTicket 
                    setIsOpen={setIsOpen} 
                    items={items}
                    ticket_items={ticket_items}
                    />}

                <label for="promo_code">Promo Code: </label>
                <input
                    type="text"
                    name="promo_code"
                    id="promo_code"
                    onChange={e => setPromoCode(e.target.value)}
                    />

                <button onClick = {() => promoCodeValidation(promo_code)}>Check Promo Code</button>


                <button>Save for Later</button>
                <button onClick = {() => createTicket()}>Send Ticket</button>
            </div>
        </>
    )
}

export default NewTicket;