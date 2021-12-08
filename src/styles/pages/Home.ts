import styled from "styled-components";

export const Section = styled.section`
  background: url("./assets/merlinDeath.png");
  background-repeat: no-no-repeat;
  background-size: 100vw;
  width: 100%;
  height: 100vh;
`;

export const Header = styled.header`
  background-color: #0000007a;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0px 64px;
  position: fixed;
  width: 100%;

  img {
    height: 80px;
  }
`;

export const Main = styled.main`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
  font-size: 64px;
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

    a {
      margin-left: 22px;
      text-decoration: none;
      color: ${props => props.theme.colors.text};
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
`;

export const History = styled.div`
  width: 100%;
  height: 100vh;
  background-color: #ffffff;
  display: flex;
  align-items: center;
  padding: 0px 32px;
  justify-content: space-between;

  img {
    width: 500px;
  }

  p {
    color: ${props => props.theme.colors.primary};
    width: 700px;
    font-size: 26px;
  }
`;

export const Players = styled.div`
  width: 100%;
  min-height: 100vh;
  background: url("./assets/backgroundPlayers.png");
  background-repeat: no-repeat;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-around;
  align-items: center;
  padding-top: 64px;

  .player {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 32px 64px;

    .avatar {
      background: #ffffff;
      width: 180px;
      height: 180px;
      border-radius: 50%;
      margin-bottom: 16px;
    }

    label {
      color: ${props => props.theme.colors.primary};
      font-weight: 700;
    }
  }
`;
