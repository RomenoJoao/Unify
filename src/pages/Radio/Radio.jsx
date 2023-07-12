import React from 'react'
import ClearIcon from "@mui/icons-material/Clear";
import SearchIcon from "@mui/icons-material/Search";
import { CircularProgress, IconButton } from "@mui/material";
import { RadioBrowserApi } from "radio-browser-api";
import { Fragment, useEffect, useState } from "react";
import Station from "../../components/Station";
import styles from "./styles.module.css";

const api = new RadioBrowserApi("Radio");
const Radio = () => {
  const [search, setSearch] = useState("Angola");
  const [results, setResults] = useState({});
  const [isFetching, setIsFetching] = useState(false);

  const fetchRadio = async () => {
    setResults({});
    try {
      setIsFetching(true);
      // const url =`/?search=${input.value}`;
      // await axiosInstance.get(url);
      const data = await api.searchStations({
        country: search === "" ? "Angola" : search,
        limit: 100,
      });
      console.log(data);
      setResults(data);
      setIsFetching(false);
    } catch (error) {
      console.log(error);
      setIsFetching(false);
    }
  };

  useEffect(() => {
    fetchRadio();
  }, [search]);

  return (
    <div className={styles.container}>
      <div className={styles.search_input_container}>
        <IconButton>
          <SearchIcon />
        </IconButton>
        <input
          type="text"
          placeholder="Pesquise por País"
          onChange={(e) => setSearch(e.target.value)}
          value={search}
        />
        <IconButton onClick={() => setSearch("")}>
          <ClearIcon />
        </IconButton>
      </div>
      {isFetching && (
        <div className={styles.progress_container}>
          <CircularProgress style={{ color: "#673ab7" }} size="5rem" />
        </div>
      )}
      {Object.keys(results).length !== 0 && (
        <div className={styles.results_container}>
          {results.length !== 0 && (
            <div className={styles.songs_container}>
              {results.map((station) => (
                <Fragment key={station.id}>
                  <Station station={station} />
                </Fragment>
              ))}
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default Radio;
