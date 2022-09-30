import React from "react";
import ClimbingBoxLoader from "react-spinners/ClimbingBoxLoader";
import './LoadScreen.css';

export default function LoadScreen({ show }) {
    return (show) ? (
        <div className="loadscreen">
            <div className="spinner">
                <ClimbingBoxLoader color={'#DA0037'} loading={show} cssOverride={''} size={15} />
            </div>
        </div>
    ) : ''
}