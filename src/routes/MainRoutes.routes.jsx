import {
  BrowserRouter as Router,
  Route,
  Routes,
} from "react-router-dom";
import Menu from "../components/Menu";
import Home from "../pages/Home/Home";
import Radio from "../pages/Radio/Radio";
import Video from "../pages/video/Video";
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
                </Routes>
            </Router>
        </div>
    )
}