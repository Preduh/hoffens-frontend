import { NextPage } from "next";
import Head from "next/head";

import { Players } from "../styles/pages/Players";

const PlayersPage: NextPage = () => {
  return (
    <>
      <Head>
        <title>Jogadores</title>
      </Head>
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
