import { useForm } from "react-hook-form";

import { Background, Form } from "../styles/components/SignUpModal";
import { AuthContext } from "../contexts/AuthContext";
import { useContext } from "react";

interface SignUpData {
  username: string;
  email: string;
  password: string;
  masterKey: string;
}

const SignUpModal = ({ showRegisterModal, setShowRegisterModal }) => {
  const { register, handleSubmit } = useForm();
  const { signUp } = useContext(AuthContext);

  const handleSignIn = ({
    username,
    email,
    password,
    masterKey,
  }: SignUpData) => {
    signUp({ username, email, password, masterKey });
  };

  const closeModal = () => {
    setShowRegisterModal(!showRegisterModal);
  };

  return (
    <>
      {showRegisterModal ? (
        <div>
          <Background onClick={closeModal} />
          <Form onSubmit={handleSubmit(handleSignIn)}>
            <div className="wrapper">
              <div className="title">
                <h1>PREENCHA O CURRÍCULO</h1>
                <img src="/assets/logoPreto.png" alt="Logo Hoffens" />
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
              </div>
            </div>
          </Form>
        </div>
      ) : null}
    </>
  );
};

export default SignUpModal;
