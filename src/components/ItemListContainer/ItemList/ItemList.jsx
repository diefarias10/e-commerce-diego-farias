import React from "react";
import Item from "./Item.jsx/Item";
import './ItemList.css';

export default function ItemList({ items }) {
    return (

        <div className="itemList">
            {items.map(item => <Item item={item} />)}
        </div>

    );
}