import { useContext } from "react";
import { PlayerContext } from "../../contexts/PlayerContext";

import { ReactComponent as PlayBack } from "../../assets/icons/play-back.svg";
import { ReactComponent as Play } from "../../assets/icons/play.svg";
import { ReactComponent as Pause } from "../../assets/icons/pause.svg";
import { ReactComponent as PlayForward } from "../../assets/icons/play-forward.svg";

function Controls (props){

  const { play, handlePlay, reproducedLastMusic, reproducedPreviousMusic } = useContext(PlayerContext);
  
  return (
    <div className={`flex justify-between max-w-[190px] m-auto ${props.className}`} >
      <div className="cursor-pointer hover:opacity-80" onClick={reproducedPreviousMusic}>
        <PlayBack />
      </div>
      <div className="cursor-pointer hover:opacity-80" onClick={handlePlay}>
        {!play ? <Play /> : <Pause />}
      </div>
      <div className="cursor-pointer hover:opacity-80" onClick={reproducedLastMusic}>
        <PlayForward />
      </div>
    </div>
  )
}

export default Controls;