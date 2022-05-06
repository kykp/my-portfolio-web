import React from 'react'
import { useState, useEffect } from "react"
import "./contact.css"
import {MdOutlineEmail} from "react-icons/md"
import {RiMessengerLine} from "react-icons/ri"
import { useRef } from 'react'
import emailjs from "emailjs-com"

import {useOnScreen} from "../hooks/UseOnScreen"


const Contact = ({updateData}) => {
  const [active, setActive] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState(""); 
  const [emailValid, setEmailValid] = useState(false);
  const [emailMessageShow, setEmailMessageShow] = useState("form__email-alert")
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
   if (name.length > 0 && email.length > 0 && message.length > 0 && emailValid) {
     setButtonActive(true);
   } else {
     setButtonActive(false);
   } 
  },[name, email, message, emailValid ])

  useEffect(() => {
    if (email.length > 0) {
      let pattern =  new RegExp(/^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i);
    
      if(!pattern.test(email)) {
        setEmailValid(false);
        setEmailMessageShow("form__email-alert-active")
      } else {
        setEmailValid(true);
        setEmailMessageShow("form__email-alert")
      }
    } else {
      setEmailValid(true);
      setEmailMessageShow("form__email-alert")
    }
   
   },[email])
  const [ref, visible] = useOnScreen({ threshold: 0.7 });
  
  useEffect(() => {
    if (visible) {
      updateData("#contact");
    }
  }, [visible])

  return (
    <section ref={ref} id="contact">
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
        <input  onChange={(e) => setEmail(e.target.value)} type="email" name="email" placeholder='Yuor Email' required />

        <div className={emailMessageShow}>Invalid E-mail!</div>

        <textarea onChange={(e) => setMessage(e.target.value)} name="message" rows="7" placeholder='Your Message' required></textarea>
        <button disabled={buttonActive? null : "disabled"} type='sumbit' className='btn btn-primary'>
          {buttonActive? "Send Message" : "Filled Up Form Please"}</button>
        {/* MODALE WINDOW START */}
        <div className={active? "modale_active":"modale"}>
          {}<h2>Message was sent</h2>
        </div>
        {/* MODALE WINDOW END */}
      </form>
      
      </div>
      
    </section>
  )
}

export default Contact