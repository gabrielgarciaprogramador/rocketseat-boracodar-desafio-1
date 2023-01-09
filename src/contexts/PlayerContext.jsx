import { createContext, useEffect, useRef, useState } from "react";

export const PlayerContext = createContext({});

const playlist = [
  {
    "name": "Acorda Devinho",
    "author": "Banda Rocketseat",
    "image": "album-music-acorda-devinho.jpg",
    "themeColor": "#2A2141",
    "duration": 212,
  },
  {
    "name": "Falaaa Dev",
    "author": "Diego Fernandes",
    "image": "album-music-falaaa-dev-diego.jpg",
    "themeColor": "#1e5735",
    "duration": 225,
  },
  {
    "name": "Tik...Toker",
    "author": "Gabriel Buzzi",
    "image": "album-music-tik-toker-gabriel-buzzi.jpg",
    "themeColor": "#763d27",
    "duration": 251,
  },
  {
    "name": "Falaaa Dev², blz?",
    "author": "Mayk Brito",
    "image": "album-music-falaaa-dev-2-blz-mayk-brito.jpg",
    "themeColor": "#b37804",
    "duration": 264,
  },
  {
    "name": "Hello, hello, hello",
    "author": "Jake Gracielly",
    "image": "album-music-hello-hello-hello-jake-gracielly.jpg",
    "themeColor": "#072846",
    "duration": 115,
  }
];

function PlayerContextProvider({ children }) {

  const countReproduced = useRef();

  const [indexCurrentMusic, setIndexCurrentMusic] = useState(0);
  const [currentMusic, setCurrentMusic] = useState({});
  const [reproducedMusicSeconds, setReproducedMusicSeconds] = useState(0);

  const [play, setPlay] = useState(false);

  function selectedMusic(indexMusicPlaylist){
    setIndexCurrentMusic(indexMusicPlaylist)
    setCurrentMusic(playlist[indexMusicPlaylist])
  }

  function handlePlay(){
    
    if(!play){ // Está pausado e será startada a música 
      countReproduced.current = setInterval(countSecondsMusicReproduced, 1000);
    }
    else{ // Está reproduzindo e será pausada a música
      clearInterval(countReproduced.current)
    }

    setPlay(!play);

  }

  function countSecondsMusicReproduced(){
    setReproducedMusicSeconds((prev) => prev + 1)
  }

  function reproducedLastMusic (){

    if(indexCurrentMusic + 1 === playlist.length){
      selectedMusic(0);
    }
    else{
      selectedMusic(indexCurrentMusic + 1);
    }

    setReproducedMusicSeconds(0);
  }

  function reproducedPreviousMusic (){

    if(indexCurrentMusic === 0){
      selectedMusic(playlist.length - 1);
    }
    else{
      selectedMusic(indexCurrentMusic - 1);
    }

    setReproducedMusicSeconds(0);
  }

  useEffect(() =>{
    if(reproducedMusicSeconds > currentMusic.duration){
      reproducedLastMusic()
    }
  }, [reproducedMusicSeconds])


  useEffect(() =>{
    selectedMusic(0)
  }, [])


  return <PlayerContext.Provider value={{currentMusic, reproducedMusicSeconds, play, handlePlay, reproducedLastMusic, reproducedPreviousMusic}}>{children}</PlayerContext.Provider>;
}

export default PlayerContextProvider;
