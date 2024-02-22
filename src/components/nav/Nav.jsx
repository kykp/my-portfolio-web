/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useEffect, useState } from 'react'
import "./nav.css"
import {AiOutlineHome} from "react-icons/ai"
import {SiAboutdotme} from "react-icons/si"
import {BiBook} from "react-icons/bi"
import {RiServiceLine} from "react-icons/ri"
import {BiMessageSquareDetail} from "react-icons/bi"

const data = [{
  id: 1,
  href: "#",
  icon: <AiOutlineHome/>,
},{
  id: 2,
  href: "#about",
  icon: <SiAboutdotme/>
},
{
  id: 3,
  href: "#portfolio",
  icon: <BiMessageSquareDetail/>
},{
  id: 4,
  href: "#contact",
  icon: <RiServiceLine/>
}
]

const Nav = ({navData}) => {
  const [activeNav, setActiveNav] = useState("#");

  useEffect(() => {
    setActiveNav(navData)
  }, [navData])

  const onChange = (href) => {
    setActiveNav(href);
  }

  return (
   <nav >
    {
      data.map(({id, href, icon}) => {
        return (
        <a 
          key={id} 
          href={href} 
          className={activeNav === href ? "active" : ""} 
          onClick={() => onChange(href)}
          >
          {icon}
        </a>)
      })
    }
    </nav>
   
  )
}

export default Nav