import React from "react";
import { useState, useEffect } from 'react';
import { useNavigate } from "react-router-dom";
import AddItemToTicket from "../components/AddItemToTicket";

import TicketItems from "../components/TicketItems";

function NewTicket() {

    const navigate = useNavigate();
    
    // user inputted promo code, not yet validated
    const [inputPromoCode, setInputPromoCode] = useState('');

    // items to display when choosing items for ticket
    const [items, setItems] = useState([]);

    // fields to POST when creating new ticket
    const [cust_name, setCustName] = useState();
    const [ticket_items, setTicketItems] = useState([]);
    const [promo_code, setPromoCode] = useState('N/A');
    const [active, setActive] = useState(true);

    // property for modal appearance when adding item to ticket
    const [isOpen, setIsOpen] = useState(false);

    // load items to display when adding item to ticket
    const loadItems = async () => {
        const response = await fetch('/api/items');
        const data = await response.json();
        setItems(data);
    }

    useEffect(() => {
        loadItems();
    }, []);


    // This function sends a GET request to the Code Tool's 
    // verify.py microservice to determine validity of a promo code
    const promoCodeValidation = async (inputPromoCode) => {
        const response = await fetch(`/code/code?code=${inputPromoCode}`, {
            method: "GET"
        }).then(response => {
            if (!response.ok) {
                alert("Unable to connect to Promo Code Tool");
                throw new Error(response.statusText);
            }
            return response.text();
        }).catch(error => {
            console.error("Error : ", error);
        });
        
        if (response == "Valid"){
            alert("Valid promo code will be applied");
            setPromoCode(inputPromoCode);
        } else {
            alert("Promo code not valid");
        }
        
    }

    // This function sends a POST request to the tickets API,
    const createTicket = async () => {
        const newTicket = {cust_name, ticket_items, active, promo_code};

        setActive(true);

        const response = await fetch('/api/tickets', {
            method: "POST",
            body: JSON.stringify(newTicket),
            headers: {
                'Content-Type' : 'application/json'
            }
        });

        if (response.status === 201) {
            // if everything is valid, notify user and redirect home
            alert("Added new ticket");
            navigate("/");
        } else {
            // alert user that fields are not filled out
            alert("Fill out required fields");
        }
    }
    
    return (
        <>
            <h1>New Ticket</h1>
            <div className="formWrapper">
                <form method="POST" action="/api/tickets">
                    <label for="cust_name">Customer Name </label>
                    <input 
                        type="text" 
                        name="cust_name" 
                        id="cust_name" 
                        onChange={e => setCustName(e.target.value)}
                        />
                    <br/>

                    <button type="button" onClick={() => setIsOpen(true)}>Add Item to Ticket</button>

                    {isOpen && <AddItemToTicket 
                        setIsOpen={setIsOpen} 
                        items={items}
                        ticket_items={ticket_items}
                        setTicketItems={setTicketItems}
                        />}

                    <label for="promo_code">Promo Code: </label>
                    <input
                        type="text"
                        name="promo_code"
                        id="promo_code"
                        onChange={e => setInputPromoCode(e.target.value)}
                        />

                    <button type="button" onClick = {() => promoCodeValidation(inputPromoCode)}>Apply Promo Code</button>
                    
                    <p>Current Items:</p>
                    {ticket_items.map((item, i) => 
                        <p>{item.item_name}, {item.mods}, {item.price}</p>
                    )}

                    <TicketItems ticket_items={ticket_items}/>

                    <button type="button">Save for Later</button>
                    
                    <button type="button" onClick = {() => createTicket()}>Send Ticket</button>
                </form>
            </div>
        </>
    )
}

export default NewTicket;