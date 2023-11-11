import React from 'react';
import '../App.css';
import InspireLogo from '../assets/Inspire.png';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import Reece from '../assets/Landscape1.jpg';
import Barbers from '../assets/Barbers.jpg';
import Action from '../assets/Action.JPG';
import { Link } from 'react-router-dom';

const Header = ({ open, handleOpen }) => {

  console.log("Header component - open:", open);
  console.log("Header component - handleOpen:", handleOpen);

  
  const pageUp = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };



  return (
    <div className="header-container">
      <div className="hero-carousel">
        <Carousel 
          showArrows={false} 
          showThumbs={false} 
          showStatus={false} 
          showIndicators={false}
          infiniteLoop 
          autoPlay
        >
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
          <Link to="/">
            <img src={InspireLogo} alt="barber" onClick={pageUp} className="logo" />
          </Link>
          <nav>
            <div className={`nav ${open ? 'open' : 'close'}`}>
              <div className="link-container">
                <Link to='/'onClick={handleOpen} href="#about">
                  About
                </Link>
                <a onClick={handleOpen} href="#team">
                  Team
                </a>
                <Link onClick={handleOpen} to="/contact">
                  Contact
                </Link>
              </div>
            </div>
            <div className="nav-btn" onClick={handleOpen}>
              <div className="btn-line"></div>
              <div className="btn-line"></div>
              <div className="btn-line"></div>
            </div>
          </nav>
          <a
            className="book-now-button"
            href="https://booksy.com/en-gb/115877_inspire-male-image_barber_1547473_bangor"
            target="_blank" 
            rel="noopener noreferrer" 
          >
            Book now
          </a>
        </div>
      </div>
    </div>
  );
};

export default Header;
