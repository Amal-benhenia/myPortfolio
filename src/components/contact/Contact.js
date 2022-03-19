import "./contact.css"
import {MdOutlineEmail} from 'react-icons/md'
import {RiMessengerLine} from 'react-icons/ri'
import {BsWhatsapp} from 'react-icons/bs'
import React, { useRef } from 'react'
import emailjs from '@emailjs/browser';


const Contact = () => {
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();
  
    emailjs.sendForm('service_6b3grm5', 'template_32b8id8', form.current, 'OXEfr9glliYNGuJQb')
    e.target.reset()
   };
 
       

    
  return (
    <section id='contact'>
    <h5>Get In Touch</h5>
    <h2>Contact Me</h2>
    <div className="container contact_container">
    <div className="contact_options">
    <aticle className="contact_option">
    <MdOutlineEmail className="contact_option_icon"/>
    <h4>Email</h4>
    <h5>ambenhenia@gmail.com</h5>
    <a href="mailto:ambenhenia@gmail.com" target='_blank'>Send a message</a>
    </aticle>
    <aticle className="contact_option">
    <RiMessengerLine className="contact_option_icon"/>
    <h4>Messenger</h4>
    <h5>Amal Ben Henia</h5>
    <a href="https://m.me/amal.benhenia.39" target='_blank'>Send a message</a>
    </aticle>
    <aticle className="contact_option">
    <BsWhatsapp className="contact_option_icon"/>
    <h4>WhatsApp</h4>
    <h5>+21628639221</h5>
    <a href="https://api.whatsapp.com/send?phone=+21628639221" target='_blank'>Send a message</a>
    </aticle>
    </div>
    <form ref={form} onSubmit={sendEmail}>
    <input type="text" name="name" placeholder="Your Full Name" required></input>
    <input type="email" name="email" placeholder="Your Email" required></input>
    <textarea name="message" rows="7" placeholder="Your Message" required></textarea>
    <button type="submit" className="btn btn-primary" >Send Message</button>
    </form>
    </div>
    </section>
  )
}

export default Contact