/*
ItemsGridView.js Component
Renders a grid view of the items in the database
*/

import React from "react";
import ItemGridElement from './ItemGridElement';
import "./css/ItemsGridView.css";

function ItemsGridView({items}) {
    return (
        <>
            <div className="itemsGridView">
                {items.map((item, i) => <ItemGridElement
                    item={item}
                
                />)}
            </div>
        </>
    )
}

export default ItemsGridView;