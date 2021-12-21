import { useContext } from "react";
import Link from "next/link";

import { Header, Menu, MenuMobile } from "../styles/components/header";
import { AuthContext } from "../contexts/AuthContext";

const HeaderNav = () => {
  const { isAuthenticated, logout } = useContext(AuthContext);

  return (
    <Header>
      <Link href="/">
        <img id="hoffens_logo" src="../assets/logo.png" alt="Hoffens logo" />
      </Link>
      <Menu>
        <div>
          <Link href="/history">
            <a>História</a>
          </Link>
          <Link href="/players">
            <a>Jogadores</a>
          </Link>
        </div>
        {isAuthenticated ? (
          <div>
            <Link href="/dashboard">
              <a>Dashboard</a>
            </Link>

            <button type="button" onClick={logout} id="userIconBtn">
              <img src="../assets/user.png" />
            </button>
          </div>
        ) : (
          <div>
            <Link href="/login">
              <a>Entrar</a>
            </Link>
            <Link href="/register">
              <a>Trabalhe conosco</a>
            </Link>
          </div>
        )}
      </Menu>
      <MenuMobile>
        <input type="checkbox" name="cbMenu" id="cbMenu" />
        <label htmlFor="cbMenu">
          <img src="../assets/hamburger-menu.png" alt="Menu icon" />
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
