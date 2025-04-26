import React from 'react'
import { Link } from 'react-router-dom'
import './Home.css'

const Home = () => {
  return (
    <div className="home">
      <h1>Select a Category</h1>
      <ul>
        <li className='button'><Link to="/quiz/bollards">Bollards</Link></li>
        <li className='button'><Link to="/quiz/streetSigns">Street Signs</Link></li>
        <li className='button'><Link to="/quiz/cars">Cars</Link></li>
      </ul>
    </div>
  );
};

export default Home