import React from "react";
import CartIcon from '../img/cart.png'


export default function CartWidget() {

    return (

        <div className="Cart">
            <img src={CartIcon} alt="" />
            <p>0</p>
        </div>

    );
}