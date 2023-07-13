import React,{useContext} from "react";
import "./Profile.css";
import logo from "../../images/logo.png";
import { Link } from "react-router-dom";
import Aux from "./aux.jsx";
import AuxO from "./auxO.jsx";
import { AuthContext } from "../../context/AuthContext";
import Vuser from "../../components/VideosUser";
import Muser from "../../components/MusicUser";
      //<p className="user-info">@{user.login.username}</p>;
//import { Link } from "react-router-dom";

const Profile = () => {
  const { user } = useContext(AuthContext);
  console.log(user);
  return (
    <div className="specialChannel">
      <div className="capa">
        <img
          className="imgcapa"
          src={
            "https://c8a5e69dfb.clvaw-cdnwnd.com/3ad44d0c60e28cdc1082c5bc17733e5f/200000200-a68e6a68e9/fundo%20capa%20meetups-01.png?ph=c8a5e69dfb"
          }
          alt=""
        />
      </div>
      <div className="channelTopContainer">
        <div className="channelTopTop">
          <div className="channelPersonContainer">
            <img className="channelPersonImg" src={logo} alt="" />
            <span className="channelPersonName">
              {" "}
              <Aux />{" "}
            </span>
            <div className="descricao">
              <h2>
                @<AuxO />{" "}
              </h2>
              <h2>5,5mil subscritores</h2>
              <h2>8 vídeos</h2>
            </div>
          </div>
          <div className="v1">
            <button className="channelButton">Configuracoes</button>
            <button className="channelButton">Editar Canal</button>
            <Link className="channelButton" to={"/Upload"}>
              {" "}
              <span>Adicionar</span>
            </Link>
          </div>
        </div>
      </div>
      <h2 className="midias">VIDEOS</h2>
      <div className="barra">
        <Vuser />
      </div>
      <h2 className="midias">MUSICAS</h2>
      <div className="barra">
        <Muser />
      </div>
      <div className="channelBottomVideosTitle"></div>
    </div>
  );
};

export default Profile;
