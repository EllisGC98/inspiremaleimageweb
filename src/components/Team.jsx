import React from 'react'
import TeamCard from './TeamCard'
import '../App.css';
import Ryan from '../assets/Ryan.JPG'
import Reece from '../assets/ReeceTeam.JPG'
import Sam from '../assets/SamTeam.JPG'
import Barbers from '../assets/Barbers.jpg'


const teamMembers = [
  {
    id: 1,
    name: 'Ryan Beattie',
    position: 'Director',
    bio: 'Ryan is one of the founders of Inspire Male Image. First lifting the tools 12 years ago, he always aimed of being top of the filed and focused primarily on precision, cleanliness and top quality finishes making every haircut nothing less than pristine.',
    imageSrc: Ryan,
    bookNow: 'https://booksy.com/en-gb/115877_inspire-male-image_barber_1547473_bangor/staffer/168192#ba_s=bd_1',
  },
  {
    id: 2,
    name: 'Reece Dempster',
    position: 'Director',
    bio: 'Reece is one of the owners of Inspire Male Image. He has been cutting hair for over 10 years and has built up an extensive CV, which includes a stint in salon management. More recently he been building his brand and clientele under his own name which led to this.',
    imageSrc: Reece,
    bookNow: 'https://booksy.com/en-gb/115877_inspire-male-image_barber_1547473_bangor/staffer/168191#ba_s=bd_1',
  },
  {
    id: 3,
    name: 'Sam Gordon',
    position: 'Barber',
    bio: 'Sam has been barbering for nearly 3 years, putting his head down to become one of the best young barbers in Bangor. He is focused on delivering the best experiance to all his clients while being motivated on taking his career to the next level at Inspire Male Image.',
    imageSrc: Sam,
    bookNow: 'https://booksy.com/en-gb/115877_inspire-male-image_barber_1547473_bangor/staffer/168194#ba_s=bd_1',
  }
]

const Team = () => {
  return (
  <div>
       <img src={Barbers} alt="Landscape" style={{ width: '100%', height: 'auto', paddingTop: '50px' }} />
       <section id='team'>
       <h3 className="team-text">Meet The Team</h3>
    <div className="team-container">
      {teamMembers.map((member) => (
        <TeamCard
          key={member.id}
          name={member.name}
          position={member.position}
          bio={member.bio}
          imageSrc={member.imageSrc}
          bookNow={member.bookNow}
         />
      ))}
    </div>
    </section>
  </div>
  );
 }

export default Team
