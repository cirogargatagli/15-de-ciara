import React from "react";
import taylor from "../audio/taylor.mp3";
import miss from "../audio/missAmericana.mp3";
import Fearless from "../audio/fearless.mp3";
import Player from "@madzadev/audio-player";
import "@madzadev/audio-player/dist/index.css";

const Reproductor = () => {
  const tracks = [
    {
      url: taylor,
      title: "You belong with me",
      tags: ["house"],
    },
    {
      url: miss,
      title: "Miss Americana",
      tags: ["dnb"],
    },
    {
      url: Fearless,
      title: "Fearless",
      tags: ["dubstep"],
    },
  ];

  const colors = `html {
    --playerBackground: #efb810;
    --titleColor: #ffffff; 
    --timeColor: #ffffff;
    --progressSlider: #ffffff;
    --progressUsed: #151616;
    --progressLeft: #ffffff;
    --volumeSlider: #ffffff;
    --volumeUsed: #151616;
    --volumeLeft:  #ffffff;
}`;

  return (
    // <div className="audio-player-container">
    //   <AudioPlayer src={mp3} autoPlay controls />
    // </div>
    <Player
      trackList={tracks}
      includeTags={false}
      includeSearch={false}
      // showPlaylist={false}
      customColorScheme={colors}
    />
  );
};

export default Reproductor;
