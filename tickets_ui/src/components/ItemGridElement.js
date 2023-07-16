import React from "react";
import "./css/ItemGridElement.css";

function ItemGridElement(item) {

    const item_sold_out = item.item.sold_out ? "soldOut" : "";
    const sold_out_msg = item.item.sold_out? "Sold Out" : "";

    return (
        <div className={`itemGridElement ${item_sold_out}`}>
        
            <h3>{item.item.item_name}</h3>
            <h1 className="warning">{sold_out_msg}</h1>
            <p>{item.item.price}</p>    
        </div>
    )
}

export default ItemGridElement;