import Controls from "./Controls";
import Reproduction from "./Reproduction";

import ImageAlbum from "../../assets/images/album-music.jpg";

function Player (props){

  return (
    <div
      className={`
        bg-tolopea-400
        w-full
        px-10
        ${props.variant == "vertical" ? "py-12" : "py-10"}
        rounded-xl
      `}
    >
      <img 
        src={ImageAlbum}
        className="rounded-md"
      />
      <Titles
        music="Acorda Devinho"
        author="Banda Rocketseat"
      />
      <Controls
        className="mb-7"
      />
      <Reproduction
        total={100}
        reproduced={90}
      />
    </div>
  )
}

function Titles (props) {

  return (
    <>
      <h3>{props.music}</h3>
      <h4>{props.author}</h4>
    </>
  )
}

export default Player;