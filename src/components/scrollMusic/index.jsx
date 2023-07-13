import React from 'react'
import MRHome from '../MRHome'
import "./mm.css"
import endpoints from "../../api/endpoints";
import { Link } from "react-router-dom";
import { useQuery } from "react-query";
import Loading from '../Loading';
const url = "http://localhost:3443/api/";




export default function Mscroll() {
    const { data, isLoadind, isError, error } = useQuery(["getAllAudio"], () =>
      endpoints.getAllAudio()
    );

    if (isLoadind) return <Loading/>;
    if (isError) return <span>{error.message}</span>;
    if (!data) return <span>Empty</span>;

  return (
    <div className="Mscroll">
      {data.map((music) => {
        const coverImage = url
          .concat("file/")
          .concat(music.coverpath.split("/")[0]);
        return (
          <Link className='lll' to={'/Musica'}>
            <MRHome link={coverImage} />
          </Link>
        );
      }).slice(-4).reverse()}
     
    </div>
  );
}
