import type { NextPage } from "next";
import Head from "next/head";

import {
  Section,
  Header,
  Main,
  Menu,
  History,
  Players,
} from "../styles/pages/Home";

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Homepage</title>
      </Head>
      <Section>
        <Header>
          <a href="#">
            <img src="./assets/logo.png" />
          </a>
          <Menu>
            <div>
              <a href="#history">History</a>
              <a href="#players">Players</a>
            </div>
            <div>
              <a href="#">Login</a>
              <a href="#">Register</a>
            </div>
          </Menu>
        </Header>
        <Main>
          <h1>WELCOME TO HOFFENS</h1>
        </Main>
      </Section>
      <History id="history">
        <img src="./assets/history.png" />
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris
          elementum neque a justo vehicula dictum. Morbi ut augue nunc. Donec
          accumsan purus purus, nec luctus nibh venenatis nec. Pellentesque quam
          felis, maximus eu condimentum vehicula, lobortis id dolor. Morbi
          scelerisque commodo sagittis. Donec in pretium elit. Morbi non risus
          placerat, maximus ante elementum, ultrices tortor. Mauris suscipit,
          enim non mattis pellentesque, sapien elit fermentum risus, nec
          tincidunt felis orci in sapien. Quisque sollicitudin accumsan dui, vel
          feugiat est tempus a. Suspendisse potenti. Phasellus dictum tortor
          nunc, ut faucibus tortor convallis et.
        </p>
      </History>
      <Players id="players">
        <div className="player">
          <div className="avatar" />
          <label>Player</label>
        </div>
        <div className="player">
          <div className="avatar" />
          <label>Player</label>
        </div>
        <div className="player">
          <div className="avatar" />
          <label>Player</label>
        </div>
        <div className="player">
          <div className="avatar" />
          <label>Player</label>
        </div>
        <div className="player">
          <div className="avatar" />
          <label>Player</label>
        </div>
        <div className="player">
          <div className="avatar" />
          <label>Player</label>
        </div>
      </Players>
    </>
  );
};

export default Home;
