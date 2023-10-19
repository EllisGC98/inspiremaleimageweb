import React from 'react'
import '../App.css';


const TeamCard = ({ name, position, bio, imageSrc, bookNow}) => {
  return (
    <>
    <div className='team-member-card'>
        <img src={imageSrc} alt={name} 
        className='team-member-image' />
        <h4 className='team-name'>{name}</h4>
        <p className='team-position'>{position}</p>
        <p className='team-bio'>{bio}</p>
        <a href={bookNow} 
        className='book-now-button'>
            Book now
        </a>
    </div>
      
    </>
  )
}

export default TeamCard
