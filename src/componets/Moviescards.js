import React from "react";
import { Moviecard } from "./Moviecard";

export const Moviescards = ({ totalmovies }) => {
  const a = totalmovies.map((movie, i) => {
    return (
      <div data-aos="zoom-in">
        <Moviecard
          key={movie.id}
          number={i}
          title={movie.title}
          rateing={movie.vote_average}
          image={movie.poster_path}
          releasedate={movie.release_date}
          id={movie.id}
        />
      </div>
    );
  });
  return totalmovies.length > 0 ? (
    <div id="home">
      <div className=" border-yellow-500 border-8     bg-black text-center p-6 border-10  ">
        <h1 className=" text-yellow-100   text-6xl  font-bold">
          These are latest Movies : 2024
        </h1>
      </div>

      <div className=" grid   bg-black     top-0  p-10  grid-cols-2  md:grid-cols-5 cards gap-4">
        {a}
      </div>
    </div>
  ) : (
    <div></div>
  );
};
