import React from "react";
import ReactDOM from "react-dom/client";
import logo from "./logo.png";
import user from "./user.png";
import "./style.css";

const Heading = () => {
    return (
        <div className="navbar">
            <div className="logo">
                <img src={logo}></img>
            </div>
            <div className="search">
                <input type="search" placeholder="search..."></input>
                <button type="submit">Search
                </button>
            </div>
            <div className="navlink">
                <img src={user}></img>
            </div>
        </div>
    )
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<Heading />);