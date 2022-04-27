import React from 'react'
import "./experience.css"
import {BsPatchCheckFill} from "react-icons/bs"

const dataFront = [ 
  {
  id: 1,
  name: "HTML",
  level: "Intermediate"
  },
  {
    id: 2,
    name: "CSS",
    level: "Intermediate"
  },
  {
    id: 3,
    name: "JavaScript",
    level: "Studying"
  },
  {
    id: 4,
    name: "React js",
    level: "Studying"
  },
  {
    id: 5,
    name: "GraphQL",
    level: "Studying"
  }
];

const dataBack = [
  {
    id: 1,
    name: "MongoDB",
    level: "The Beginning Of Training"
  }, 
  {
    id: 2,
    name: "Node JS",
    level: "The Beginning Of Training"
  }
];


const Experience = () => {
  return (
    <section id="experience">
      <h5>What Skills I Have</h5>
      <h2>My Experience</h2>

      <div className="container experience__container">

        <div className="experience__frontend">
          <h3>Frontend Development</h3>
          <div className="experience__content">
            {
              dataFront.map(({id, name, level}) => {
                return (
                  <article key={id} className='experience__details'>
                    <BsPatchCheckFill className='experience__details-icon'/>
                    <div>
                      <h4>{name}</h4>
                      <small className='text-light'>{level}</small>
                    </div>
                  </article>
                )
              })
            }
          </div>
        </div>

        {/* END OF FRONTEND */}

        <div className="experience__backend">
          <h3>Backend Development</h3>
          <div className="experience__content">
            {
              dataBack.map(({id, name, level}) => {
                return (
                  <article key={id} className='experience__details'><BsPatchCheckFill className='experience__details-icon'/>
                    <div>
                      <h4>{name}</h4>
                      <small className='text-light'>{level}</small>
                    </div>
                  </article>
                )
              })
            }
         </div>
        </div>
      </div>
    </section>
  )
}

export default Experience