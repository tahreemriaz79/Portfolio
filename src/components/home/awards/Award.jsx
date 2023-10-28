import React from 'react'
import "./award.css"
import Heading from '../../header/Heading'
import { awards } from '../../data/Data'

const Award = () => {
  return (
    <>
      <section className="awards padding">
        <div className="container">
            <Heading title='Over Happy User Being with us Still They Love Our Serviced' subtitle='Our Awards'/>
            <div className="container grid4 mtop">
                {awards.map((val, index) => (
                    <div className="box" key={index}>
                        <div className="icon">
                            <span>{val.icon}</span>
                        </div>
                        <h1>{val.num}</h1>
                        <h1>{val.name}</h1>
                    </div>
                ))}
                <br/>
            </div>
        </div>
      </section>
    </>
  )
}

export default Award
