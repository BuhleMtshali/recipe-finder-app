import React from "react";
import './RecipeCard.css'

const RecipeCard = () => {
    return (
        <div className="recipe">
            <div className="recipe-img">
            <img src="/recipe.png" alt="" />
            </div>
            <div className="recipe-text">
            <p>15-minute chicken & halloumi burgers</p>
            </div>
        </div>
    )
}

export default RecipeCard;