import type { NextPage } from "next";
import { useContext } from "react";
import { useForm } from "react-hook-form";
import Head from "next/head";

import { AuthContext } from "../contexts/AuthContext";
import { Form } from "../styles/components/SignUpModal";

interface SignUpData {
  username: string;
  email: string;
  password: string;
  masterKey: string;
}

const Register: NextPage = () => {
  const { register, handleSubmit } = useForm();
  const { signUp, errorSignUp } = useContext(AuthContext);

  const handleSignUp = ({
    username,
    email,
    password,
    masterKey,
  }: SignUpData) => {
    signUp({ username, email, password, masterKey });
  };

  return (
    <>
      <Head>
        <title>Trabalhe conosco</title>
      </Head>
      <Form onSubmit={handleSubmit(handleSignUp)}>
        <div className="logo">
          <img src="/assets/logo.png" alt="Logo Hoffens" />
        </div>
        <div className="wrapper">
          <div className="title">
            <h1>PREENCHA O CURRÍCULO</h1>
          </div>
          <div>
            <input
              {...register("username")}
              type="text"
              placeholder="Username"
              autoComplete="off"
              autoFocus
            />
            <input
              {...register("email")}
              type="email"
              placeholder="Email"
              autoComplete="off"
            />
            <input
              {...register("password")}
              type="password"
              placeholder="Password"
            />
            <input
              {...register("masterKey")}
              type="password"
              placeholder="Master key"
            />
            <button type="submit">CADASTRAR</button>
            {errorSignUp && (
              <div className="error">
                <img src="/assets/alerta.png" alt="Alert icon" />
                <p>{errorSignUp}</p>
              </div>
            )}
          </div>
        </div>
      </Form>
    </>
  );
};

export default Register;
