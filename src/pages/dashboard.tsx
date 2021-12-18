import { GetServerSideProps, NextPage } from "next";
import Head from "next/head";
import { parseCookies } from "nookies";
import { useContext } from "react";
import { AuthContext } from "../contexts/AuthContext";
import { Container, CharWrapper } from "../styles/pages/Dashboard";
import Header from "../components/Header";
import CharCard from "../components/CharCard";

const Dashboard: NextPage = () => {
  const { user, chars } = useContext(AuthContext);
  return (
    <Container>
      <Head>
        <title>Dashboard</title>
      </Head>
      <Header />
      <CharWrapper>
        <a href="/" id="addCharBtn">
          <img src="assets/adicionar-icone.png" />
        </a>
        {chars?.map(({ id, hero, identity, power_level }) => {
          hero = hero.split(" ")[0];
          return (
            <CharCard
              key={id}
              hero={hero}
              identity={identity}
              power_level={power_level}
            />
          );
        })}
      </CharWrapper>
    </Container>
  );
};

export default Dashboard;

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
