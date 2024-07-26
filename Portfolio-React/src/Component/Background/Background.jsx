import React from 'react'
import vedio1 from './Portfolio.mp4'
import vedio2 from './vedio2.mp4'
import vedio3 from './vedio3.mp4'
import './Background.css'

const Background = ({playStatous ,heroCount}) => {

  if(playStatous){

 
  return (
    <video className='background' autoPlay loop muted >
<source  src={vedio1}/>
    </video>
   
  )
}
else if(heroCount==0) {
  <video className='background' autoPlay loop muted >
  <source  src={vedio2}/>
      </video>
}
else if(heroCount==1){
  return(
    <video className='background' autoPlay loop muted >
    <source  src={vedio2}/>
        </video>
  )
 
 
}

}

export default Background