import React from "react";
import "./comentslist.css";
import endpoints from "../../api/endpoints";
import { useQuery } from "react-query";
import dayjs from "dayjs";



export function Comments({name, date, texto}) {
  const { data, isLoading, isError, error } = useQuery(["getAllComments"], () =>
    endpoints.getAllComments()
  );

  if (isLoading) return <span>Carregando</span>;
  if (isError) return <span>erro:{error.message} </span>;
  if (data.length === 0) return <span>Empty</span>;

  return (
    <>
      {/* {data.map((comentario) => ( */}
        <div className="details_Comment">
          <div className="img">
            <img
              src={"https://ui-avatars.com/api" + name}
              alt=""
            />
          </div>
          <div className="heading">
            <h4>
              {name}
              <i className="fa fa-circle-check"></i>
            </h4>
            <span>{dayjs(date).format("DD/MM/YYYY HH:mm")}</span>
            <h5>{texto}</h5>
          </div>
        </div>
      {/* ))} */}
    </>
  );
}
