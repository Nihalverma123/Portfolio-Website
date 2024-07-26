import React, { useState } from 'react'
import Navbar from './Component/Navbar/Navbar'
import Hero from './Component/Hero/Hero'
import About from './Component/About/About'
import Service from './Component/Service/Service'
import Mywork from './Component/Mywork/Mywork'
import Contact from './Component/Contact/Contact'
import Footer from './Component/Footer/Footer'

import Background from './Component/Background/Background'


const App = () => {
let heroDeta=[

  {text1:"hi how" , text2:" bye"},
  {text1:"kjgh" , text2:"kjlbhjgyu"},
  {text1:"k;lmjhi" , text2:"jhh"}
]
const[heroCount ,setHerocount] =useState(2)
const[vedioCount ,setVediocount] =useState(true)

  return (
   

  
   
  <div>
    <Background playStatous={vedioCount} heroCount={heroCount}/>
  <Navbar/>
      <Hero/>
      <About/>
     <Service/>
     <Mywork/>
     <Contact/>
     <Footer/>
  </div>
 
     
    
  )
}

export default App