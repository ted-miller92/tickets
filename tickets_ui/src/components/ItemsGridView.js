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