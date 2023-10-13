import React from 'react'
import '../App.css';
import Owners from '../assets/Owners.jpg';


const about = () => {
  return (
    <>
    <section className='about' id='about'>
      <div className="about-container">
      <div className="about-image">
        <img src={Owners} alt="Barber Shop" />
      </div>
      <div className="about-content">
        <h3>About Us: <br></br>Inspire Male Image</h3>
        <p>At Inspire Male Image we are passionate about giving our customers the best haircuts, <br></br> experiance and our full attention to detail.
        That's why we've created a space that's designed to make you feel comfortable and relaxed.
        Our team is comprised of highly skilled professionals who are passionate about their craft and committed to delivering the best possible experience to every client who walks through our doors. Each member of our team has years of experience in the industry and is dedicated to staying up-to-date on the latest grooming techniques and trends.
      </p>
      </div>
    </div>
    </section>
  
      
    </>
  )
}

export default about
