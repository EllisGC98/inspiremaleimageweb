import React from 'react'

const TeamCard = ({ name, position, bio, imageSrc, bookNow}) => {
  return (
    <>
    <div className='team-member-card'>
        <img src={imageSrc} alt={name} 
        className='team-member-image' />
        <h4>{name}</h4>
        <p>{position}</p>
        <p>{bio}</p>
        <a href={bookNow} 
        className='book-now-button'>
            Book now
        </a>
    </div>
      
    </>
  )
}

export default TeamCard
