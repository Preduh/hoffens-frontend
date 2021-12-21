import { GetServerSideProps, NextPage } from "next";
import Head from "next/head";
import { parseCookies } from "nookies";
import { useContext } from "react";
import { useForm } from "react-hook-form";
import { AuthContext } from "../contexts/AuthContext";
import { Container, Ficha } from "../styles/pages/CreateChar";

interface CreateCharData {
  hero: string;
  user_id: string;
  identity: string;
  secret_identity: boolean;
  gender: string;
  age: number;
  height: number;
  weight: number;
  eyes: string;
  hair: string;
  affiliate_group: string;
  base_of_operations: string;
  power_level: string;
  created_at: Date;
  updated_at: Date;
}

const CreateChar: NextPage = () => {
  const { register, handleSubmit } = useForm();
  const { createChar } = useContext(AuthContext);

  const handleCreateChar = ({
    hero,
    identity,
    secret_identity,
    gender,
    age,
    height,
    weight,
    eyes,
    hair,
    affiliate_group,
    base_of_operations,
    power_level,
  }: CreateCharData) => {
    createChar({
      hero,
      identity,
      secret_identity,
      gender,
      age,
      height,
      weight,
      eyes,
      hair,
      affiliate_group,
      base_of_operations,
      power_level,
    });
  };

  return (
    <>
      <Container>
        <Head>
          <title>Novo personagem</title>
        </Head>
        <Ficha onSubmit={handleSubmit(handleCreateChar)}>
          <div>
            <label htmlFor="hero">Nome do herói</label>
            <input
              autoComplete="off"
              required
              {...register("hero")}
              type="text"
              name="hero"
            />
          </div>
          <div>
            <label htmlFor="identity">Identidade</label>
            <input
              autoComplete="off"
              required
              {...register("identity")}
              type="text"
              name="identity"
            />
          </div>
          <div id="secretIdentityDiv">
            <label htmlFor="secret_identity">Identidade secreta</label>
            <input
              {...register("secret_identity")}
              type="checkbox"
              name="secret_identity"
            />
          </div>
          <div>
            <label htmlFor="gender">Gênero</label>
            <input
              autoComplete="off"
              required
              {...register("gender")}
              type="text"
              name="gender"
            />
          </div>
          <div>
            <label htmlFor="age">Idade</label>
            <input
              autoComplete="off"
              required
              {...register("age")}
              type="number"
              name="age"
            />
          </div>
          <div>
            <label htmlFor="height">Altura</label>
            <input
              autoComplete="off"
              required
              {...register("height")}
              type="number"
              name="height"
            />
          </div>
          <div>
            <label htmlFor="weight">Peso</label>
            <input
              autoComplete="off"
              required
              {...register("weight")}
              type="number"
              name="weight"
            />
          </div>
          <div>
            <label htmlFor="eyes">Olhos</label>
            <input
              autoComplete="off"
              required
              {...register("eyes")}
              type="text"
              name="eyes"
            />
          </div>
          <div>
            <label htmlFor="hair">Cabelos</label>
            <input
              autoComplete="off"
              required
              {...register("hair")}
              type="text"
              name="hair"
            />
          </div>
          <div>
            <label htmlFor="affiliate_group">Grupo afiliado</label>
            <input
              autoComplete="off"
              required
              {...register("affiliate_group")}
              type="text"
              name="affiliate_group"
            />
          </div>
          <div>
            <label htmlFor="base_of_operations">Base de operações</label>
            <input
              autoComplete="off"
              required
              {...register("base_of_operations")}
              type="text"
              name="base_of_operations"
            />
          </div>
          <div>
            <label htmlFor="power_level">Nível de poder</label>
            <input
              autoComplete="off"
              required
              {...register("power_level")}
              type="text"
              name="power_level"
            />
          </div>
          <button type="submit">Criar personagem</button>
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
