import React from 'react'
import './Contact'
import { MdOutlineMailOutline } from "react-icons/md";
import { FaFacebook } from "react-icons/fa";
import { BsWhatsapp } from "react-icons/bs";
import  { useRef } from 'react';
import emailjs from 'emailjs-com';
function Contact() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', form.current, {
        publicKey: 'YOUR_PUBLIC_KEY',
      })
      .then(
        () => {
          console.log('SUCCESS!');
        },
        (error) => {
          console.log('FAILED...', error.text);
        },
      );
  };

  return (
    
     <section id='contact'>
      <h5>Get In Touch</h5>
      <h2> contact me</h2>
      <div className="container contact__container">
        <div className="contact__options">
          <article className='contact__option'>
                 <MdOutlineMailOutline className = "contact__option-icon" />
                 <h4>Email</h4>
                 <h5>mr.abhipal2002@gmail.com</h5>
                 <a href="mailto:dummyegator@gmail.com" target="_blank">Send a message</a>
          </article>
          <article className='contact__option'>
                  <FaFacebook className = "contact__option-icon"/>
                 <h4>Messanger</h4>
                 <h5>Abhishek pal</h5>
                 <a href="https://m.me/profile.php?id=100059329988294" target="_blank">Send a message</a>
          </article>
          <article className='contact__option'>
                  <BsWhatsapp className = "contact__option-icon"/>
                 <h4>Whatsapp</h4>
                 <h5>+91 8299138265</h5>
                 <a href="https://api.whatsapp.com/send?phone+918299138265" target="_blank">Send a message</a>
          </article>
        </div>
       {/* { END OF CONTACT OPTION} */}
       <form ref={form} onsubmit={sendEmail}>
        <input type="text" name='name' placeholder='your full name' required/>
        <input type="email" name='email' placeholder='your mail' required/>
        <textarea name="message" rows={7} placeholder='your message' required></textarea>
        <button type='submit' className='btn btn-primary'>Send message</button>
       </form>
      </div>
     </section>
   
  )
}

export default Contact
