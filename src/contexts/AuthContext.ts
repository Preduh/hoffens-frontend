import api from "../utils/api";

interface SignInData {
  email: string;
  password: string;
}

const signIn = async ({ email, password }: SignInData) => {
  try {
    const { data } = await api.post("session", { email, password });

    if (data) {
      console.log(data);
    }
  } catch (err) {
    console.log(err.response.data);
  }
};

export { signIn };
