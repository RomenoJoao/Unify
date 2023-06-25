import React, { useContext } from "react";
import { Route, Routes } from "react-router-dom";
import Home from "../pages/Home/Home";
import Radio from "../pages/Radio/Radio";
import VideosView from "../pages/video/VideosView";
import SinglePage from "../pages/Single/Single";
import Criador from "../pages/Criador/Criador";
import Musics from "../pages/Musics";
import "../routes/mapa.css";
import Profile from "../pages/profile/Profile";
import LayoutHome from "../components/LayoutHome";
import LoginForm from "../pages/Login";
import Upload from "../pages/Adicionar/Upload";
import RegForm from "../pages/SignUp";
import { useLocation, Navigate } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";

export default function MainRoutes() {
  return (
    <Routes>
      <Route path="/auth/">
        <Route path="login" element={<LoginForm />} />
        <Route path="signup" element={<RegForm />} />
      </Route>

      <Route
        path="/"
        element={
          <PrivateRoute>
            {" "}
            <LayoutHome />{" "}
          </PrivateRoute>
        }
      >
        <Route
          path="Home"
          element={
            <PrivateRoute>
              <Home />{" "}
            </PrivateRoute>
          }
        />
        <Route
          path="*"
          element={
            <PrivateRoute>
              <Home />
            </PrivateRoute>
          }
        />
        <Route
          path="Radio"
          element={
            <PrivateRoute>
              <Radio />
            </PrivateRoute>
          }
        />
        <Route
          path="Video"
          element={
            <PrivateRoute>
              <VideosView />
            </PrivateRoute>
          }
        />
        <Route
          path="Musica"
          element={
            <PrivateRoute>
              <Musics />
            </PrivateRoute>
          }
        />
        <Route
          path=":VidTitle"
          element={
            <PrivateRoute>
              <SinglePage />
            </PrivateRoute>
          }
        />
        <Route
          path="Criador"
          element={
            <PrivateRoute>
              <Criador />
            </PrivateRoute>
          }
        />
        <Route
          path="Profile"
          element={
            <PrivateRoute>
              <Profile />
            </PrivateRoute>
          }
        />
        <Route
          path="Upload"
          element={
            <PrivateRoute>
              <Upload />
            </PrivateRoute>
          }
        />
      </Route>
    </Routes>
  );
}

function PrivateRoute({ children }) {
  const ctx = useContext(AuthContext);
  const location = useLocation();

  if (ctx.authData.isAuth === undefined) {
    return null;
  }

  if (ctx.authData.isAuth === "isLoggedOut") {
    return <Navigate to="/auth/login" state={{ from: location }} replace />;
  }

  return children;
}
/*  
function PrivateRoute({ children, ...rest }) {

  const user = useContext(AuthContext);
  return (
    <Route
      {...rest}
      render={({ location }) =>
        user.authData.isAuth === "isLoggedIn" ||
        user.authData.isAuth === undefined ? (
          <LayoutHome>{children}</LayoutHome>
        ) : (
          <Navigate to={"/auth/login"} replace />
        )
      }
    />
  );
}
*/
