import React from 'react'

export const Moviecard = ({number,image,rateing,releasedate,title }) => {
  return (
    <div  className='  cursor-pointer    rounded-md text-center hover:scale-105   shadow-xl  '> 
  
       <img className=" rounded-md " src={`http://image.tmdb.org/t/p/w500${image}`} alt="noimaage" />
      
      <div > 
        <h1 className='font-bold text-xl'>{title}</h1>
         <h1>Rating : {rateing}</h1> 
         <div className='flex justify-center'>
         <h1>Release Date: {releasedate} 
         </h1>  <h1 className='ml-9 font-bold text-2xl'>{number+1}</h1>   
         </div>
     </div>  
 
        
    </div>
  )
}
