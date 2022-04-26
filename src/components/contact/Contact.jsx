import React from 'react'
import "./contact.css"
import {MdOutlineEmail} from "react-icons/md"
import {RiMessengerLine} from "react-icons/ri"
import { useRef } from 'react'
import emailjs from "emailjs-com"

const Contact = () => {
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
        <input type="text" name="name" placeholder='Your Full Name'  required/>
        <input type="email" name="email" placeholder='Yuor Email' required />
        <textarea name="message" rows="7" placeholder='Your Message' required></textarea>
        <button type='sumbit' className='btn btn-primary'>Send Message</button>
      </form>
      </div>
    </section>
  )
}

export default Contact