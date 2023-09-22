import React from "react";
import AudioPlayer from "react-audio-player";
import mp3 from "./Quevedo.mp3";

const Reproductor = () => {
  return (
    <div className="audio-player-container">
      <AudioPlayer src={mp3} autoPlay controls />
    </div>
  );
};

export default Reproductor;
