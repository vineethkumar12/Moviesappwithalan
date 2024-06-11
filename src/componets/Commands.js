import React from "react";

export const Commands = ({ commands }) => {
  console.log("vineeth" + commands);
  if (commands) {
    return (
      <div className=" absolute top-6 -right-40 z-10">
        <div className="bg-gradient-to-r from-yellow-500 via-pink-800 to-cyan-700  rounded-md     border  w-80   ml-16 mt-4  md:ml-80 md:mr-80  gap-y-2">
          <ul className="list-decimal ml-5">
            <li>hi alan </li>
            <li>Give me the latest movies</li>
            <li className="">open trailer of the moviename movie</li>
            <li>come back from this trailer </li>
            <li>tell me about moviename movie</li>
            <li> open moviename movie</li>
            <li> else open number movie</li>
            <li> to stops thankyou alan</li>
            <li> come back to home page</li>
          </ul>
        </div>
      </div>
    );
  }
};
