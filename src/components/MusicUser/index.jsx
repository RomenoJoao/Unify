import React, { Fragment, useState } from "react";
import { useQuery } from "react-query";
import endpoints from "../../api/endpoints";
import Music from "../../components/Music";
import styles from "./styles.module.css";

import Loading from "../../components/Loading";
const url = "http://localhost:3443/api/";

export default function Muser() {
  const [search, setSearch] = useState("");
  const { data, isLoading, isError, error } = useQuery(["getAudioByUser"], () =>
    endpoints.getAudioByUser()
  );
  const [selectedMusic, setSelectedMusic] = useState(undefined);


  const handleSearch = async ({ currentTarget: input }) => {
    setSearch(input.value);
    try {
      // const url =`/?search=${input.value}`;
      // await axiosInstance.get(url);
    } catch (error) {
      console.log(error);
    }
  };

  if (isLoading) return <Loading/>;
  if (isError) return <div>{error.message}</div>;
  if(!data.length) return <span>Sem Musicas</span>
  const playerImage = url
    .concat("file/")
    .concat(selectedMusic ? selectedMusic.coverpath.split("/")[0] : "");

  return (
    <div className={styles.containerMusic}>
      <div className={styles.mainPage}>
        {Object.keys(data).length !== 0 && (
          <div className={styles.results_container}>
            {data.length !== 0 && (
              <div className={styles.songs_container}>
                {data.map((music) => {
                  const coverImage = url
                    .concat("file/")
                    .concat(music.coverpath.split("/")[0]);
                  return (
                    <div
                      key={music.id}
                      className={styles.musicItem}
                      onClick={() => {
                        setSelectedMusic(music);
                      }}
                    >
                      <img src={coverImage} alt="" />
                      <div>
                        <p>{music.titulo}</p>
                      </div>
                    </div>
                  );
                })}
              </div>
            )}
          </div>
        )}
      </div>
      {selectedMusic && (
        <div className={styles.musicPlayer}>
          <div className={styles.metadata}>
            <img src={playerImage} width={80} height={80} />
            <p
              style={{
                color: "#000",
              }}
            >
              {selectedMusic.titulo}
            </p>
          </div>
          <div className={styles.player}>
            <Music music={selectedMusic} />
          </div>
        </div>
      )}
    </div>
  );
}
