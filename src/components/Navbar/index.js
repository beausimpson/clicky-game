import React from "react";
import "./style.css";

const Navbar = (props) => {
    return (
        <nav className="navbar fixed-top navbar-dark bg-primary">
            <h5>Clicky-Game! By Beau Simpson</h5>
            <h5>{props.message}</h5>
            <h5>Score: {props.score} | Top Score: {props.topScore}</h5>
        </nav>
    )
}

export default Navbar;
