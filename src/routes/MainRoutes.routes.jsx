import {
  BrowserRouter as Router,
  Route,
  Routes,
} from "react-router-dom";
import Menu from "../components/Menu";
import Home from "../pages/Home";
import Radio from "../pages/Radio";
import Perfil from "../pages/Perfil";
import Playlist from "../pages/Playlist";
import Video from "../pages/Video";
import Musicas from "../pages/Musicas";
import '../routes/mapa.css'
export default function MainRoutes(){
    return(
        <div className="divgeral">
            <Router>
                <Menu></Menu>
                
                <Routes>
                        <Route path="/" element={<Home/>}/>
                        <Route path="/Home" element={<Home/>}/>
                        <Route path="/Radio" element={<Radio/>}/>
                        <Route path="/Video" element={<Video/>}/>
                        <Route path="/Perfil" element={<Perfil/>}/>
                        <Route path="/Musica" element={<Musicas/>}/>
                        <Route path="/Playlist" element={<Playlist/>}/>
                </Routes>
            </Router>
        </div>
    )
}