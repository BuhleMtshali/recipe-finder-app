import { useState } from 'react'
import './App.css';
import Header from './components/Header';
import SearchComponent from './components/Search';

function App() {


  return (
    <div className='app-container'>
      <Header />
      <SearchComponent />
    </div>
  )
}

export default App
