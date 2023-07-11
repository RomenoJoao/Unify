import React from 'react'
import VideoItem from '../videoItem'
import endpoints from '../../api/endpoints'
import { useQuery } from 'react-query'
import { Link } from 'react-router-dom'
import "./playvideos.css"
const url = "http://localhost:3443/api/";
export default function PlaylistVideo() {

 const { data, isLoading, isError, error } = useQuery(["getAllVideo"], () =>
   endpoints.getAllVideo()
 );
    if(isLoading) return <span>Loading...</span>
    if(isError) return <span>{error.message} </span>
    if(!data) return <span>Empty</span>
  return (
    <div className="playlContent">
      {data.map((video) => (
        <Link to={"/" + video.id}>
          <VideoItem key={video.id}
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
