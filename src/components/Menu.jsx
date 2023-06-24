import React from 'react'
import './styles/menu.css'
import '../components/BotaoMenu'
import BotaoMenu from '../components/BotaoMenu'
import { Link } from 'react-router-dom'
import { Home, VideoFile, LibraryMusic, MusicNote,  AccountBoxRounded, PlaylistPlay } from '@mui/icons-material'

export default function Menu() {
  return (
    <div className="corpoM">
      <div className="logotipo">
        <h1>Unify</h1>
      </div>

      <div>
        <ul>
          <li className="posiICO">
            <Home className="Bsp"></Home>
            <Link className="dLink" to={"home"}>
              {" "}
              <BotaoMenu nome="Home"> </BotaoMenu>{" "}
            </Link>
          </li>

          <li className="posiICO">
            <VideoFile className="Bsp" />
            <Link className="dLink" to={"Video"}>
              {" "}
              <BotaoMenu nome="Videos"></BotaoMenu>
            </Link>
          </li>

          <li className="posiICO">
            <LibraryMusic className="Bsp" />
            <Link className="dLink" to={"Musica"}>
              <BotaoMenu nome="Musicas"></BotaoMenu>
            </Link>
          </li>

          <li className="posiICO">
            <MusicNote className="Bsp"></MusicNote>
            <Link className="dLink" to={"Radio"}>
              {" "}
              <BotaoMenu nome="Radio"></BotaoMenu>
            </Link>
          </li>
          <li className="posiICO">
            <PlaylistPlay className="Bsp"></PlaylistPlay>
            <Link className="dLink" to={"Playlist"}>
              {" "}
              <BotaoMenu className="dLink" nome="Playlist"></BotaoMenu>
            </Link>
          </li>
          <li className="posiICO">
            <AccountBoxRounded className="Bsp"></AccountBoxRounded>
            <Link className="dLink" to={"Profile"}>
              {" "}
              <BotaoMenu nome="Minha conta"></BotaoMenu>{" "}
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
}
