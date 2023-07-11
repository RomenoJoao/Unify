import React from 'react'
import './comentslist.css'
import endpoints from '../../api/endpoints';
import { useQuery } from 'react-query';
export default function Comments
() {

  const { data, isLoading, isError, error } = useQuery(["getAllComments"], () =>
    endpoints.getAllComments()
  );

if (isLoading) return <span>Carregando</span>
if(isError) return <span>erro:{error.message} </span>
if(data.length === 0) return <span>Empty</span>

return (
  <>
    {data.map((comentario) => (
      <div className="details_Comment">
        <div className="img">
          <img src=" " alt="" />
        </div>
        <div className="heading">
          <h4>
            {comentario.authorC.name}
            <i className="fa fa-circle-check"></i>
          </h4>
          <span>{comentario.cratedAt}</span>
          <h5>{comentario.texto}</h5>
          <span>Show More</span>
        </div>
      </div>
    ))}
  </>
);
}
