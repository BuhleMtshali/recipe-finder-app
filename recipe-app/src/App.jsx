import { useState, useEffect } from 'react';
import './App.css';
import Header from './components/Header';
import RecipeCard from './components/RecipeCard';

function App() {
  //useState 
  const [recipes, setRecipes] = useState([]);
  const [searchMeal, setSearchMeal] = useState(""); // Holds user input
  const [searchResults, setSearchResults] = useState([]); // Holds API results

  //useEffect hook
  useEffect(() => {
    searchRecipes();
  }, []);

  //searchrecipe function
  const searchRecipes = async () => {
    try{
    const url = 'https://themealdb.p.rapidapi.com/randomselection.php';
    const options = {
      method: 'GET',
      headers: {
        'x-rapidapi-key': 'eea6a34f4dmsh296963a5654d19ep13d93ajsn94fa453c501f',
        'x-rapidapi-host': 'themealdb.p.rapidapi.com'
      },
    };
      const response = await fetch(url, options);
      const data = await response.json();
      console.log(data.meals);
      setRecipes(data.meals);
  } catch (error) {
    console.error('Error fetching recipes:', error);
  }
}

  //function for searching for each recipe
  const searchItems = async (meal) => {
    if(!meal) return; //prevents empty searches

    try{
    const url = `https://themealdb.p.rapidapi.com/search.php?s=${meal}`;
    const options =  {
      method: 'GET',
      headers: {
        'x-rapidapi-key': 'eea6a34f4dmsh296963a5654d19ep13d93ajsn94fa453c501f',
        'x-rapidapi-host': 'themealdb.p.rapidapi.com'
      },
    };
    const response = await fetch (url, options);
    const data = await response.json();
    console.log(data.meals);
    setSearchResults(data.meals || []); //handles no results
  } catch (error) {
    console.error("Error searching for meals:", error);
  }
};

  return (
    <div className='app-container'>
      <Header />

      {/* search container */}
      <div className="search-div">
      <input type="search" placeholder="e.g Salmon" id="input-search" value={searchMeal} onChange={(e) => setSearchMeal(e.target.value)}/>
      <button id="search-btn" onClick={() => searchItems(searchMeal)}>+ Add ingredient</button>
      </div>
      {/* search container */}

      {/* rendering the results */}
        {searchResults?.length > 0 ? (
        <div className="recipe-container">
          {searchResults.map((recipe) => (
            <RecipeCard recipe={recipe} key={recipe.idMeal}/>
          ))}
        </div>
        ) : recipes.length > 0 ? (
          <div className="recipe-container">
             {recipes.map((recipe) => (
            <RecipeCard recipe={recipe} key={recipe.idMeal} />
          ))}
          </div>
        ):(
          <div className="empty">
          <h2>No movies found</h2>
        </div>
        )}
    </div>
  );
}


export default App
