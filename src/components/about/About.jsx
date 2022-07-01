import React, {useEffect} from 'react'
import "./about.css"
// import ME from "../../assets/me-1.png"
import {CgAwards} from "react-icons/cg"
import {FiUsers} from "react-icons/fi"
import {VscFolderLibrary} from "react-icons/vsc"

import {useOnScreen} from "../hooks/UseOnScreen"

function whenIamStartLearnJS() {
  const dateOfStart = new Date("03/01/2022");
  const currentDate = new Date();

  let Difference_In_Time = currentDate.getTime() - dateOfStart.getTime();
  let Difference_In_Days = Difference_In_Time / (1000 * 3600 * 24);

  let currentStage = Math.floor(Difference_In_Days/30);

  if (currentStage > 12 ) {
    return (currentStage / 12) + (currentStage - 12)
  } else {
    return currentStage
  }
}


const About = ({updateData,  myProjectDone}) => {
  const [ref, visible] = useOnScreen({ threshold: 0.7 });
console.log(myProjectDone)
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
              <small>{whenIamStartLearnJS()} + months</small>
            </article>

            <article className="about__card">
              <FiUsers className="about__icon"/>
              <h5>Favorite Library</h5>
              <small>React JS, MERN Stack</small>
            </article>

            <article className="about__card">
              <VscFolderLibrary className="about__icon"/>
              <h5>Projects Made In The Learning Process</h5>
              <small>{myProjectDone} Completed</small>
            </article>

            
          </div>
          <p> At Yandex Practicum I studied HTML and CSS, two projects were made.  The next time I studied Javascript and practiced on Codewar.com . Now I'm learning React - this is what I really like! I'm currently working on my own project using MERN Stack, which will be a football-themed app.</p>
          <div className='btn__about'>
           <a href="#contact" className='btn btn-primary '>Let`s Talk</a>
          </div>
            
        </div>
      </div>
    </section>
  )
}

export default About