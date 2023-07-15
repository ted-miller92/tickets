import React from "react";
import ItemGridElement from './ItemGridElement';

function ItemsGridView({items}) {
    return (
        <>
            <div className="temsGridView">
                {items.map((item, i) => <ItemGridElement
                    item={item}
                
                />)}
            </div>
        </>
    )
}

export default ItemsGridView;