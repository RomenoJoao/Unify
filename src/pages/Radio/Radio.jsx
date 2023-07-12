import ClearIcon from "@mui/icons-material/Clear";
import SearchIcon from "@mui/icons-material/Search";
import { CircularProgress, IconButton } from "@mui/material";
import { RadioBrowserApi } from "radio-browser-api";
import React from "react";
import Station from "../../components/Station";
import styles from "./styles.module.css";

const api = new RadioBrowserApi("Radio");
const Radio = () => {
  const [search, setSearch] = React.useState("Angola");
  const [results, setResults] = React.useState({});
  const [isFetching, setIsFetching] = React.useState(false);
  const [playingRadio, setPlayingRadio] = React.useState(-1);

  const fetchRadio = async () => {
    setResults({});
    try {
      setIsFetching(true);
      const data = await api.searchStations({
        country: search === "" ? "Angola" : search,
        limit: 100,
      });
      setResults(data);
      setIsFetching(false);
    } catch (error) {
      console.log(error);
      setIsFetching(false);
    }
  };

  React.useEffect(() => {
    fetchRadio();
  }, [search]);

  return (
    <div className={styles.container}>
    
      {isFetching && (
        <div className={styles.progress_container}>
          <CircularProgress style={{ color: "#673ab7" }} size="5rem" />
        </div>
      )}
      {Object.keys(results).length !== 0 && (
        <div className={styles.results_container}>
          {results.length !== 0 && (
            <div className={styles.songs_container}>
              {results.map((station, index) => (
                <Station
                  key={station.id}
                  station={station}
                  onClick={() => {
                    if (index === playingRadio) {
                      setPlayingRadio(-1);
                    } else {
                      setPlayingRadio(index);
                    }
                  }}
                  isPlaying={index === playingRadio}
                />
              ))}
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default Radio;
