import React from 'react'
import About from './About'
import NameCard from './NameCard'
import PlayList from './PlayList'
import Ratings from './Ratings'
import Reviews from './Reviews'
import Skills from './Skills'

const ProfileCard = () => {
  return (
    <div>
      <Ratings />
      <NameCard />
      <PlayList />
      <About />
      <Skills />
      <Reviews />
    </div>
  )
}

export default ProfileCard