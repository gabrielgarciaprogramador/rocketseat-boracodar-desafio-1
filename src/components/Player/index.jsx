import Controls from "./Controls";
import Reproduction from "./Reproduction";

import ImageAlbum from "../../assets/images/album-music.jpg";

function Player (props){

  return (
    <div
      className={`
        bg-tolopea-400
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
        <img 
          src={ImageAlbum}
          className={`
            rounded-md
            ${props.variant == "vertical" ?
              "mb-7 w-full" :
              "w-[84px]"
            }
          `}
        />
        <Titles
          music="Acorda Devinho"
          author="Banda Rocketseat"
        />
      </div>
      
      <Controls />
      {!props.hiddenReproduction && (
        <Reproduction
          className="mt-7"
          total={212}
          reproduced={200}
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

export default Player;