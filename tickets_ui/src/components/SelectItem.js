import React from "react";
import {useState, useEffect} from "react";
import ItemOnTicket from "./ItemOnTicket";
import SelectableItem from "./SelectableItem";

function SelectItem() {

    const [items, setItems] = useState([])

    const [item, setItem] = useState();

    const loadItems = async () => {
        const response = await fetch('/api/items');
        const data = await response.json();
        setItems(data);
    }

    useEffect(() => {
        loadItems();
    }, []);

    return (
        <>
            <select>
            {items.map((item, i) => <SelectableItem
                item={item}
                />)}
            </select>
            <br />
            <label for="mods">Modifications:</label>
            <br />
            <textarea name="mods"></textarea>
        </>
    )
}

export default SelectItem;