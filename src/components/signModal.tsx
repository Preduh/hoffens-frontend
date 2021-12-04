import { useForm } from "react-hook-form";

import { Background, Form } from "../styles/components/Modal";
import { signIn } from "../contexts/AuthContext";

interface SignInData {
  email: string;
  password: string;
}

const SignModal = ({ showModal, setShowModal }) => {
  const { register, handleSubmit } = useForm();

  const handleSignIn = ({ email, password }: SignInData) => {
    signIn({ email, password });
  };

  const closeModal = () => {
    setShowModal(!showModal);
  };

  return (
    <>
      {showModal ? (
        <div>
          <Background onClick={closeModal} />
          <Form onSubmit={handleSubmit(handleSignIn)}>
            <div className="wrapper">
              <div className="title">
                <h1>BACK TO WORK</h1>
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
                <button type="submit">Login</button>
              </div>
            </div>
          </Form>
        </div>
      ) : null}
    </>
  );
};

export default SignModal;
