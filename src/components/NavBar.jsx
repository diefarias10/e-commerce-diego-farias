import React from "react";
import logo from "../img/GGLogo.png";
import CartWidget from "./CartWidget";
import './NavBar.css';
import { Link } from 'react-router-dom';


export default function NavBar() {

    return (

        <div className="header">
            <Link to={'/'}>
                <img src={logo} alt=""/>
            </Link>
            
            <ul className="navBar">
                <li><Link to={'/'}>Inicio</Link></li>
                <li><Link to={'/category/Familiares'}>Familiares</Link></li>
                <li><Link to={'/category/Niños'}>Niños</Link></li>
                <li><Link to={'/category/Adultos'}>Adultos</Link></li>
            </ul>
            <CartWidget />
        </div>

    );

}