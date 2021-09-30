import React from 'react'
import './navbar.css';
export default function Navbar() {
    return (
        <div>
            <nav id="navbar">
                <div id="logo">
                    <h1>JOKES-APP</h1>
                </div>
                <ul>
                    <li className="item"><a href="/">Home</a></li>
                    <li className="item"><a href="/">Services</a></li>
                    <li className="item"><a href="/">About Us</a></li>
                    <li className="item"><a href="/">Contact Us</a></li>

                </ul>
            </nav>
        </div>
    )
}
