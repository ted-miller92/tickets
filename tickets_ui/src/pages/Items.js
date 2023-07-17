import React from 'react';
import { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';

import Navigation from '../components/Navigation';
import ItemsGridView from '../components/ItemsGridView';


function Items() {

    const [items, setItems] = useState([])

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
            <h1>Items</h1>
            <ItemsGridView items={items}/>

            <div className="links">
                <Link className="link" id="newItemLink" to="/new_item">New Item</Link>
            </div>
        </div>
    )
}

export default Items;