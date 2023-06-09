import { IconButton } from "@mui/material";
import React from "react";

import { Pause, PlayArrow } from "@mui/icons-material";
import "./styles/station.css";

const Station = (station) => {
  const audioPlayerRef = React.useRef(null);

  React.useEffect(() => {
    if (station.isPlaying) {
      audioPlayerRef.current.play();
    } else {
      audioPlayerRef.current.pause();
    }
  }, [station.isPlaying]);

  return (
    <div className="song_container radio-container">
      <div className="left">
        <IconButton onClick={station.onClick} className="play_btn">
          {station.isPlaying ? <Pause /> : <PlayArrow />}
        </IconButton>
        <p>Votos: {station.station.votes}</p>
      </div>
      <div className="right">
        <p>{station.station.name}</p>
      </div>
      <audio
        ref={audioPlayerRef}
        src={station.station.urlResolved}
        style={{ display: "none" }}
      ></audio>
    </div>
  );
};

export default Station;
