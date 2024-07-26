import React from 'react'
import './Service.css'
import Services_data from '../../assets/assets/services_data'
import arrow_icon from '../../assets/assets/arrow_icon.svg'
import service from '../../assets/assets/nihal6.png'
const Service = () => {
  return (
<>
<div id='services' className="service">
    <div className="service-title">
        <h1>Services</h1>
        <img src={service} alt="" />
    </div>
    <div className="service-container">
        {Services_data.map((Service ,index)=>{
return <div key={index} className="service-formate">

    <h2>{Service.s_no}</h2>
    <h3>{Service.s_name}</h3>
    <h4>{Service.s_desc}</h4>
    <div className="service-readmore">
        <h1>Read more</h1>
        <img src={arrow_icon}alt="" />
    </div>
</div>

        })}
    </div>
    
</div>

</>
//  s_no:"01",
//  s_name:"Web design",
//  s_desc:"Web development is the process of building, programming..."
    

  )
}

export default Service