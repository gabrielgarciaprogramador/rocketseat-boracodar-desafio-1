
import { useContext, useState } from "react";
import PlayerContextProvider, { PlayerContext } from "../../contexts/PlayerContext";

import Controls from "./Controls";
import Reproduction from "./Reproduction";

// import ImageAlbum from "../../assets/images/album-music-acorda-devinho.jpg";

function Player (props){

  return (
    <PlayerContextProvider>
      <Content props={props} />
    </PlayerContextProvider>
  )
}

function Content ({props}){

  const { currentMusic, reproducedMusicSeconds } = useContext(PlayerContext);

  const durationMusicSeconds = currentMusic.duration;
  
  return (
    <div
      style={{
        backgroundColor: currentMusic.themeColor
      }}
      className={`
        w-full
        ${props.variant == "vertical" ? "p-9 pt-12" : "p-7"}
        rounded-xl
      `}
    >
      <div
        className={`
          mb-7
          ${props.variant == "horizontal" && "flex gap-7"}  
        `}
      >
        <ImageAlbum 
          image={currentMusic.image}
          className={`
            rounded-md
            ${props.variant == "vertical" ?
              "mb-7 w-full" :
              "w-[84px]"
            }
          `}
        />
        <Titles
          music={currentMusic.name}
          author={currentMusic.author}
        />
      </div>
      
      <Controls />
      {!props.hiddenReproduction && (
        <Reproduction
          className="mt-7"
          total={durationMusicSeconds}
          reproduced={reproducedMusicSeconds}
        />
      )}
    </div>
  )
}

function Titles (props) {

  return (
    <div className="flex flex-col justify-center">
      <h3 className="text-2xl text-white-100 font-bold mb-1">{props.music}</h3>
      <h4 className="text-lg text-white-100 leading-4 opacity-75">{props.author}</h4>
    </div>
  )
}

function ImageAlbum (props) {

  const [image, setImage] = useState(null)
  
  if(props.image){
    import(`../../assets/images/${props.image}`).then(image => setImage(image.default))
  }

  return image && (
    <img
      src={image}
      className={props.className}
    />
  )
}

export default Player;