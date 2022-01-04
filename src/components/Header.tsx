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
            {isAuthenticated ? (
              <div className="menuWhenAuthenticated">
                <a href="/dashboard">
                  <img src="./assets/dashboard.png" className="menuIcons" />
                  <label>Dashboard</label>
                </a>
                <a href="/history">
                  <img src="./assets/historyIcon.png" className="menuIcons" />
                  <label>História</label>
                </a>
                <a href="/players">
                  <img src="./assets/playersIcon.png" className="menuIcons" />
                  <label>Jogadores</label>
                </a>
                <button type="button" onClick={logout} id="userIconBtn">
                  <a href="/">
                    <img src="./assets/logout.png" className="menuIcons" />
                    <label>Logout</label>
                  </a>
                </button>
              </div>
            ) : (
              <>
                <a href="/login">
                  <img src="./assets/padlock.png" className="menuIcons" />
                  <label>Entrar</label>
                </a>
                <a href="/register">
                  <img src="./assets/cv.png" className="menuIcons" />
                  <label>Trabalhe Conosco</label>
                </a>
                <a href="/history">
                  <img src="./assets/historyIcon.png" className="menuIcons" />
                  <label>História</label>
                </a>
                <a href="/players">
                  <img src="./assets/playersIcon.png" className="menuIcons" />
                  <label>Jogadores</label>
                </a>
              </>
            )}
          </nav>
        </menu>
      </MenuMobile>
    </Header>
  );
};

export default HeaderNav;
