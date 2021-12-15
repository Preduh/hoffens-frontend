import { useForm } from "react-hook-form";
import { useContext } from "react";

import { Background, Form } from "../styles/components/SignInModal";
import { AuthContext } from "../contexts/AuthContext";

interface SignInData {
  email: string;
  password: string;
}

const SignModal = ({ showLoginModal, setShowLoginModal }) => {
  const { register, handleSubmit } = useForm();
  const { signIn, errorSignIn } = useContext(AuthContext);

  const handleSignIn = ({ email, password }: SignInData) => {
    signIn({ email, password });
  };

  const closeModal = () => {
    setShowLoginModal(!showLoginModal);
  };

  return (
    <>
      {showLoginModal ? (
        <div>
          <Background onClick={closeModal} />
          <Form onSubmit={handleSubmit(handleSignIn)}>
            <div className="wrapper">
              <p onClick={closeModal} id="closeButton">
                X
              </p>
              <div className="title">
                <h1>DE VOLTA AO TRABALHO</h1>
                <img src="/assets/logoPreto.png" alt="Logo Hoffens" />
              </div>
              <div>
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
        </div>
      ) : null}
    </>
  );
};

export default SignModal;
