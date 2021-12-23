import { createContext, useEffect, useState } from "react";
import { destroyCookie, parseCookies, setCookie } from "nookies";
import Router, { useRouter } from "next/router";

import { api } from "../utils/api";

interface SignInData {
  email: string;
  password: string;
}

interface SignUpData {
  username: string;
  email: string;
  password: string;
  masterKey: string;
  avatarUrl: string;
}

interface UserData {
  email: string;
  token: string;
  username: string;
  avatarUrl: string;
  id: string;
}

interface CharData {
  id: string;
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

interface CreateCharData {
  hero: string;
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
}

interface AuthContextData {
  isAuthenticated: boolean;
  user: UserData;
  chars: CharData[];
  char: CharData;
  signIn: (data: SignInData) => Promise<void>;
  signUp: (data: SignUpData) => Promise<void>;
  getChar: (charId: string) => Promise<void>;
  createChar: (data: CreateCharData) => Promise<void>;
  logout: () => void;
  errorSignIn: {};
  errorSignUp: {};
}

export const AuthContext = createContext({} as AuthContextData);

export function AuthProvider({ children }) {
  const [user, setUser] = useState<UserData | null>(null);
  const [char, setChar] = useState<CharData | null>(null);
  const [chars, setChars] = useState<CharData[] | null>(null);
  const isAuthenticated = !!user;
  const [errorSignIn, setErrorSignIn] = useState<{} | null>(null);
  const [errorSignUp, setErrorSignUp] = useState<{} | null>(null);
  const router = useRouter();
  const { charIdParam } = router.query;

  useEffect(() => {
    const { "hoffens.token": token } = parseCookies();

    if (token) {
      api
        .post("user/recovery", { token })
        .then(response => {
          setUser(response.data);
        })
        .catch(err => {
          if (err.response.data == "Invalid JWT.") {
            destroyCookie(null, "hoffens.token");
            Router.push("/login");
          }
          console.log(err);
        });

      api
        .get("characters")
        .then(response => setChars(response.data))
        .catch(err => console.log(err));

      getChar(null);
    }
  }, []);

  const getChar = async (charId: string | null): Promise<void> => {
    if (!charId) {
      const { data } = await api.get(`character/${charIdParam}`);
      setChar(data);
    } else {
      const { data } = await api.get(`character/${charId}`);
      setChar(data);
      Router.push(`character/${charId}`);
    }
  };

  const createChar = async ({
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
    try {
      const { data } = await api.post("character", {
        hero,
        user_id: user.id,
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

      if (chars) {
        setChars([...chars, data]);
      } else {
        setChars([data]);
      }

      Router.push("/dashboard");
    } catch (err) {
      console.log(err);
    }
  };

  const signIn = async ({ email, password }: SignInData) => {
    try {
      const { data } = await api.post("/session", { email, password });

      if (data) {
        setCookie(undefined, "hoffens.token", data.token, {
          maxAge: 60 * 60 * 24, // 24 hours
        });

        api.defaults.headers["authorization"] = `Bearer ${data.token}`;

        setUser(data.user);
        setChars(data.characters);
        setErrorSignIn(null);
        Router.push("/dashboard");
      }
    } catch (err) {
      setErrorSignIn(err.response.data.error);
    }
  };

  const signUp = async ({
    email,
    password,
    username,
    masterKey,
    avatarUrl,
  }: SignUpData) => {
    try {
      const { data } = await api.post("user", {
        email,
        password,
        username,
        masterKey,
        avatarUrl,
      });

      if (data) {
        setCookie(undefined, "hoffens.token", data.token, {
          maxAge: 60 * 60 * 24, // 24 hours
        });

        setUser(data.user);

        api.defaults.headers["authorization"] = `Bearer ${data.token}`;

        setErrorSignUp(null);
        Router.push("/dashboard");
      }
    } catch (err) {
      setErrorSignUp(err.response.data.error);
    }
  };

  const logout = () => {
    destroyCookie(null, "hoffens.token");
    setUser(null);
    setChar(null);
    Router.push("/");
  };

  return (
    <AuthContext.Provider
      value={{
        user,
        chars,
        char,
        signIn,
        signUp,
        getChar,
        createChar,
        logout,
        isAuthenticated,
        errorSignIn,
        errorSignUp,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}
