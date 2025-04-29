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
          <img className='card-img' src="/images/home/flag.png"/>
          <div className='button'><Link to="/quiz/flags">Flags</Link></div>
        </div>
        <div className='card'>
          <img className='card-img' src="/images/home/plate.png"/>
          <div className='button'><Link to="/quiz/plates">License Plates</Link></div>
        </div>
        <div className='card'>
          <img className='card-img' src="/images/home/bollard.png"/>
          <div className='button'><Link to="/quiz/bollards">Bollards</Link></div>
        </div>
        <div className='card'>
          <img className='card-img' src="/images/home/sign.png"/>
          <div className='button'><Link to="/quiz/streetSigns">Street Signs</Link></div>
        </div>
        <div className='card'>
          <img className='card-img' src="/images/home/pole.png"/>
          <div className='button'><Link to="/NotReady">Poles</Link></div>
        </div>
        <div className='card'>
          <img className='card-img' src="/images/home/chevron.png"/>
          <div className='button'><Link to="/NotReady">Chevrons</Link></div>
        </div>
        <div className='card'>
          <img className='card-img' src="/images/home/markings.png"/>
          <div className='button'><Link to="/NotReady">Road Markings</Link></div>
        </div>
        <div className='card'>
          <img className='card-img' src="/images/home/car.png"/>
          <div className='button'><Link to="/quiz/cars">Cars</Link></div>
        </div>
      </ul>
      <div class="last-section">
        <div className='bio'>
          <div className='imgandtxt'>
            <img className='bioimg' src="/images/home/me.png"/>
            <p>Built with heart, not design skills.</p>
          </div>
          <div className='icons-text'>
            <h3>My Socials:</h3>
            <div className='icons'>
              <a href='https://github.com/eemuston'><FontAwesomeIcon icon={faGithub} size="5x"/></a>
              <a href='https://www.instagram.com/meemeli.mustone/'><FontAwesomeIcon icon={faInstagram} size="5x"/></a>
            </div>
        </div>
      </div>
      </div>
    </div>
  );
};

export default Home