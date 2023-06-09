import React from "react";
import "./home.css";
import "../../components/MRHome";
import MRHome from "../../components/MRHome";
import VideoH from "../../components/VideoH";
import SearchBar from "../../components/SearchBar";
import endpoints from "../../api/endpoints";
import { Link } from "react-router-dom";
import { useQuery } from "react-query";
import Mscroll from "../../components/scrollMusic";
const url = "http://localhost:3443/api/";
const images = [
  "https://images.unsplash.com/photo-1542332213-9b5a5a3fad35?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2340&q=80",
  "https://images.unsplash.com/photo-1542396601-dca920ea2807?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3302&q=80",
  "https://images.unsplash.com/photo-1519114056088-b877fe073a5e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2666&q=80",
  "https://images.unsplash.com/photo-1542451542907-6cf80ff362d6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2421&q=80",
];

const images2 = [
  
  
  "https://images.unsplash.com/photo-1542396601-dca920ea2807?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3302&q=80",
  "https://images.unsplash.com/photo-1542451542907-6cf80ff362d6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2421&q=80",
  "https://images.unsplash.com/photo-1542332213-9b5a5a3fad35?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2340&q=80",
  "https://images.unsplash.com/photo-1519114056088-b877fe073a5e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2666&q=80",
  "https://images.unsplash.com/photo-1542451542907-6cf80ff362d6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2421&q=80",
];
export default function Home() {

  const {data, isError, isLoading, error}= useQuery(['getAllVideo'], ()=>( endpoints.getAllVideo() ));
  if(isLoading) return <span>Carregando</span>
  if(isError) return <span>erro{error.message}</span>
  if(!data) return <span>Categoria Vazia</span>

  return (
    <div className="cgeralh">
      <div className="searchP">
        <SearchBar></SearchBar>
      </div>
      <div className="conteudo">
        <Link className="lnkv" to={'/Video'}>
          <h2>Videos Recentes</h2>
        </Link>
        <div className="videos">
          {data
            .map((video) => (
              <Link className="lik" to={"/" + video.id}>
                <VideoH link={url + "file/" + video.coverpath.split("/")[0]} />
              </Link>
            ))
            .slice(-3).reverse()}
        </div>
        <h2>Musicas Recentes</h2>
        <div className="musicas">
        
            <Mscroll/>

        </div>
       
       {
        /** 
        <div className="musicas">
          <MRHome></MRHome>
          <MRHome></MRHome>
          <MRHome></MRHome>
          <MRHome></MRHome>
          <MRHome></MRHome>
          <MRHome></MRHome>
          <MRHome></MRHome>
          <MRHome></MRHome>


        </div>
*/
    }  </div>
    </div>
  );
}
