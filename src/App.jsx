import React, { useContext } from "react"
import Sidebar from "./components/sidebar/Sidebar"
import Player from "./components/player/Player"
import Display from "./components/display/Display"
import { PlayerContext } from "./context/PlayerContext"


function App() {
  
  const {audioRef,track} = useContext(PlayerContext)

  return (
    <>
      <div className="h-screen bg-black">
        <div className="h-[90%] flex">
           <Sidebar></Sidebar>
           <Display></Display>
        </div>
        <Player></Player>
        <audio ref={audioRef} src={track.file} preload="auto"></audio>
      </div>
    </>
  )
}

export default App
