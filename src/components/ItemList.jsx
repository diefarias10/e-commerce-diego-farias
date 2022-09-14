import React from "react";
import Item from "./Item";
import './ItemList.css';

export default function ItemList({ items }) {
    return (
        <div style={{height: '100vh'}}>
            <div className="itemList">
                {items.map(item => <Item item={item} />)}
            </div>
        </div>


    );
}