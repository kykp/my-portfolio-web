import React, { useEffect } from "react";
import "./portfolio.css";
import IMG1 from "../../assets/portfolio1.jpg";
import IMG2 from "../../assets/portfolio2.jpg";
import IMG3 from "../../assets/portfolio3.jpg";
import IMG4 from "../../assets/portfolio4.jpg";
import IMG5 from "../../assets/portfolio5.jpg";
import IMG6 from "../../assets/portfolio6.jpg";
import IMG7 from "../../assets/portfolio7.jpg";
import IMG8 from "../../assets/portfolio8.jpg";
import IMG9 from "../../assets/portfolio9.jpg";
import IMG10 from "../../assets/portfolio10.jpg";
import IMG11 from "../../assets/portfolio11.jpg";
import IMG12 from "../../assets/portfolio12.jpg";
import IMG13 from "../../assets/portfolio13.jpg";
import IMG14 from "../../assets/portfolio14.jpg";
import IMG15 from "../../assets/portfolio15.jpg";
import IMG16 from "../../assets/portfolio16.jpg";
import IMG17 from "../../assets/portfolio17.jpg";

import { useOnScreen } from "../hooks/UseOnScreen";

const data = [
  {
    id: 17,
    image: IMG17,
    title: "Todo. React, Redux, FireBase, Typescript",
    github: "https://github.com/kykp/woman_todo",
    demo: "https://woman-todo.vercel.app/",
  },
  {
    id: 16,
    image: IMG16,
    title: "Avia Tickets, React",
    github: "https://github.com/kykp/avia",
    demo: "https://avia-fawn.vercel.app/",
  },
  {
    id: 15,
    image: IMG15,
    title: "Game Gallery Redux Typescript Api",
    github: "https://github.com/kykp/rawg",
    demo: "https://rawg.vercel.app/",
  },
  {
    id: 14,
    image: IMG14,
    title: "Pricing component with toggle",
    github: "https://github.com/kykp/pricing",
    demo: "https://pricing-p4ee.vercel.app/",
  },
  {
    id: 13,
    image: IMG13,
    title: "Chat created by Socket IO",
    github: "https://github.com/kykp/socket_io_chat",
    demo: "https://kykp-chat-websocket.herokuapp.com/",
  },
  {
    id: 12,
    image: IMG12,
    title: "Simple TodoList with Redux Toolkit",
    github: "https://github.com/kykp/todo_redux_toolkit",
    demo: "https://todo-redux-toolkit-delta.vercel.app/",
  },
  {
    id: 11,
    image: IMG11,
    title: "Job List",
    github: "https://github.com/kykp/job-list",
    demo: "https://job-list-nine.vercel.app/",
  },
  {
    id: 10,
    image: IMG10,
    title: "Cats Gallery",
    github: "https://github.com/kykp/frontend-challenge",
    demo: "https://kykp.github.io/frontend-challenge/",
  },
  {
    id: 9,
    image: IMG9,
    title: "Expense Tracker",
    github: "https://github.com/kykp/expence_tracker",
    demo: "https://expence-tracker-seven.vercel.app/",
  },
  {
    id: 8,
    image: IMG8,
    title: "Progress Steps",
    github: "https://github.com/kykp/progress_steps",
    demo: "https://progress-steps-peach.vercel.app/",
  },
  {
    id: 7,
    image: IMG7,
    title: "Expanding Cards",
    github: "https://github.com/kykp/css_gallery",
    demo: "https://css-gallery-virid.vercel.app/",
  },
  {
    id: 6,
    image: IMG6,
    title: "E Shop",
    github: "https://github.com/kykp/e-shop",
    demo: "https://kykp.github.io/e-shop/",
  },
  {
    id: 5,
    image: IMG5,
    title: "SPA React",
    github: "https://github.com/kykp/spa-react",
    demo: "https://spa-react-ka5j77d00-kykp.vercel.app/",
  },
  {
    id: 4,
    image: IMG4,
    title: "ToDo list on React",
    github: "https://github.com/kykp/ReactLearn1.io",
    demo: "https://kykp.github.io/ReactLearn1.io/",
  },
  {
    id: 3,
    image: IMG3,
    title: "Mesto",
    github: "https://github.com/kykp/mesto",
    demo: "https://kykp.github.io/mesto/",
  },
  {
    id: 2,
    image: IMG2,
    title: "Russian Travel",
    github: "https://github.com/kykp/russian-travel",
    demo: "https://kykp.github.io/russian-travel/index.html",
  },
  {
    id: 1,
    image: IMG1,
    title: " Video Catalog",
    github: "https://github.com/kykp/React-Video-Catalog",
    demo: "https://kykp.github.io/React-Video-Catalog/",
  },
];
const Portfolio = ({ updateData, onClick }) => {
  const [ref, visible] = useOnScreen({ threshold: 0.7 });

  useEffect(() => {
    let amountOfWorks = data.length;
    onClick(amountOfWorks);
  }, []);

  useEffect(() => {
    if (visible) {
      updateData("#portfolio");
    }
  }, [visible]);

  return (
    <section id="portfolio">
      <h5 ref={ref}>My Recent Work</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio__container">
        {data.map(({ id, image, title, github, demo }) => {
          return (
            <article key={id} className="portfolio__item">
              <div className="portfolio__item-image">
                <img src={image} alt={title} />
              </div>
              <div>
                <h3>{title}</h3>
                <div className="portfolio__item-cta">
                  <a
                    href={github}
                    className="btn"
                    rel="noreferrer"
                    target="_blank"
                  >
                    Github
                  </a>
                  <a
                    href={demo}
                    className="btn btn-primary"
                    rel="noreferrer"
                    target="_blank"
                  >
                    Live Demo
                  </a>
                </div>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
};

export default Portfolio;
