import React from 'react'
import RecentCard from './RecentCard'
import Heading from '../../header/Heading'
import "./Recent.css"

const Recent = () => {
  return (
   <>
   <section className='recent padding'>
    <div className="container">
        <Heading title='Templates List' subtitle=''/>
        <RecentCard/>
    </div>
   </section>
  </>
  )
}

export default Recent
