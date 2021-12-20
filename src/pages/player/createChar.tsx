import { GetServerSideProps, NextPage } from "next";
import Head from "next/head";
import { parseCookies, destroyCookie } from "nookies";
import { useContext } from "react";
import { AuthContext } from "../../contexts/AuthContext";
import { Container, Ficha } from "../../styles/pages/CreateChar";
import Header from "../../components/Header";

const CreateChar: NextPage = () => {
  const { user, chars, logout } = useContext(AuthContext);

  destroyCookie(null, "token");

  return (
    <>
      <Container>
        <Head>
          <title>Novo personagem</title>
        </Head>
        <Header />
        <Ficha>
          <div>
            <label htmlFor="hero">Herói</label>
            <input type="text" id="hero" />
          </div>
          <div>
            <label htmlFor="">Identidade</label>
            <input type="text" />
          </div>
          <div>
            <label htmlFor="">Pública</label>
            <input type="radio" defaultChecked name="identityType" />
            <label htmlFor="">Secreta</label>
            <input type="radio" name="identityType" />
          </div>
          <div>
            <label htmlFor="">Gênero</label>
            <input type="text" />
          </div>
          <div>
            <label htmlFor="">Idade</label>
            <input type="number" />
          </div>
          <div>
            <label htmlFor="">Altura</label>
            <input type="number" />
          </div>
          <div>
            <label htmlFor="">Peso</label>
            <input type="number" />
          </div>
          <div>
            <label htmlFor="">Olhos</label>
            <input type="text" />
          </div>
          <div>
            <label htmlFor="">Cabelos</label>
            <input type="text" />
          </div>
          <div>
            <label htmlFor="">Grupo afiliado</label>
            <input type="text" />
          </div>
          <div>
            <label htmlFor="">Base de operações</label>
            <input type="text" />
          </div>
          <div>
            <label htmlFor="">Nível de poder</label>
            <input type="text" />
          </div>
        </Ficha>
      </Container>
    </>
  );
};

export default CreateChar;

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
