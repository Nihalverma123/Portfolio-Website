import React from 'react'
import './Hero.css';
import AnchorLink from 'react-anchor-link-smooth-scroll'
   import  profile from '../../assets/assets/nihal.jpg'
const Hero = () => {
  return (
    <div id='home' className='hero'>

        <img className='nihal' src='https://images.unsplash.com/photo-1618477388954-7852f32655ec?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8ZnJvbnQlMjBlbmQlMjBkZXZlbG9wZXJ8ZW58MHx8MHx8fDA%3D' alt="" />
        <h1><span className='spanh1'>I am Nihal Verma, frontend devloper</span> </h1>
        <p> I am frontend devloper from  <span className='bharat'>Bharat</span>, now i am pursuing B.tech from BundelKhand University Jhansi  </p>
        <div className="hero-action">
          <div className="contact"><AnchorLink className="anchor-link" offset={50} href='#contact'>Contact me</AnchorLink></div>
          <div className="resume-download">My Resume</div>
        </div>
    </div>
  )
}

export default Hero;