import React from 'react'
import ReactPlayer from 'react-player'

export const Video = ({videokey,comeback}) => { 
    
    if(comeback)
 { return ( 
    <div className=' w-52  fixed -ml-72 md:-ml-6'>  
       
     
      {  
        <ReactPlayer url={`https://www.youtube.com/watch?v=${videokey}`} className=""  controls={true}/>
        } 
      

    </div>
  )
}}
