import "./App.css";
import "./index.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { faHeart } from "@fortawesome/free-solid-svg-icons";
import { useEffect } from "react";
import alanBtn from "@alan-ai/alan-sdk-web";
import { useState } from "react";
import { Moviescards } from "./componets/Moviescards";

//import wordsToNumbers from 'words-to-numbers';
import axios from "axios";
import { Video } from "./componets/Video";
import { Commands } from "./componets/Commands";

//import axios from 'axios';
function App() {
  const alankey =
    "64646727431a428c463455fc755a860d2e956eca572e1d8b807a3e2338fdd0dc/stage";
  //const APIKEY = "192a81102be79532153a351eb666c883";
  //const TMDB = "https://api.themoviedb.org/3/discover/movie";

  const [movies, setmovies] = useState([]);
  const [title, settitle] = useState("fall");
  const [name, setname] = useState(false);
  const [number, setnumber] = useState(0);
  const [video, setvideo] = useState("fall");
  const [name1, setname1] = useState(false);
  const [num, setnum] = useState(false);
  const [videokey, setvideokey] = useState("");
  const [comeback, setcomback] = useState(false);
  const [commands, setcommands] = useState(false);

  useEffect(() => {
    //
    alanBtn({
      key: alankey,
      right: "80px",

      onCommand: ({ command, a, titl, n, video }) => {
        if (command === "movies") {
          setmovies(a);

          setcommands(false);
        }
        if (command === "back") {
          setmovies([]);
          setname(false);
          setname1(false);
          setcomback(false);
        }
        if (command === "open") {
          setname1(false);
          settitle(titl);
          setname(true);
          setcomback(false);
        }
        if (command === "num") {
          setnum(true);
          setnumber(n);
          setcomback(false);
          setname(false);
          setname1(false);
        }
        if (command === "video") {
          setname(false);
          setvideo(video);
          setname1(true);
          setcomback(true);
          setnum(false);
        }
        if (command === "comeback") {
          setcomback(false);
          setnum(false);
          setname(false);
        }
      },
    });
  }, []);
  if (name) {
    for (let i = 0; i < 20; i++) {
      if (movies[i].title.toLowerCase() === title.toLowerCase()) {
        window.open(
          "https://www.themoviedb.org/movie/" + movies[i].id,
          "_blank",
          "menubar=yes,location=yes,resizable=yes,scrollbars=yes,status=yes"
        );
        console.log("number");
        break;
      }
    }
  }
  if (num) {
    for (let i = 0; i < 20; i++) {
      var str = i + 1;
      if (str === parseInt(number)) {
        console.log(number);
        window.open(
          "https://www.themoviedb.org/movie/" + movies[i].id,
          "_blank",
          "menubar=yes,location=yes,resizable=yes,scrollbars=yes,status=yes"
        );
        break;
      }
    }
  }
  if (name1) {
    for (let i = 0; i < 20; i++) {
      if (movies[i].title.toLowerCase() === video.toLowerCase()) {
        axios
          .get(
            "https://api.themoviedb.org/3/movie/" +
              movies[i].id +
              "/videos?api_key=192a81102be79532153a351eb666c883&language=en-US"
          )
          .then((response) => {
            let arr = response.data.results;
            if (arr.length > 0) {
              for (let j = 0; j < 1; j++) {
                if (arr[j].site === "YouTube") {
                  //console.log("https://www.themoviedb.org/movie/"+movies[i].id+"#play="+arr[j].key)
                  //window.open("https://youtu.be/"+arr[j].key)
                  setvideokey(arr[j].key);

                  break;
                }
              }
              // https://youtu.be/BwrZfGq1HlQ
              // https://youtu.be/oQMc7Sq36mI
              //https://www.themoviedb.org/video/play?key=5PSNL1qE6VY
              //https://youtu.be/2vNVGZGlUok
              // https://youtu.be/9FKnTxSC16E
              //https://youtu.be/5PSNL1qE6VY
            }
          });
      }
    }
  }
  const command = () => {
    setcommands(!commands);
  };

  //const [news,setnews]=useState([])

  /*const a =news.map((data,i)=>{
   return (  <div className=' mt-2   w-60'> <img src={ data.urlToImage} alt="vineeth" /> </div>);
     


 })*/

  // 6004b8fcb1604003b4ead57854e8d2c2
  return (
    <div className="main-container">
      <div className="sub-container">
        <div className="heart1 "></div>

        <h1 className="movie text-6xl mb-3 font-bold">WELCOME .</h1>
        <h1 className=" text-white  ml-40  text-2xl   ">
          {" "}
          Use ai assistant and get movies
        </h1>
        <h1 className=" text-white  ml-40  text-2xl   "> The Best Movies</h1>

        <div className="flex ml-40 mt-1">
          <a href="https://github.com/vineethkumar12" target="new">
            {" "}
            <i className="fa-brands fa-github  fa-lg  ml-2 text-5xl  text-white"></i>
          </a>

          <button
            onClick={command}
            className="text-center text-white ml-2 pl-1 pr-2 pl border mt-2 rounded-md h-7  bg-gradient-to-r from-yellow-500 via-pink-800 to-cyan-700"
          >
            {" "}
            commands
          </button>
        </div>

        <div className="card  absolute top-40  ">
          <Moviescards totalmovies={movies} />
        </div>
        <div className="video">
          {" "}
          <Video videokey={videokey} comeback={comeback} />
        </div>
        <div className="commands">
          <Commands commands={commands} />{" "}
        </div>
      </div>
    </div>
  );
}

export default App;
