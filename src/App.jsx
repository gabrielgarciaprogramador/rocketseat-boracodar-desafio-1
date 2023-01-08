import Player from './components/Player'
import './App.css'

function App() {
  
  return (
    <div className="w-full h-full flex bg-tolopea-900 p-3">
      <div className="w-[700px] max-w-full m-auto flex gap-8">
        <div className="flex w-[270px]">
          <Player variant="vertical" />
        </div>
        <div className="flex-auto w-auto">
          <div className="flex flex-col gap-8">
            <Player variant="horizontal" />
            <Player variant="horizontal" hiddenReproduction={true} />
          </div>
        </div>
      </div>
    </div>
  )
}

export default App
