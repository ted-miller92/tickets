/*
ItemGridElement.js
Renders an individual item as part of the ItemsGridView.js component
*/

import React from "react";
import "./css/ItemGridElement.css";

function ItemGridElement(item) {
    // is an item sold out? 
    const item_sold_out = item.item.sold_out ? "soldOut" : "";
    const sold_out_msg = item.item.sold_out? "Sold Out" : "";

    return (
        <div className={`itemGridElement ${item_sold_out}`}>
            <div className="itemInfo">
                <h2>{item.item.item_name}</h2>
                <p>{item.item.price}</p>    
                <p className="warningOverlay">{sold_out_msg}</p>
            </div>
            <div className="buttonGroup">
                <button>Update</button>
                <button>Delete</button>
                <button>Mark Sold Out</button>
            </div>
            
        </div>
    )
}

export default ItemGridElement;