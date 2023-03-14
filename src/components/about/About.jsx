import React, { useEffect } from "react";
import "./about.css";
// import ME from "../../assets/me-1.png"
import { CgAwards } from "react-icons/cg";
import { FiUsers } from "react-icons/fi";
import { VscFolderLibrary } from "react-icons/vsc";

import { useOnScreen } from "../hooks/UseOnScreen";

function whenIamStartLearnJS() {
  const dateOfStart = new Date("03/19/2022");
  const currentDate = new Date();

  let Difference_In_Time = currentDate.getTime() - dateOfStart.getTime();
  let Difference_In_Days = Difference_In_Time / (1000 * 3600 * 24);

  let currentStage = Math.floor(Difference_In_Days / 30);

  if (currentStage > 12) {
    return currentStage / 12 + (currentStage - 12);
  } else {
    return currentStage;
  }
}

const About = ({ updateData, myProjectDone }) => {
  const [ref, visible] = useOnScreen({ threshold: 0.7 });
  useEffect(() => {
    if (visible) {
      updateData("#about");
    }
  }, [visible]);

  return (
    <section ref={ref} id="about">
      <h5>Get To Know</h5>
      <h2>About Me</h2>

      <div className="container about__container">
        <div className="about__content">
          <div className="about__cards">
            <article className="about__card">
              <CgAwards className="about__icon" />
              <h5>Experience</h5>
              <small>{whenIamStartLearnJS()} + months</small>
            </article>

            <article className="about__card">
              <FiUsers className="about__icon" />
              <h5>Favorite Library</h5>
              <h2>React JS</h2>
            </article>

            <article className="about__card">
              <VscFolderLibrary className="about__icon" />
              <h5>Projects Made In The Learning Process</h5>
              <small>{myProjectDone} Completed</small>
            </article>
          </div>
          <p>
          I have been programming for more than a year, I took various courses, internships, wrote on React Js, React Native, Node Js. My favorite stack is React Js, css module, Redux toolkit
          </p>
          <div className="btn__about">
            <a href="#contact" className="btn btn-primary ">
              Let`s Talk
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
