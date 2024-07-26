import React from 'react'
import left from '../../assets/left.jpg'
import nihal from '../../assets/assets/nihal5.png'
import './About.css'

const About = () => {

  return (

    <>
    <div id='about' className="about">
        <div className="about-title">
            <h1>About me   </h1>  
           
           <img src={nihal} alt="" />
          
        </div>
        
        <div className="about-section">

            <div className="about-left">

             <img className='left-img' src={left} alt="" />

            </div>
            <div className="about-right">

                <div className="about-para">
                    <p>Since I am a fresher I am passionate enough to show my skills and talents. If you approve me for this job then surely I will put all my efforts into bringing this organization to a good position.
                    </p>
                    <p>I am a quick learner, highly motivated, and ready to take on challenges. I am also very adaptable and work well in a team environment. I am excited about the opportunity to contribute to your company and grow with it.</p>
                </div>
                <div className="about-skills">
            <div className="skill"><p>HTML & CSS </p> <hr style={{width:"50%"}} /></div>
            <div className="skill"><p>JavaScript </p> <hr style={{width:"90%"}} /></div>
            <div className="skill"><p>React Js </p> <hr style={{width:"70%"}} /></div>
            <div className="skill"><p>TailwindCSS  </p> <hr style={{width:"60%"}} /></div>
        </div>
            </div>
           
</div>       
        <div className="about-achivements">

        <div className="about-achivement">
            <h1>2+</h1>
            <p>Years Of Exprience In Teaching</p>
        </div>
        <hr />
        <div className="about-achivement">
            <h1>10+</h1>
            <p>Project Compleated</p>
        </div>
        
        <div className="about-achivements"></div>
        </div>
    </div>
    
    </>
  )
}

export default About;