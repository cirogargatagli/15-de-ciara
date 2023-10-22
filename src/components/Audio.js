import React from "react";
import AudioPlayer from "react-audio-player";
import mp3 from "../audio/taylor.mp3";
import Player from "@madzadev/audio-player";
import "@madzadev/audio-player/dist/index.css";

const Reproductor = () => {
  const tracks = [
    {
      url: "https://github.com/cirogargatagli/15-de-ciara/blob/master/src/audio/taylor.mp3",
      title: "You belong with me",
      tags: ["house"],
    },
    // {
    //   url: "https://audioplayer.madza.dev/Madza-Late_Night_Drive.mp3",
    //   title: "Miss Americana & The Hearbreak Prince",
    //   tags: ["dnb"],
    // },
    // {
    //   url: "https://audioplayer.madza.dev/Madza-Persistence.mp3",
    //   title: "Fearless",
    //   tags: ["dubstep"],
    // },
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
