import { useForm } from "react-hook-form";

import { Background, Form } from "../styles/components/SignInModal";
import { AuthContext } from "../contexts/AuthContext";
import { useContext } from "react";

interface SignInData {
  email: string;
  password: string;
}

const SignModal = ({ showLoginModal, setShowLoginModal }) => {
  const { register, handleSubmit } = useForm();
  const { signIn } = useContext(AuthContext);

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
              </div>
            </div>
          </Form>
        </div>
      ) : null}
    </>
  );
};

export default SignModal;
