import React from 'react'
import { Moviecard } from './Moviecard'

export const Moviescards = ({totalmovies}) => { 
 const a= totalmovies.map(( movie,i)=>
    {    return ( 
       
    
         <Moviecard  key={movie.id} number={i} title={movie.title} rateing={movie.vote_average} image={movie.poster_path} releasedate={movie.release_date}  id={movie.id}   />
         
       
  )}) 
  return (
    <div id="home" className=" grid     -mt-40   grid-cols-2  md:grid-cols-5 cards gap-3">
     { a
    
    }


    </div>
  )
}
