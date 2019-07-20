import React from 'react'
import TeamHeader from './../TeamHeader'
import PlayerCard from './../PlayerCard'

const Coach = () => {
  return (
    <div>
      <TeamHeader teamName='Oakland Roots' teamLogo='' wins='12' losses='4' tie='0' seeding='2nd' />
      <PlayerCard />
    </div>
  )
}

export default Coach