import React, {useEffect} from 'react'
import "./experience.css"
import {BsPatchCheckFill} from "react-icons/bs"
import {useOnScreen} from "../hooks/UseOnScreen"

const dataFront = [ 
  {
    id: 1,
    name: "HTML",
    level: "Applying"
  },
  {
    id: 2,
    name: "CSS",
    level: "Applying"
  },
  {
    id: 3,
    name: "JavaScript",
    level: "Applying"
  },
  {
    id: 4,
    name: "React JS",
    level: "Applying"
  },
  {
    id: 5,
    name: "GraphQL",
    level: "Studying"
  },  {
    id: 6,
    name: "Redux",
    level: "Understanding"
  }
  ,  {
    id: 6,
    name: "Redux Tool Kit",
    level: "Understanding"
  }
];

const dataBack = [
  {
    id: 1,
    name: "MongoDB",
    level: "Understanding"
  }, 
  {
    id: 2,
    name: "Node JS",
    level: "Applying"
  },
  {
    id: 3,
    name: "WebSocket",
    level: "Applying"
  }
];


const Experience = ({updateData}) => {

  const [ref, visible] = useOnScreen({ threshold: 0.7 });
  
  useEffect(() => {
    if (visible) {
      updateData("#experience");
    }
  }, [visible])

  return (
    <section ref={ref} id="experience">
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