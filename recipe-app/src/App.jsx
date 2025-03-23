import { useState, useEffect } from 'react'
import './App.css';
import Header from './components/Header';
import RecipeCard from './components/RecipeCard';

function App() {
  //useState 
  const [recipes, setRecipes] = useState([]);


  //useEffect hook
  useEffect(() => {
    searchRecipes()
  }, []);

  //searchrecipe function
  const searchRecipes = async (recipe) => {
    const url = 'https://themealdb.p.rapidapi.com/randomselection.php';
    const options = {
      method: 'GET',
      headers: {
        'x-rapidapi-key': 'eea6a34f4dmsh296963a5654d19ep13d93ajsn94fa453c501f',
        'x-rapidapi-host': 'themealdb.p.rapidapi.com'
      }
    }
      const response = await fetch(url, options);
      const data = await response.json();
      console.log(data.meals);
      setRecipes(data.meals)
  }



  return (
    <div className='app-container'>
      <Header />

      {/* search container */}
      <div className="search-div">
      <input type="search" placeholder="e.g Salmon" id="input-search" />
      <button id="search-btn" >+ Add ingredient</button>
      </div>
      {/* search container */}

      {/* rendering the results */}
        {recipes?.length > 0 ? (
        <div className="recipe-container">
          {recipes.map((recipe) => (
            <RecipeCard recipe={recipe} key={recipe.idMeal}/>
          ))}
        </div>
        ) : (
          <div className="empty">
          <h2>No movies found</h2>
        </div>
        )}
      
    </div>
  )
}

export default App
