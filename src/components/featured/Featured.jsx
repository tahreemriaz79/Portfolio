import React from "react"
import Heading from "../header/Heading"
import "./featured.css"
import FeaturedCard from "./FeaturedCard"

const Featured = () => {
  return (
    <>
      <section className='featured background'>
        <div className='container'>
          <Heading title='Featured Portfolio Creator' subtitle='Find All Type of features.' />
          <FeaturedCard />
        </div>
      </section>
    </>
  )
}

export default Featured

