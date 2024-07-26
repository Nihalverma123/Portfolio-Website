import React from 'react'
import './Mywork.css'
import nihal5 from '../../assets/assets/nihal5.png'
import mywork_data from '../../assets/assets/mywork_data'
import arrow_icon from '../../assets/assets/arrow_icon.svg'
const Mywork = () => {

  return (
    <div id='work' className="mywork">
        <div className="mywork-title">
            <h1>My Latest Project</h1>
            <img src={nihal5} alt="" />

        </div>
        <div className="mywork-container">
{mywork_data.map((mywork ,index )=>{

    return <img key={index}  src={mywork.w_img}alt="" />
})}

        </div>

<div className="showMore">
  <p>Show More</p>
  <img src={arrow_icon} alt="" />
</div>
    </div>
  )
}

export default Mywork