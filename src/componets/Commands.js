import React from 'react'
 
export const Commands = ({commands}) => { 
  console.log("vineeth"+commands) 
  if(commands)
  {return (  

    
    <div className=''> 
    <div className='bg-gradient-to-r from-yellow-500 via-pink-800 to-cyan-700 text-center rounded-md  border  w-80  ml-28 md:ml-80 md:mr-80 flex flex-col gap-y-2'>
   
    <li className='-ml-32'>hi alan </li>
    <li>Give me the latest movies</li>
    <li className='ml-14'>open trailer of the moviename movie</li>
    <li>come back from this trailer </li>
    <li>tell me about moviename movie</li>
    <li> open moviename movie</li>
    <li>  else open number movie</li>
    <li> to stops thankyou alan</li> 
    <li> come back to home page</li>
    </div>  
    </div>
 
  )}
}
