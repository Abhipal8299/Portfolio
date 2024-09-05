import React from 'react'
import './Experience.css'
import { FaCheckCircle } from "react-icons/fa";

function Experience() {
  return (
    <section id='experience'>
     <h5>What Skill I Have</h5>
     <h2>My Experience</h2>
     <div className='cotainer experience__container'> 
         <div className='experience__fronted'>
             <h3 className='FD'>Fronted Development <br />
             <br /></h3>
             <div className='experience__content'>
                   <article className='experience details'>
                   <FaCheckCircle />
                      <div>
                      <h4>HTML</h4>
                      </div>
                       <small className='text-light'>Experienced</small>
                   </article>
                   <article className='experience details'>
                   <FaCheckCircle />
                      <div>
                      <h4>CSS</h4>
                      </div>
                       <small className='text-light'>Experienced</small>
                   </article>
                   <article className='experience details'>
                   <FaCheckCircle />
                     <div>
                     <h4>Javascript</h4>
                     </div>
                       <small className='text-light'>Experienced</small>
                   </article>
                   <article className='experience details'>
                   <FaCheckCircle />
                      <div>
                      <h4>Bootstrap</h4>
                      </div>
                       <small className='text-light'>Experienced</small>
                   </article>
                   <article className='experience details'>
                   <FaCheckCircle />
                     <div>
                     <h4>Tailwind</h4>
                     </div>
                       <small className='text-light'>Experienced</small>
                   </article>
                   <article className='experience details'>
                   <FaCheckCircle />
                     <div>
                     <h4>React.js</h4>
                     </div>
                       <small className='text-light'>Experienced</small>
                   </article>
                   <article className='experience details'>
                   <FaCheckCircle />
                     <div>
                     <h4>Next.js</h4>
                     </div>
                       <small className='text-light'>Experienced</small>
                   </article>
                   
             </div>
         </div>
     </div>
    </section>
  )
}

export default Experience
