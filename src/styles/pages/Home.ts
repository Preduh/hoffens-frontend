import styled from "styled-components";

export const Section = styled.section`
  background: url("./assets/merlinDeath-min.png");
  background-repeat: no-repeat;
  background-size: 1366px;
  width: 100%;
  height: 100vh;
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
