import React from 'react'
import "./portfolio.css"
import IMG1 from "../../assets/portfolio1.jpg"
import IMG2 from "../../assets/portfolio2.jpg"
import IMG3 from "../../assets/portfolio3.jpg"
import IMG4 from "../../assets/portfolio4.jpg"
import IMG5 from "../../assets/portfolio5.jpg"
import IMG6 from "../../assets/portfolio6.jpg"


const data = [{
  id: 1,
  image: IMG3,
  title: "Mesto",
  github: "https://github.com/kykp/mesto",
  demo: "https://kykp.github.io/mesto/"
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
  title: " Video-Catalog",
  github: "https://github.com/kykp/React-Video-Catalog",
  demo: "https://kykp.github.io/React-Video-Catalog/"
},
{
  id: 4,
  image: IMG4,
  title: "ToDo list on React",
  github: "https://github.com/kykp/ReactLearn1.io",
  demo: "https://kykp.github.io/ReactLearn1.io/"
}, {
  id:5,
  image: IMG5,
  title: "First SPA React",
  github: "https://github.com/kykp/spa-react",
  demo: "https://spa-react-ka5j77d00-kykp.vercel.app/"
}, {
  id:6,
  image: IMG6,
  title: "E-commerce",
  github: "https://github.com/kykp/e-shop",
  demo: "https://kykp.github.io/e-shop/"
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