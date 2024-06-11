import React from "react";

export const Moviecard = ({
  number,
  image,
  id,
  rateing,
  releasedate,
  title,
}) => {
  const openmovie = (i) => {
    console.log(i);
    if (i) {
      window.open(
        "https://www.themoviedb.org/movie/" + id,
        "_blank",
        "menubar=yes,location=yes,resizable=yes,scrollbars=yes,status=yes"
      );
    }
  };

  return (
    <div
      onClick={() => openmovie(id)}
      className="  cursor-pointer  border-yellow-500 border-8  text-yellow-100  rounded-2xl  text-center hover:scale-105   shadow-xl  "
    >
      <img
        className=" rounded-md "
        src={`http://image.tmdb.org/t/p/w500${image}`}
        alt="noimaage"
      />

      <div>
        <h1 className="font-bold text-2xl">{title}</h1>
        <div className="text-left ml-2">
          <h1>Rating : {rateing}</h1>
          <div className="flex  flex-row">
            <h1>Release Date: {releasedate}</h1>{" "}
          </div>
        </div>
        <h1 className=" absolute right-4 top-3 text-white font-bold text-2xl">
          {number + 1}
        </h1>
      </div>
    </div>
  );
};
