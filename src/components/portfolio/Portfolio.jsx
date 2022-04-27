import React from 'react'
import "./portfolio.css"
import IMG1 from "../../assets/portfolio1.jpg"
import IMG2 from "../../assets/123.jpg"

const data = [{
  id: 1,
  image: IMG1,
  title: "Title of work",
  github: "github link",
  demo: "demo link"
},
{
  id: 2,
  image: IMG2,
  title: "Russian Travel",
  github: "https://github.com/kykp/russian-travel",
  demo: "https://kykp.github.io/russian-travel/index.html"
},
{
  id: 3,
  image: IMG1,
  title: "Title of work",
  github: "github link",
  demo: "demo link"
},
{
  id: 4,
  image: IMG1,
  title: "Title of work",
  github: "github link",
  demo: "demo link"
}

]
const Portfolio = () => {
  return (
    <section id="portfolio">
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>

      <div className='container portfolio__container'>
       {
         data.map(({id, image, title, github, demo}) => {
           return (
            <article key={id} className='portfolio__item'>
              <div className='portfolio__item-image'>
                <img src={image} alt={title}/>
              </div>
              <div>
                <h3>{title}</h3>
                <div className="portfolio__item-cta">
                <a href={github} className='btn' rel="noreferrer" target="_blank">Github</a>
                <a href={demo} className='btn btn-primary' rel="noreferrer" target="_blank" >Live Demo</a>
              </div>
              
              </div>
          </article>
           )
         })
       }

   
      </div>
    </section>
  )
}

export default Portfolio