import { Container } from '@mui/material'
import React from 'react'
import { useSelector } from 'react-redux'

const ProfileCard = () => {
  const profile = useSelector((state) => state.profile)
  const ameno = useSelector((state) => state.voiceActors)
  console.log(profile)
  console.log(ameno)

  return (
    <div>
      <Container maxWidth='lg' sx={{ paddingX: '20px', paddingY: '30px' }}>
        My apologies, I did not quite finish this page. I was only left with mapping the API data
      </Container>
    </div>
  )
}

export default ProfileCard