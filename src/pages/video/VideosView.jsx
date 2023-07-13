import React from "react";
import { Link } from "react-router-dom";
import "./vidv.css";
import SearchBar from "../../components/SearchBar";
import { useQuery } from "react-query";
import endpoints from "../../api/endpoints";
import VideoItem from "../../components/videoItem";
import Loading from "../../components/Loading";
const url = "http://localhost:3443/api/";



function VideosView() {
  const { data, isLoading, isError, error } = useQuery(["getAllVideo"], () =>
    endpoints.getAllVideo()
  );

  if (isLoading) return  <div className="center"><Loading/></div> ;
  if (isError) return <span>Erro: {error.message}</span>;
  
  if (data.length === 0) {
    return <span>Não existe Items dessa categoria</span>;
  }

  return (
    <main className="geralvd">
      <div className="searchPv">
        <SearchBar></SearchBar>
      </div>
      <section className="video_content grid">
        {data.map((video) => (
          <Link to={"/" + video.id}>
            <VideoItem
              imageUrl={url + "file/" + video.coverpath.split("/")[0]}
              perfilI="https://static.rfstat.com/renderforest/images/v2/landing-pics/youtube-logo/3818.jpg"
              heading={video.titulo}
            />
          </Link>
        ))}
      </section>
    </main>
  );
}

export default VideosView;
