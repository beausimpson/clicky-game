import React from "react";
import Navbar from "../Navbar";
import Jumbotron from "../Jumbotron";
import Main from "../Main";
import Footer from "../Footer";

const Homepage = () => {
    return (
        <div>
            <Navbar />
            <Jumbotron />
            <Main />
            <Footer />
        </div>
    );
}

export default Homepage;