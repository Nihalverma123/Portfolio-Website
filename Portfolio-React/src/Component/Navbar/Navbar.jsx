import React, { useState ,useRef } from 'react'
import logo from '../../assets/assets/nihal4.png'
import './Navbar.css'
import under_line from '../../assets/assets/nihal9.png'

import ReactDOM from 'react-dom'
import AnchorLink from 'react-anchor-link-smooth-scroll'
import menu_open from '../../assets/assets/menu_open.svg'
import menu_close from '../../assets/assets/menu_close.svg'


const Navbar = () => {
  
const [menu ,Setmenu] =useState("home") ;
const menuRef = useRef(0)
const openMenu =()=>{
  menuRef.current.style.right='0';
}
const closeMenu =()=>{
  menuRef.current.style.right='-350px';
}

  return (
    


    <div id='navbar' className='navbar'>
      

      <img src={logo}  alt="" /> 
      <img src={menu_open} alt=""className='nav-mob-open' onClick={openMenu} />
      
      <ul ref={menuRef} className="nav-menu">
      <img src={menu_close} alt=""  className='nav-mob-close' onClick={closeMenu}/>
        <li><AnchorLink className="anchor-link"  href='#home'><p onClick={()=>Setmenu("home")}>Home</p></AnchorLink>{menu==='home' ? <img src={under_line} alt="" />:<></> }</li>
        <li><AnchorLink className="anchor-link" offset={50} href='#about'><p onClick={()=>Setmenu("about")}>About</p></AnchorLink>{menu==='about' ? <img src={under_line} alt="" />:<></> }</li>
        <li><AnchorLink className="anchor-link" offset={50} href='#services'><p onClick={()=>Setmenu("services")}>Services</p></AnchorLink>{menu==='services' ? <img src={under_line} alt="" />:<></> }</li>
        
        <li><AnchorLink className="anchor-link" offset={50} href='#work'><p onClick={()=>Setmenu("work")}>Portfolio</p></AnchorLink>{menu==='work' ? <img src={under_line} alt="" />:<></> }</li>
        
        <li><AnchorLink className="anchor-link" offset={50} href='#contact'><p onClick={()=>Setmenu("contact")}>Contact</p></AnchorLink>{menu==='contact' ? <img src={under_line} alt="" />:<></> }</li>
      </ul>
      <div className='contact-btn'><AnchorLink className="anchor-link" offset={50} href='#contact'>Contact with me</AnchorLink></div>
    </div>
   
  )
}

export default Navbar