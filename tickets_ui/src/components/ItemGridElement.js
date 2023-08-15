/*
ItemGridElement.js
Renders an individual item as part of the ItemsGridView.js component
*/
import React from "react";
import "./css/ItemGridElement.css";

function ItemGridElement({item, onSoldOut, onDelete}) {
    // is an item sold out? 
    const item_sold_out = item.sold_out ? "soldOut" : "";
    const sold_out_msg = item.sold_out? "Sold Out" : "";

    return (
        <div className={`itemGridElement ${item_sold_out}`}>
            <div className="itemInfo">
                <h2>{item.item_name}</h2>
                <p>{item.price}</p>    
                <p className="warningOverlay">{sold_out_msg}</p>
            </div>
            <div className="buttonGroup">
                <button className="button" type="button">Update</button>
                <button className="button" type="button" onClick= {() => onSoldOut(item._id)}>Sold Out</button>
                <button className="button red" type="button" onClick= {() => onDelete(item._id)}>Delete</button>
            </div>
        </div>
    )
}

export default ItemGridElement;