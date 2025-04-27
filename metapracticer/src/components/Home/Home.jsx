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
          <img className='card-img' src="/images/home/bollard.png"/>
          <div className='button'><Link to="/quiz/bollards">Bollards</Link></div>
        </div>
        <div className='card'>
          <img className='card-img' src="/images/home/sign.png"/>
          <div className='button'>Street Signs</div>
        </div>
        <div className='card'>
          <img className='card-img' src="/images/home/car.png"/>
          <div className='button'>Google Cars</div>
        </div>
        <div className='card'>
          <img className='card-img' src="/images/home/pole.png"/>
          <div className='button'>Poles</div>
        </div>
        <div className='card'>
          <img className='card-img' src="/images/home/plate.png"/>
          <div className='button'>License Plates</div>
        </div>
        <div className='card'>
          <img className='card-img' src="/images/home/chevron.png"/>
          <div className='button'>Chevrons</div>
        </div>
        <div className='card'>
          <img className='card-img' src="/images/home/markings.png"/>
          <div className='button'>Road Markings</div>
        </div>
        <div className='card'>
          <img className='card-img' src="/images/home/flag.png"/>
          <div className='button'>Flags</div>
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