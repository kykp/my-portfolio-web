import React, {useEffect} from 'react'
import "./about.css"
// import ME from "../../assets/me-1.png"
import {CgAwards} from "react-icons/cg"
import {FiUsers} from "react-icons/fi"
import {VscFolderLibrary} from "react-icons/vsc"

import {useOnScreen} from "../hooks/UseOnScreen"

const About = ({updateData}) => {
  const [ref, visible] = useOnScreen({ threshold: 0.7 });

  useEffect(() => {
    if (visible) {
      updateData("#about");
    }
  }, [visible])

  return (
    <section ref={ref} id="about">
      <h5>Get To Know</h5>
      <h2>About Me</h2>

      <div className="container about__container">
        {/* <div className="about__me">
          <div className="about__me-image">
            <img src={ME} alt="About" />
          </div>
        </div> */}
        
        <div className="about__content">
          <div className="about__cards">
            <article className="about__card">
              <CgAwards className="about__icon"/>
              <h5>Experience</h5>
              <small>6+ Month Learning</small>
            </article>

            <article className="about__card">
              <FiUsers className="about__icon"/>
              <h5>Favorite Library</h5>
              <small>React js</small>
            </article>

            <article className="about__card">
              <VscFolderLibrary className="about__icon"/>
              <h5>Projects Made In The Learning Process</h5>
              <small>5+ Completed</small>
            </article>

            
          </div>
          <p> At Yandex Practicum I studied HTML and CSS, two projects were made.  The next time I studied Javascript and practiced on Codewar.com . Now I'm learning React - this is what I really like!</p>
          <div className='btn__about'>
           <a href="#contact" className='btn btn-primary '>Let`s Talk</a>
          </div>
            
        </div>
      </div>
    </section>
  )
}

export default About