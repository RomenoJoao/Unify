import React from "react";
import VideoItem from "../videoItem";
import endpoints from "../../api/endpoints";
import { useQuery } from "react-query";
import { Link } from "react-router-dom";
import "./vuser.css";
import Loading from "../Loading";
const url = "http://localhost:3443/api/";
export default function Vuser() {

  const { data, isLoading, isError, error } = useQuery(["getVideoByUser"], () =>
    endpoints.getVideoByUser()
  );
  
  if (isLoading) return <Loading/>;
  if (isError) return <span>{error.message} </span>;
  if (!data.length) return <span>Sem Videos</span>;
  return (
    <div className="videosUContent">
      {data.map((video) => (
        <Link to={"/" + video.id} className='space'>
          <VideoItem
            key={video.id}
            imageUrl={url + "file/" + video.coverpath.split("/")[0]}
            perfilI="https://static.rfstat.com/renderforest/images/v2/landing-pics/youtube-logo/3818.jpg"
            heading={video.titulo}
            author={video.author}
            data={video.cratedAt}
          />

          <div className="espacop"></div>
        </Link>
      ))}
    </div>
  );
}
