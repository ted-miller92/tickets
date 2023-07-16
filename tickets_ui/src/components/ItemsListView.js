import React from "react";
import {useState, useEffect} from "react";
import ItemSmallView from "./ItemSmallView";

function ItemsListView() {
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
        <>
            <ul>
            {items.map((item, i) => <ItemSmallView
                    item={item}
                
                />)}
            </ul>
        </>
    )
}

export default ItemsListView;