
import "./vidItem.css"

import React from "react";
export default function VideoItem({ imageUrl, heading, perfilI, author,data }) {
  return (
    <div className="video_items">
      <a href="single-page.html">
        <img src={imageUrl} alt="" />
      </a>
      <div className="details flex">
        <div className="img">
          <img src={perfilI} alt="" />
        </div>
        <div className="heading">
          <p>{heading}</p>
          <span>
            {}<i className="fa fa-circle-check"></i>
          </span>
          <span>{}</span>
        </div>
      </div>
    </div>
  );
}
