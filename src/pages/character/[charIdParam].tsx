import { GetServerSideProps, NextPage } from "next";
import Head from "next/head";
import { parseCookies } from "nookies";
import { useContext } from "react";

import { AuthContext } from "../../contexts/AuthContext";
import { Container, Ficha } from "../../styles/pages/Character";

const Character: NextPage = () => {
  const { char } = useContext(AuthContext);

  return (
    <>
      <Head>
        <title>{char ? char.hero : "Character"}</title>
      </Head>
      <Container>
        <Ficha>
          <p>Herói: {char?.hero}</p>
          <p>Identidade: {char?.identity}</p>
          <p>Gênero: {char?.gender}</p>
          <p>Idade: {char?.age} anos</p>
          <p>Altura: {char?.height} cm</p>
          <p>Peso: {char?.weight} Kg</p>
          <p>Cor dos olhos: {char?.eyes}</p>
          <p>Cor dos cabelos: {char?.hair}</p>
          <p>Grupo afiliado: {char?.affiliate_group}</p>
          <p>Base de operações: {char?.base_of_operations}</p>
          <p>Nível de poder: {char?.power_level}</p>
        </Ficha>
      </Container>
    </>
  );
};

export default Character;

export const getServerSideProps: GetServerSideProps = async ctx => {
  const { "hoffens.token": token } = parseCookies(ctx);

  if (!token) {
    return {
      redirect: {
        destination: "/",
        permanent: false,
      },
    };
  }

  return {
    props: {},
  };
};
