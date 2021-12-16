import type { NextPage } from "next";
import Head from "next/head";
import Header from "../components/Header";

import { Section, Main } from "../styles/pages/Home";

const Home: NextPage = () => {
  return (
    <>
      <Header />
      <Head>
        <title>Hoffens</title>
      </Head>
      <Section id="apresentation">
        <Main>
          <h1>BEM-VINDO AO HOFFENS</h1>
        </Main>
      </Section>
    </>
  );
};

export default Home;
