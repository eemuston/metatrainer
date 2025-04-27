import React from 'react'
import { Link } from 'react-router-dom'
import './Home.css'

const Home = () => {
  return (
    <div className="home">
      <h1>Select a Category</h1>
      <ul>
        <div className='card'>
          <img className='card-img' src="/images/bollards/bol1.png"/>
          <li className='button'><Link to="/quiz/bollards">Bollards</Link></li>
        </div>
        <div className='card'>
          <img className='card-img' src="/images/streetsigns/sign1.png"/>
          <li>streetSigns coming soon</li>
        </div>
        <div className='card'>
          <img className='card-img' src=""/>
          <li>googleCars coming soon</li>
        </div>
        <div className='card'>
          <img className='card-img' src=""/>
          <li>poles coming soon</li>
        </div>
        <div className='card'>
          <img className='card-img' src=""/>
          <li>license plates coming soon</li>
        </div>
        <div className='card'>
          <img className='card-img' src=""/>
          <li>chervons coming soon</li>
        </div>
        <div className='card'>
          <img className='card-img' src=""/>
          <li>road markings coming soon</li>
        </div>
        <div className='card'>
          <img className='card-img' src=""/>
          <li>randomshit coming soon</li>
        </div>
      </ul>
    </div>
  );
};

export default Home