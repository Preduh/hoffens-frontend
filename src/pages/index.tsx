import type { NextPage } from "next";
import Head from "next/head";
import { useState } from "react";
import SignInModal from "../components/signInModal";
import SignUpModal from "../components/signUpModal";

import {
  Section,
  Header,
  Main,
  Menu,
  MenuMobile,
  History,
  Players,
} from "../styles/pages/Home";

const Home: NextPage = () => {
  const [showLoginModal, setShowLoginModal] = useState(false);
  const [showRegisterModal, setShowRegisterModal] = useState(false);

  const showLoginForm = () => {
    setShowLoginModal(!showLoginModal);
  };

  const showRegisterForm = () => {
    setShowRegisterModal(!showRegisterModal);
  };

  return (
    <>
      <Head>
        <title>Hoffens</title>
      </Head>
      <SignInModal
        showLoginModal={showLoginModal}
        setShowLoginModal={setShowLoginModal}
      />
      <SignUpModal
        showRegisterModal={showRegisterModal}
        setShowRegisterModal={setShowRegisterModal}
      />
      <Section id="apresentation">
        <Header>
          <a href="#apresentation">
            <img src="./assets/logo.png" alt="Hoffens logo" />
          </a>
          <Menu>
            <div>
              <a href="#history">História</a>
              <a href="#players">Jogadores</a>
            </div>
            <div>
              <button type="button" onClick={showLoginForm}>
                Entrar
              </button>
              <button type="button" onClick={showRegisterForm}>
                Trabalhe Conosco
              </button>
            </div>
          </Menu>
          <MenuMobile>
            <input type="checkbox" name="cbMenu" id="cbMenu" />
            <label htmlFor="cbMenu">
              <img src="assets/hamburger-menu.png" alt="Menu icon" />
            </label>
            <menu>
              <header>
                <h1>MENU</h1>
              </header>
              <hr />
              <nav>
                <img src="/assets/logo.png" />
                <button type="button" onClick={showLoginForm}>
                  Entrar
                </button>
                <button type="button" onClick={showRegisterForm}>
                  Trabalhe Conosco
                </button>
                <a href="#history">História</a>
                <a href="#players">Jogadores</a>
              </nav>
            </menu>
          </MenuMobile>
        </Header>
        <Main>
          <h1>BEM-VINDO AO HOFFENS</h1>
        </Main>
      </Section>
      <History id="history">
        <img src="./assets/history.png" alt="Hoffens Logo" />
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

export default Home;
