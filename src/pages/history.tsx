import { NextPage } from "next";
import Header from "../components/Header";

import { History } from "../styles/pages/History";

const Home: NextPage = () => {
  return (
    <>
      <Header />
      <History id="history">
        <img src="./assets/logo.png" alt="Hoffens Logo" />
        <p>
          A história se desenvolve a partir da colisão de um cometa com o
          planeta onde vivem nossos personagens. Assim, um novo vírus se
          dissemina pelo mundo, dando diversos poderes para alguns e causando a
          monstrificação de outros. Em meio ao preconceito do dia a dia, com
          seres diferentes circulando pelas cidades, a insegurança aumenta, a
          economia toma um novo rumo a partir de instituições privadas e
          públicas de caça aos monstros. Neste contexto, nossos heróis, vindos
          de diferentes lugares e com diversos objetivos e motivações, se reúnem
          na mesma empresa chamada Hoffens, trabalhando em conjunto e
          participando de aventuras inesquecíveis.
        </p>
      </History>
    </>
  );
};

export default Home;
