import React from 'react'
import './Footer.css'
import nihal8 from '../../assets/assets/nihal8.png'
import user_icon from '../../assets/assets/user_icon.svg'
const Footer = () => {
  return (
    <div id='footer' className='footer'>
        <div className="footer-top">
            <div className="footer-top-left">
                <img src={nihal8} alt="" />
                <p>Because I believe that effective communication is a key ingredient in any successful organization. I’m a strong communicator who can listen actively, express my ideas clearly and persuasively, and work collaboratively to ensure that everyone is on the same page

                </p>
            </div>
            <div className="footer-top-right">
               <div className="footer-email-input">
                <img src={user_icon} alt="" />
                <input type="email" placeholder='Enter your email'/>
               </div>
               <div className="footer-suscribe">Subscribe</div>
            </div>
        </div>
        <hr />
        <div className="footer-bottom">
          <div className="footer-bottom-left">
             @ nihal is doing good from 2023
          </div>
          <div className="footer-bottom-right">
           <p>Term of services</p>
           <p>Privecy policy</p>
           <p>Connect with me</p>
          </div>

        </div>
    </div>
  )
}

export default Footer