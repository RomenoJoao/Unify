import React from 'react'
import ItemLine from '../components/ItemLine';
import './styles/Radio.css'
export default function Radio() {
  return (
    <div className="page">
      <div className="Ofusca"></div>

      <div className="bckg"></div>

      <div className="content2">
        <div className="imgR"></div>
        <div className="Controls">
          <div className="play-pause"></div>
        </div>
      </div>
      <div className="Rradio">
        <h1 className="rad">Radio Unify</h1>

        <div className="infoRadio">
          <h4>88.6</h4>
          <h4>Like</h4>
        </div>
      </div>
      <div className="shd">
        <div className="radios">
          <div id="station0">
            {" "}
            <ItemLine></ItemLine>{" "}
          </div>
          <div id="station1">
            {" "}
            <ItemLine></ItemLine>{" "}
          </div>
          <div id="station3">
            {" "}
            <ItemLine></ItemLine>{" "}
          </div>
          <div id="station4">
            {" "}
            <ItemLine></ItemLine>{" "}
          </div>
        </div>
      </div>
      <script src="https://cdnjs.cloudflare.com/ajax/libs/howler/2.2.3/howler.min.js"></script>
        
    </div>
  );
}
