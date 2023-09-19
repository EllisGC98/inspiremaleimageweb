import React from 'react';
import '../App.css';
import InspireLogo from '../assets/Inspire.png';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import Reece from '../assets/Landscape1.jpg';
import Barbers from '../assets/Barbers.jpg';
import Action from '../assets/Action.JPG';
import { Link } from 'react-router-dom';

const Header = () => {
  const pageUp = () => {
    window.scrollTo({ top: (0, 0), behavior: "smooth" });
  };

  return (
    <>
      <div className='header-container'>
        <div className="hero-carousel">
          <Carousel showArrows={false} showThumbs={false} showStatus={false} infiniteLoop autoPlay>
            <div>
              <img src={Action} alt="barber" className="carousel-image" />
            </div>
            <div>
              <img src={Barbers} alt="barber" className="carousel-image" />
            </div>
            <div>
              <img src={Reece} alt="barber" className="carousel-image" />
            </div>
          </Carousel>
          <div className="header-content">
            <Link to='/'>
            <img src={InspireLogo} alt='barber' onClick={pageUp} className='logo' />
            </Link>
            <nav className='navbar'>
              <ul>
                <li>
                  <a href='#about'>About</a>
                </li>
                <li>
                  <a href='#team'>Team</a>
                </li>
                <li>
                  <Link to="/contact">Contact</Link>
                </li>
              </ul>
            </nav>
            <button className='carousel-button' onClick={() => window.location.href 
              = 'https://booksy.com/en-gb/115877_inspire-male-image_barber_1547473_bangor'}>
            Book Now
          </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Header;
