import React from "react";
import './RecipeCard.css'

const RecipeCard = ({recipe: {strCategory, strMeal, strMealThumb, idMeal}}) => {
    return (
        <div className="recipe" key={idMeal}>
            <div className="recipe-img">
            <img src={strMealThumb} alt="" />
            </div>
            <div className="category">
            <p>{strCategory}</p>
            </div>
            <div className="recipe-text">
            <p>{strMeal}</p>
            </div>
        </div>
    )
}

export default RecipeCard;