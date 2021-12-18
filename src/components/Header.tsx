import { useContext } from "react";

import { Header, Menu, MenuMobile } from "../styles/components/header";
import { AuthContext } from "../contexts/AuthContext";

const HeaderNav = () => {
  const { isAuthenticated } = useContext(AuthContext);

  return (
    <Header>
      <a href="/">
        <img src="./assets/logo.png" alt="Hoffens logo" />
      </a>
      <Menu>
        <div>
          <a href="/history">História</a>
          <a href="/players">Jogadores</a>
        </div>
        {isAuthenticated ? (
          <div>
            <a href="/dashboard">Dashboard</a>
            <img src="./assets/user.png"></img>
          </div>
        ) : (
          <div>
            <a href="/login">Entrar</a>
            <a href="/register">Trabalhe conosco</a>
          </div>
        )}
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
            <a href="/login">Entrar</a>
            <a href="/register">Trabalhe conosco</a>
            <a href="/history">História</a>
            <a href="/players">Jogadores</a>
          </nav>
        </menu>
      </MenuMobile>
    </Header>
  );
};

export default HeaderNav;
