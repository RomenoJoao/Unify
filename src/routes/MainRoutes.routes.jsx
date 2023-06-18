import {
  BrowserRouter as Router,
  Route,
  Routes,
} from "react-router-dom";
import Menu from "../components/Menu";
import Home from "../pages/Home/Home";
import Radio from "../pages/Radio/Radio";
import VideosView from "../pages/video/VideosView";
import SinglePage from "../pages/Single/Single";
import Criador from '../pages/Criador/Criador';
import '../routes/mapa.css'
import Profile from "../pages/profile/Profile";
export default function MainRoutes(){
    return(
        <div className="divgeral">
            <Router>
                <Menu></Menu>
                
                <Routes>
                        <Route path="/" element={<Home/>}/>
                        <Route path="/Home" element={<Home/>}/>
                        <Route path="/Radio" element={<Radio/>}/>
                        <Route path="/Video" element={<VideosView/>}/>
                        <Route path="/VidTitle" element={<SinglePage/>}/>
                        <Route path="/Criador" element={<Criador/>}></Route>
                        <Route path="/Profile" element={<Profile/>}></Route>
                </Routes>
            </Router>
        </div>
    )
}