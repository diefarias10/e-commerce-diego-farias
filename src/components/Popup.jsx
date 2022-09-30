import React from "react";
import './Popup.css';
import '../animate.css';

export default function Popup({ show, children }) {
    return (show) ? (
        <div className="popup">
            <div className="popup-inner animate__animated animate__bounceIn" >
                {children}
            </div>
        </div >
    ) : ''
}