import React from 'react'
import './styles/menu.css'
import '../components/BotaoMenu'
import BotaoMenu from '../components/BotaoMenu'
import { Link } from 'react-router-dom'
export default function Menu() {
  return (
    <div className="corpoM">
      <div className="logotipo">
        <h1>Unify</h1>
      </div>

      <div>
        <ul>
          <li>
            <Link className="dLink" to={"/"}>
              {" "}
              <BotaoMenu nome="Home"> </BotaoMenu>{" "}
            </Link>
          </li>

          <li>
            <Link className="dLink" to={"/Video"}>
              {" "}
              <BotaoMenu nome="Videos"></BotaoMenu>
            </Link>
          </li>

          <li>
            <Link className="dLink" to={"/Musica"}>
              <BotaoMenu nome="Musicas"></BotaoMenu>
            </Link>
          </li>

          <li>
            <Link className="dLink" to={"/Radio"}>
              {" "}
              <BotaoMenu nome="Radio"></BotaoMenu>
            </Link>
          </li>
          <li>
            <Link className="dLink" to={"/Playlist"}>
              {" "}
              <BotaoMenu className="dLink" nome="Playlist"></BotaoMenu>
            </Link>
          </li>
          <li>
            <Link className="dLink" to={"/Profile"}>
              {" "}
              <BotaoMenu nome="Minha conta"></BotaoMenu>{" "}
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
}
