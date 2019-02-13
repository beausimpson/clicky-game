import React from "react";
import "./style.css";

const Jumbotron = () => {
    return (
        <div className="jumbotron jumbotron-fluid">
            <div className="container">
                <h1 className="display-4">Clicky-Game!</h1>
                <p className="lead">Don't Click on an image more than once.</p>
            </div>
        </div>
    )
}

export default Jumbotron;