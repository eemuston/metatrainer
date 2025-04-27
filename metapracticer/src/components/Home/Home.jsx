import React from 'react'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub, faInstagram } from '@fortawesome/free-brands-svg-icons'
import './Home.css'

const Home = () => {
  return (
    <div className="home">
      <h1>Select a Category</h1>
      <ul>
        <div className='card'>
          <img className='card-img' src="/images/bollards/bol1.png"/>
          <div className='button'><Link to="/quiz/bollards">Bollards</Link></div>
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
          <li>flags coming soon</li>
        </div>
      </ul>
      <div className='bio'>
        <img className='bioimg' src="/me.png"/>
        <div className='icons'>
          <h3>My Socials:</h3>
          <a href='https://github.com/eemuston'><FontAwesomeIcon icon={faGithub} size="5x"/></a>
          <a href='https://www.instagram.com/meemeli.mustone/'><FontAwesomeIcon icon={faInstagram} size="5x"/></a>
        </div>
      </div>
    </div>
  );
};

export default Home