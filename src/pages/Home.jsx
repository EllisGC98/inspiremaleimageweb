import React from 'react'
import FadeInOnScroll from '../components/FadeInOnScroll'
import Mission from '../components/Mission'
import Team from '../components/Team'

const Home = () => {
  return (
    <div>
        <FadeInOnScroll>
            <Mission />
            <Team />
        </FadeInOnScroll>
    </div>
  )
}

export default Home
