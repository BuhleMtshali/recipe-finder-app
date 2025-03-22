import React from "react";
import "./Header.css";
import '../App.css';

const Header = () => {
    return (
       <div className="header">
            <nav>
                <div className="nav-icon">
                <img src="/recip-img.png" alt="recipe book" />
                </div>
                <div className="nav-text">
                    <h1>Recipe Finder</h1>
                </div>
            </nav>
       </div>
    )
}

export default Header;