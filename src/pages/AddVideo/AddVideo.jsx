import React from "react";
import "./AddVideos.css";
import { Toast } from "react-hot-toast";
const AddVideo = () => {
  return (
    <div className="file-upload">
      <div className="file-upload-wrapper">
        <h1 className="file-upload-text">Adicionar Vídeo</h1>

        <form action="#">
          <label>Título do Vídeo:</label>
          <input
            className="file-upload-input"
            type="text"
            name="title"
            id=""
            placeholder="File Name"
          ></input>
          <label style={{ marginTop: "5px" }}>Descrição do Vídeo:</label>
          <input
            className="file-upload-input"
            type="text"
            name="description"
            id=""
            placeholder="File Description"
          ></input>
          <label>Capa do Vídeo:</label>
          <input
            className="file-upload-input"
            type="file"
            name="image"
            id=""
            accept=".jpg, .jpeg, .png"
            placeholder="Image"
          ></input>
          Ficheiro do Vídeo:
          <input
            className="file-upload-input"
            type="file"
            name="file"
            id=""
            accept=".mp4"
            placeholder="File"
          ></input>
        </form>

        <div className="uploadedFiles">
          <div className="uploadedImage">
            Capa do Vídeo:
            <img src="" alt="" className="uploadedImagePreview" />
          </div>

          <div className="uploadedVideo">
            Vídeo:
            {/* <iframe
            
              src="" 
              frameborder="0"
              className="uploaded-video"
              width={"250px"}
            ></iframe> */}
          </div>
        </div>

        <button className="file-upload-button">Adicionar </button>
      </div>
    </div>
  );
};

export default AddVideo;
