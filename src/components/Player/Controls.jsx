import { ReactComponent as PlayBack } from "../../assets/icons/play-back.svg";
import { ReactComponent as Play } from "../../assets/icons/play.svg";
import { ReactComponent as PlayForward } from "../../assets/icons/play-forward.svg";

function Controls (props){

  return (
    <div className={`flex justify-between max-w-[190px] m-auto ${props.className}`} >
      <div className="cursor-pointer hover:opacity-80">
        <PlayBack />
      </div>
      <div className="cursor-pointer hover:opacity-80">
        <Play />
      </div>
      <div className="cursor-pointer hover:opacity-80">
        <PlayForward />
      </div>
    </div>
  )
}

export default Controls;