function Reproduction (props){

  let pendent = props.total - props.reproduced;
  let percentReproduced = (props.total * props.reproduced) / 100;

  const formatMinutesSeconds = (secondsTotal) => {
    
    let minutes = Math.floor(secondsTotal % 3600 / 60).toString().padStart(2,'0');
    let seconds = Math.floor(secondsTotal % 60).toString().padStart(2,'0');

    return `${minutes}:${seconds}`
  }

  return (
    <div className={`${props.className}`}>
      <div className="w-full h-[6px] bg-gray-400 bg-opacity-10 rounded-lg mb-2">
        <div
          style={{width: `${percentReproduced}%`}}
          className="h-full bg-white-100 bg-opacity-80 rounded-lg"
        ></div>
      </div>
      <div className="flex justify-between">
        <span className="text-sm text-gray-500">{formatMinutesSeconds(props.reproduced)}</span>
        <span className="text-sm text-gray-500">{formatMinutesSeconds(pendent)}</span>
      </div>
    </div>
  )
}

export default Reproduction;