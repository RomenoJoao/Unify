import React from "react";
import "./Profile.css";
import logo from "../../images/logo.png";
import banner from "../../images/transferir.png";
//import { Link } from "react-router-dom";

const Profile = () => {
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
            <span className="channelPersonName">Rodrigo</span>
            <div className="descricao">
              <h2>@Rodrigo</h2>
              <h2>5,5mil subscritores</h2>
              <h2>8 vídeos</h2>
            </div>
          </div>
          <div className="v1">
            <button className="channelButton">Configuracoes</button>
            <button className="channelButton">Editar Canal</button>
            <button className="channelButton">Adicionar</button>
          </div>
        </div>
      </div>

      <div className="barra">
        <h2>VIDEOS</h2>
        <h2>PLAYLIST</h2>
        <h2>CANAIS</h2>
        <h2>COMUNIDADE</h2>
        <h2>ACERCA DE</h2>
      </div>

      <div className="channelBottomVideosTitle"></div>
    </div>
  );
};

export default Profile;
