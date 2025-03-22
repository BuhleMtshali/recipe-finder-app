import React from "react";
import './Search.css'
const SearchComponent = () => {
    return (
        <div className="search-container">
            <div className="search-div">
                <input type="search" placeholder="e.g Salmon" id="input-search"/>
                <button id="search-btn">+ Add ingredient</button>
            </div>
            <div className="ingredients-container">
                <h1>Ingredients on hand:</h1>
                <ul>
                    <li>Chicken breasts</li>
                </ul>
            </div>
        </div>
    )
}

export default SearchComponent;