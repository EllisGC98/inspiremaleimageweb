import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram } from '@fortawesome/free-brands-svg-icons';
import '../App.css'; 

const Footer = () => {
  return (
    <footer>
      <div className="container">
        <div className="footer-content">
          <hr style={{ border: '1px solid' }} />
          
          <div className="footer-socials">
            <a
              aria-label='Instagram'
              rel='noreferrer'
              target='_blank'
              href='https://www.instagram.com/inspiremaleimage/'
              style={{ marginLeft: 'auto', marginRight: '10px' }} 
            >
              <FontAwesomeIcon icon={faInstagram} size='2x' />
            </a>
          </div>
          <h3>
            11 Market Street <br />
            Bangor, BT20 4SP
          </h3>
          <h3>© Inspire Male Image {new Date().getFullYear()}. All rights reserved</h3>
        </div>
      </div>
    </footer>
  );
};

export default Footer;