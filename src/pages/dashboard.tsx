import { GetServerSideProps, NextPage } from "next";
import Head from "next/head";
import { parseCookies } from "nookies";
import { useContext } from "react";
import { AuthContext } from "../contexts/AuthContext";
import { Container, Header } from "../styles/pages/Dashboard";

const Dashboard: NextPage = () => {
  const { user } = useContext(AuthContext);
  return (
    <Container>
      <Head>
        <title>Dashboard</title>
      </Head>
      <Header>
        <h1>Dashboard</h1>
        {user?.avatarUrl ? (
          <img src={user.avatarUrl} />
        ) : (
          <img src="https://cdn.discordapp.com/attachments/793823363725656077/917877725425975346/69pS2JKrBFAAAAABJRU5ErkJggg.png" />
        )}
      </Header>
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
