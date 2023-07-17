import React from 'react';

function SelectableItem( {item} ) {
    return (
        <option>
            {item.item_name}
        </option>
    );
}

export default SelectableItem;