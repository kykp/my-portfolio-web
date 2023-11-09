import React from 'react'
import CTA from './CTA'
import "./header.css"
import HeaderSocials from './HeaderSocials'


const Header = () => {
   return (
    <header>
      <div className="container header__container">
        <h5>Hello I`m</h5>
        <h1>Konstantin Revutsky</h1>
        <h5 className='text-light'>FrontEnd Developer</h5>
        {/*<CTA/> */}
        <div className="btn__about">
          <a href="#contact" className="btn btn-primary">
            Let`s Talk
          </a>
        </div>
        <a href="#contact" className='scroll__down'>Scroll Down</a>
      </div>
    </header>
  )
}

export default Header