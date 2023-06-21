import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "../pages/Home/Home";
import Radio from "../pages/Radio/Radio";
import VideosView from "../pages/video/VideosView";
import SinglePage from "../pages/Single/Single";
import Criador from "../pages/Criador/Criador";
import "../routes/mapa.css";
import Profile from "../pages/profile/Profile";
import LayoutHome from "../components/LayoutHome";
import LoginForm from "../pages/Login";
import Upload from "../pages/Adicionar/Upload";


export default function MainRoutes() {
  return (
    <Routes>
      <Route path="/" element={<LayoutHome />}>
        <Route path="Home" element={<Home />} />
        <Route path="*" element={<Home />} />
        <Route path="Radio" element={<Radio />} />
        <Route path="Video" element={<VideosView />} />
        <Route path="VidTitle" element={<SinglePage />} />
        <Route path="Criador" element={<Criador />} />
        <Route path="Profile" element={<Profile />} />
        <Route path="Upload" element={<Upload />} />
      </Route>
      <Route path="/auth/">
        <Route path="login" element={<LoginForm />} />
      </Route>
    </Routes>
  );
}
