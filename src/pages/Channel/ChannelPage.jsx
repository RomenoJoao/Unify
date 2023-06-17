import React from "react";
import capa from "../../images/Capa.jpg";
import "./Channel.css";
import logo from "../../images/logo.png";
import banner from "../../images/transferir.png";

function VideoItem({ heading }) {
  return (
    <div className="video_items">
      <a href="single-page.html">
        <img src={capa} alt="" />
      </a>
      <div className="details flex">
        <div className="img">
          <img src={logo} alt="" />
        </div>
        <div className="heading">
          <p>{heading}</p>
          <span>
            GorkCoder <i className="fa fa-circle-check"></i>
          </span>
          <span>56.7M .1 Week ago</span>
        </div>
      </div>
    </div>
  );
}

const Channel = () => {
  return (
    <div className="specialChannel">
      <div className="capa">
        <img className="imgcapa" src={banner} alt="" />
      </div>
      <div className="channelTopContainer">
        <div className="channelTopTop">
          <div className="channelPersonContainer">
            <img className="channelPersonImg" src={logo} alt="" />
            <span className="channelPersonName">Ana</span>
            <div className="descricao">
              <h2>@ana</h2>
              <h2>12,5mil subscritores</h2>
              <h2>8 vídeos</h2>
            </div>
          </div>

          <div className="channelButtonContainer">
            <button className="channelButton">Subscrever</button>
          </div>
        </div>
      </div>

      <div className="barra">
        <h2>VIDEOS</h2>
        <h2>PLAYLISTS</h2>
        <h2>CANAIS</h2>
        <h2>ACERCA DE</h2>
      </div>

      <div className="channelBottomVideosTitle">
        <span>Videos Populares</span>
      </div>

      <section className="video_content grid">
        <VideoItem
          img
          src=""
          alt=""
          heading="How to make Hotel Booking Website With HTML CSS ......"
        />
        <VideoItem
          imageUrl="./images/video_images/back1.jpg"
          heading="How to make Hotel Booking Website With HTML CSS ......"
        />
        <VideoItem
          imageUrl="images/video_images/back3.jpg"
          heading="How to make Hotel Booking Website With HTML CSS ......"
        />
        <VideoItem
          imageUrl="images/video_images/back4.jpg"
          heading="How to make Hotel Booking Website With HTML CSS ......"
        />
        <VideoItem
          imageUrl="images/video_images/back6.jpg"
          heading="How to make Hotel Booking Website With HTML CSS ......"
        />
        <VideoItem
          imageUrl="images/video_images/back5.jpg"
          heading="How to make Hotel Booking Website With HTML CSS ......"
        />
        <VideoItem
          imageUrl="images/video_images/back1.jpg"
          heading="How to make Hotel Booking Website With HTML CSS ......"
        />
        <VideoItem
          imageUrl="images/video_images/back3.jpg"
          heading="How to make Hotel Booking Website With HTML CSS ......"
        />
      </section>
    </div>
  );
};

export default Channel;
