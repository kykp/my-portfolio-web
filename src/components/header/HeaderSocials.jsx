import React from 'react'
import {BsLinkedin} from "react-icons/bs"
import {FiGithub} from "react-icons/fi"
import {FiTwitter} from "react-icons/fi"

const HeaderSocials = () => {
  return (
    <div className='header__socials'>
        <a href="https://linkedin.com"
            rel="noreferrer" 
            target="_blank"><BsLinkedin/></a>
        <a href="https://github.com" 
            rel="noreferrer"
            target="_blank"><FiGithub/></a>
        <a href="https://twitter.com" 
            rel="noreferrer" 
            target="_blank"><FiTwitter/></a>
    </div>
  )
}

export default HeaderSocials