import { NextPage } from "next";

import Header from "../components/Header";
import { Players } from "../styles/pages/Players";

const PlayersPage: NextPage = () => {
  return (
    <>
      <Header />
      <Players id="players">
        <div className="player">
          <div className="avatar" />
          <label>Jogador1</label>
        </div>
        <div className="player">
          <div className="avatar" />
          <label>Jogador2</label>
        </div>
        <div className="player">
          <div className="avatar" />
          <label>Jogador3</label>
        </div>
        <div className="player">
          <div className="avatar" />
          <label>Jogador4</label>
        </div>
        <div className="player">
          <div className="avatar" />
          <label>Jogador5</label>
        </div>
        <div className="player">
          <div className="avatar" />
          <label>Jogador6</label>
        </div>
      </Players>
    </>
  );
};

export default PlayersPage;
