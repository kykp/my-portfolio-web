import React, { useEffect } from "react";
import "./about.css";
// import ME from "../../assets/me-1.png"
import { CgAwards } from "react-icons/cg";
import { FiUsers } from "react-icons/fi";
import { VscFolderLibrary } from "react-icons/vsc";

import { useOnScreen } from "../hooks/UseOnScreen";

function whenIamStartLearnJS() {
  const startDate = new Date('2022-03-19');
  const currentDate = new Date();

  let months = (currentDate.getMonth() - startDate.getMonth()) +
      (12 * (currentDate.getFullYear() - startDate.getFullYear()));
  const years = Math.floor(months / 12);
  months = months % 12;

  // return { months: months, years: years };
  return `${years} year, ${months} months`
}

const descriptions = 'Now I work in SeoTLT web studio, my stack is : React + Typescript'
const About = ({ updateData, myProjectDone }) => {
  const [ref, visible] = useOnScreen({ threshold: 0.7 });

  useEffect(() => {
      visible && updateData("#about");
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
              <small>{whenIamStartLearnJS()}</small>
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
          <p> {descriptions} </p>
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
