import React from 'react';
import './App.css';
import { BrowserRouter as Router, Link } from "react-router-dom"


const Navbar = ()=>{
    return (
        <div className="navbar">
            <div id="pagenamecontainer">
                <span>TheCocktailDB</span>
                <ul>
                    <li className="homebtn"><Link to="/" style={{ textDecoration: 'none' }}>Home</Link></li>
                    <li className="aboutbtn"><Link to="/About" style={{ textDecoration: 'none' }}>About</Link></li>
                </ul>
            </div>
        </div>
    );
}



export default Navbar;