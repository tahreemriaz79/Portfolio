import React from 'react'
import Hero from '../hero/Hero'
import Featured from '../featured/Featured'
import Recent from './recents/Recent'
import Location from './location/Location'


const Home = () => {
  return (
    <>
      <Hero/>
      <Featured/>
      <Recent/>
      <Location/>
    </>
  )
}

export default Home
