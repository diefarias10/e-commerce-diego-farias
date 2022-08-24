import React from "react";
import logo from "../img/GGLogo.png";
import './NavBar.css';


export default function NavBar () {

    return (

        <div className="header">
            <img src={logo} alt="" />
            <ul>
                <li><a href="#">Inicio</a></li>
                <li><a href="#">Productos</a></li>
                <li><a href="#">Nosotros</a></li>
                <li><a href="#">Carrito</a></li>
            </ul>
        </div>

    );

}