import { useState, useEffect } from 'react'
import './App.css';
import Header from './components/Header';

function App() {
  //useState 
  const [recipes, setRecipes] = useState([]);


  //useEffect hook
  useEffect(() => {
    searchRecipes('American')
  }, []);

  //searchrecipe function
  const searchRecipes = async (recipe) => {
    const url = `https://themealdb.p.rapidapi.com/filter.php?a=${recipe}`;
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
        
      
    </div>
  )
}

export default App
