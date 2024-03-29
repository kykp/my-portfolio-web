import React, { useEffect } from "react";
import "./experience.css";
import { BsPatchCheckFill } from "react-icons/bs";
import { useOnScreen } from "../hooks/UseOnScreen";

const dataFront = [
  {
    id: 1,
    name: "HTML",
    level: "Applying",
  },
  {
    id: 2,
    name: "CSS, SCSS",
    level: "Applying",
  },
  {
    id: 3,
    name: "JavaScript",
    level: "GrandMaster",
  },
  {
    id: 4,
    name: "React JS",
    level: "Master",
  },
  {
    id: 5,
    name: "GraphQL",
    level: "Applying",
  },
  {
    id: 6,
    name: "Redux",
    level: "Applying",
  },
  {
    id: 7,
    name: "Redux Tool Kit",
    level: "Applying",
  },
  {
    id: 8,
    name: "TypeScript",
    level: "Applying",
  },
  {
    id: 9,
    name: "React Native",
    level: "Applying",
  },
  {
    id: 10,
    name: 'React Hook Form',
    level: 'Master',
  }
];

const dataBack = [
  {
    id: 1,
    name: "MongoDB",
    level: "Applying",
  },
  {
    id: 2,
    name: "Node JS",
    level: "Applying",
  },
  {
    id: 3,
    name: "WebSocket",
    level: "Applying",
  },
];

const Experience = ({ updateData }) => {
  const [ref, visible] = useOnScreen({ threshold: 0.7 });

  useEffect(() => {
    if (visible) {
      updateData("#me");
    }
  }, [visible]);

  return (
    <section ref={ref} id="experience">
      <h5>What Skills I Have</h5>
      <h2>My Experience</h2>

      <div className="container experience__container">
        <div className="experience__frontend">
          <h3>Frontend Development</h3>
          <div className="experience__content">
            {dataFront.map(({ id, name, level }) => {
              return (
                <article key={id} className="experience__details">
                  <BsPatchCheckFill className="experience__details-icon" />
                  <div>
                    <h4>{name}</h4>
                    <small className="text-light">{level}</small>
                  </div>
                </article>
              );
            })}
          </div>
        </div>

        {/* END OF FRONTEND */}

        <div className="experience__backend">
          <h3>Backend Development</h3>
          <div className="experience__content">
            {dataBack.map(({ id, name, level }) => {
              return (
                <article key={id} className="experience__details">
                  <BsPatchCheckFill className="experience__details-icon" />
                  <div>
                    <h4>{name}</h4>
                    <small className="text-light">{level}</small>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
