import React from 'react'
import { useState, useEffect } from "react"
import "./contact.css"
import {MdOutlineEmail} from "react-icons/md"
import {RiMessengerLine} from "react-icons/ri"
import { useRef } from 'react'
import emailjs from "emailjs-com"


const Contact = () => {
  const [active, setActive] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [buttonActive, setButtonActive] = useState(false);

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_w4m8k6e', 'template_rh5j5zo', form.current, 'R0keCiZjRELAuy9Tf')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
      e.target.reset();
  };

  useEffect(() => {
    if (active === true) {
      setTimeout(() => {
        setActive(false);
      }, 2000);
    } 
  },[active])

  useEffect(() => {
   if (name.length > 0 && email.length > 0 && message.length > 0) {
     setButtonActive(true);
   } else {
     setButtonActive(false);
   }
  },[name, email, message])

  const onHandleSubmit = () => {
      setActive(true);
  }

  return (
    <section id="contact">
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>

      <div className='container contact__container'>
      
        <div className="contact__options">
          
          <article className="contact__option">
            
            <MdOutlineEmail className='contact__option-icon'/>
            <h4>Email</h4>
            <h5>kykp@yandex.ru</h5>
            <a href="mailto:kykp@yandex.ru">Send a message</a>
          </article>
          <article className="contact__option">
            <RiMessengerLine className='contact__option-icon'/>
            <h4>Telegramm</h4>
            <h5>@KonstantinRev</h5>
            <a href="https://t.me/KonstantinRev">Send a message</a>
          </article>           
        </div>
        {/* END OF CONTACT OPTIONS */}

      <form ref={form} onSubmit={sendEmail}>
        
        <input onChange={(e) => setName(e.target.value)} type="text" name="name" placeholder='Your Full Name'  required/>
        <input onChange={(e) => setEmail(e.target.value)} type="email" name="email" placeholder='Yuor Email' required />
        <textarea onChange={(e) => setMessage(e.target.value)} name="message" rows="7" placeholder='Your Message' required></textarea>
        <button disabled={buttonActive? null : "disabled"} onClick={onHandleSubmit} type='sumbit' className='btn btn-primary'>
          {buttonActive? "Send Message" : "Filled Up Form Please"}</button>
        {/* MODALE WINDOW START */}
        <div className={active? "modale_active":"modale"}>
          <h2>Message was sent</h2>
        </div>
        {/* MODALE WINDOW END */}
      </form>
      
      </div>
      
    </section>
  )
}

export default Contact