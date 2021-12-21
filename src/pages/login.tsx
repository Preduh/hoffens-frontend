import type { NextPage } from "next";
import { useContext } from "react";
import { useForm } from "react-hook-form";
import Head from "next/head";

import { AuthContext } from "../contexts/AuthContext";
import { Form } from "../styles/components/SignInModal";

interface SignInData {
  username: string;
  email: string;
  password: string;
  masterKey: string;
  avatarUrl: string;
}

const Login: NextPage = () => {
  const { register, handleSubmit } = useForm();
  const { signIn, errorSignIn } = useContext(AuthContext);

  const handleSignIn = ({ email, password }: SignInData) => {
    signIn({ email, password });
  };

  return (
    <>
      <Head>
        <title>Entrar</title>
      </Head>
      <Form onSubmit={handleSubmit(handleSignIn)}>
        <div className="title">
          <img src="/assets/logo.png" alt="Logo Hoffens" />
        </div>
        <div className="wrapper">
          <div>
            <h1>DE VOLTA AO TRABALHO</h1>
            <input
              {...register("email")}
              type="email"
              placeholder="Email"
              autoFocus
              autoComplete="off"
            />
            <input
              {...register("password")}
              type="password"
              placeholder="Password"
            />
            <button type="submit">ENTRAR</button>
            {errorSignIn && (
              <div className="error">
                <img src="/assets/alerta.png" alt="Alert icon" />
                <p>{errorSignIn}</p>
              </div>
            )}
          </div>
        </div>
      </Form>
    </>
  );
};

export default Login;
