import type { NextPage } from "next";
import { useContext } from "react";
import { useForm } from "react-hook-form";
import { AuthContext } from "../contexts/AuthContext";
import { Form } from "../styles/components/SignUpModal";
import Header from "../components/Header";

interface SignUpData {
  username: string;
  email: string;
  password: string;
  masterKey: string;
  avatarUrl: string;
}

const Register: NextPage = () => {
  const { register, handleSubmit } = useForm();
  const { signUp, errorSignUp } = useContext(AuthContext);

  const handleSignUp = ({
    username,
    email,
    password,
    masterKey,
    avatarUrl,
  }: SignUpData) => {
    signUp({ username, email, password, masterKey, avatarUrl });
  };

  return (
    <>
      <Header />
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
            <input
              {...register("avatarUrl")}
              type="text"
              placeholder="Avatar URL - Opcional"
              style={{ width: "100%" }}
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
