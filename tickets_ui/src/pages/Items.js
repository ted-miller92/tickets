import React from 'react';
import { useState, useEffect } from 'react';

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
        <div className="card">
            <Navigation />
            <ItemsGridView items={items}/>
        </div>
    )
}

export default Items;