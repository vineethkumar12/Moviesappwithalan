import React from 'react'
import ReactPlayer from 'react-player'

export const Video = ({videokey,comeback}) => { 
    
    if(comeback)
 { return ( 
    <div className=' w-52  fixed -ml-6 -mt-60  rotate-90 md:-ml-6 md:rotate-0 md:mt-8'>  
       
     
      {  
        <ReactPlayer url={`https://www.youtube.com/watch?v=${videokey}`} className=""  controls={true}/>
        } 
      

    </div>
  )
}}
