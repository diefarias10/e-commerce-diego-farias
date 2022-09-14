import React from "react";
import CartIcon from '../img/cart.png';
import { Link } from "react-router-dom";


export default function CartWidget() {

    return (

        <div className="Cart">
            <Link to='/cart'>
                <img src={CartIcon} alt="" />
            </Link>
            <p>0</p>
        </div >


    );
}