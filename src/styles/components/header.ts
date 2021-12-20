import styled from "styled-components";

export const Header = styled.header`
  background-color: #0000007a;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0px 64px;
  position: fixed;
  width: 100%;
  height: 80px;
  z-index: 2;
  top: 0;

  a {
    z-index: 1;

    img {
      height: 64px;
      width: 64px;
    }

    :hover {
      filter: brightness(80%);
    }
  }
`;

export const Menu = styled.menu`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  font-size: 22px;
  font-weight: 500;

  div {
    display: flex;
    flex-direction: row;
    align-items: center;

    a {
      margin-left: 22px;
      text-decoration: none;
      color: ${props => props.theme.colors.text};

      :hover {
        filter: brightness(80%);
      }
    }

    #userIconBtn {
      margin: 0;

      img {
        width: 48px;
        margin-left: 24px;
        cursor: pointer;

        :hover {
          filter: brightness(80%);
        }
      }
    }

    button {
      background-color: transparent;
      color: ${props => props.theme.colors.text};
      border: none;
      outline: none;
      font-size: 20px;
      font-weight: 500;
      margin-left: 32px;
      cursor: pointer;
    }
  }

  @media (max-width: 600px) {
    display: none;
  }
`;

export const MenuMobile = styled.div`
  display: none;

  #cbMenu {
    display: none;

    :checked ~ menu {
      right: 0;
    }
  }

  label {
    z-index: 1;
  }

  menu {
    position: absolute;
    width: 100vw;
    height: 100vh;
    background-color: #1a1a1a;
    top: 0;
    right: -100vw;
    transition: all 0.2s linear;

    header {
      height: 80px;
      display: flex;
      align-items: center;
      padding-left: 16px;
      justify-content: center;

      h1 {
        font-family: "Roboto", sans-serif;
        font-weight: 500;
        font-size: 20px;
      }
    }

    hr {
      border: 1px solid #303030;
    }

    nav {
      display: flex;
      flex-direction: column;
      height: calc(100% - 80px);
      justify-content: space-evenly;
      align-items: center;
      padding: 0px 16px;

      img {
        position: absolute;
        width: 258px;
        height: 258px;
        opacity: 10%;
      }

      button,
      a {
        display: flex;
        align-items: center;
        justify-content: center;
        background-color: #202020;
        border: none;
        width: 100%;
        height: 48px;
        font-size: 24px;
        font-weight: 600;
        color: #fff;
        z-index: 1;
      }

      button {
        width: 100%;
        height: 48px;
        outline: none;
      }

      a {
        text-decoration: none;
      }
    }
  }

  @media (max-width: 600px) {
    display: flex;
    img {
      width: 28px;
      height: 28px;
    }
  }
`;
