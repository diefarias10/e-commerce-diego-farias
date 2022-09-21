import React from "react";
import CartIcon from '../img/cart.png';
import { Link } from "react-router-dom";
import { useContext } from "react";
import { CartContext } from "../context/CartContext";


export default function CartWidget() {
    const {howMany} = useContext(CartContext);

    return (

        <div className="Cart">
            <Link to='/cart'>
                <img src={CartIcon} alt="" />
            </Link>
            <p>{howMany()}</p>
        </div >


    );
}