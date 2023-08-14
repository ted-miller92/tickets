/*
NewItem.js
This page has a form which allows users to create a new menu item
*/

import React from "react";
import { useState, useEffect } from 'react';
import { useNavigate } from "react-router-dom";

function NewItem(){
    const navigate = useNavigate();

    const [item_name, setItemName] = useState('');
    const [price, setPrice] = useState('');
    const [sold_out, setSoldOut] = useState(false);

    const createItem = async () => {
        const newItem = {item_name, price, sold_out}

        // make a POST req to API
        const response = await fetch('api/items', {
            method: "POST",
            body : JSON.stringify(newItem),
            headers: {
                "content-type": "application/json"
            }
        });

        if (response.status === 201){
            alert("Added new item");
            navigate("/");
        } else {
            alert("New item not added. Check required fields");
        }
    }

    return (
        <>
            <h1>New Item</h1>
            <div className="formWrapper">
                <form method="POST" action="api/items">
                    <label for="item_name">Item Name: </label>
                    <input 
                        type="text" 
                        name="item_name" 
                        id="item_name" 
                        onChange={e => setItemName(e.target.value)}
                        />
                    <br/>

                    <label for="price">Price: $</label>
                    <input
                        type="number"
                        name="price"
                        id="price"
                        onChange={e => setPrice(e.target.value)}
                        />

                    <button type="button" onClick = {() => createItem()}>Create Item</button>
                </form>
            </div>
        </>
    )
}

export default NewItem;
