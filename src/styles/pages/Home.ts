import styled from "styled-components";

export const Section = styled.section`
  background: url("./assets/merlinDeath-min.png");
  background-repeat: no-repeat;
  background-size: 1366px;
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
  z-index: 2;

  a {
    img {
      height: 80px;
      width: 80px;
    }
  }

  @media (max-width: 800px) {
    padding: 0px 16px;
  }
`;

export const Main = styled.main`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;

  h1 {
    text-align: center;
    font-size: 82px;
  }

  @media (max-width: 1000px) {
    h1 {
      font-size: 64px;
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
  justify-content: center;
  position: relative;

  img {
    position: absolute;
    width: 500px;
    height: 481px;
    opacity: 30%;
    left: 50%;
    transform: translateY(-50%);
    transform: translateX(-50%);
  }

  p {
    z-index: 1;
    color: ${props => props.theme.colors.primary};
    width: 800px;
    font-size: 26px;
  }

  @media (max-width: 800px) {
    padding-top: 48px;

    img {
      width: 300px;
      height: 281px;
    }

    p {
      display: flex;
      align-items: center;
      text-align: center;
      height: 100%;
      font-size: 18px;
    }
  }
`;

export const Players = styled.div`
  width: 100%;
  min-height: 100vh;
  background: url("./assets/backgroundPlayers-min.png");
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
