import React from 'react';

function ItemSmallView(item) {
    return (
        <div>
            {item.item.item_name}
            {item.item.mods}
        </div>
    )
}

export default ItemSmallView;