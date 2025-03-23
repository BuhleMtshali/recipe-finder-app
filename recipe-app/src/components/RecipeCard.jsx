import React from "react";
import './RecipeCard.css'

const RecipeCard = ({recipe: {strCategory, strMeal, strMealThumb, idMeal, strYoutube}}) => {
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
           <a href={strYoutube} target="_blank">See More</a>
            </div>
        </div>
    )
}

export default RecipeCard;