import React from 'react'
import '../App.css';


const Contact = () => {
  return (
    <>
    <section>
        <div className='container'>
            <h3 className='contact-text'>
                Contact
            </h3>
            <div className='contact-info'>
                <p>inspiremi@outlook.co.uk</p>
                <p>@inspiremaleimage</p>
            </div>
            <h3 className='hours-text'>
               Business Hours
            </h3>
            <div className='business-hours'>
                <p>Tuesday 10:00 - 18:00</p>
                <p>Wednesday 10:00 - 18:00</p>
                <p>Thursday 10:00 - 19:00</p>
                <p>Friday 10:00 - 19:00</p>
                <p>Saturday 08:00 - 15:00</p>
            </div>
            <h3 className='location-text'>
                Location
            </h3>
            <div className='address-text'>
                <p>11 Market Street</p>
                <p>Bangor, BT20 4SP</p>
            </div>
        </div>
        <div className='map'>
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2307.8360470762736!2d-5.668205100000028!3d54.6597115!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x48619e18e7a2178d%3A0xfd4aa8d6e51c4920!2s11%20Market%20St%2C%20Bangor%20BT20%204SP!5e0!3m2!1sen!2suk!4v1695132117813!5m2!1sen!2suk" 
                width="100%" 
                height="450" 
                style={{ border: "0" }}
                allowfullscreen="" 
                loading="lazy" 
                referrerpolicy="no-referrer-when-downgrade"
                >
        </iframe>
        </div>
    </section>
    </>
  )
}

export default Contact
