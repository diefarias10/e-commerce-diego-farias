import React from "react";
import logo from "../../img/GGLogo.png";
import CartWidget from "./CartWidget";
import './NavBar.css';


export default function NavBar() {

    return (

        <div className="header">
            <img src={logo} alt="" />
            <ul className="navBar">
                <li><a href="#">Inicio</a></li>
                <li><a href="#">Productos</a></li>
                <li><a href="#">Nosotros</a></li>
            </ul>
            <CartWidget />
        </div>

    );

}