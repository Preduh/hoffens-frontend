import { createContext, useEffect, useState } from "react";
import { destroyCookie, parseCookies, setCookie } from "nookies";
import Router from "next/router";

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
  _id: string;
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

interface AuthContextData {
  isAuthenticated: boolean;
  user: UserData;
  chars: CharData[];
  signIn: (data: SignInData) => Promise<void>;
  signUp: (data: SignUpData) => Promise<void>;
  logout: () => void;
  errorSignIn: {};
  errorSignUp: {};
}

export const AuthContext = createContext({} as AuthContextData);

export function AuthProvider({ children }) {
  const [user, setUser] = useState<UserData | null>(null);
  const [chars, setChars] = useState<CharData[] | null>(null);
  const isAuthenticated = !!user;
  const [errorSignIn, setErrorSignIn] = useState<{} | null>(null);
  const [errorSignUp, setErrorSignUp] = useState<{} | null>(null);

  useEffect(() => {
    const { "hoffens.token": token } = parseCookies();

    if (token) {
      api
        .post("user/recovery", { token })
        .then(response => {
          setUser(response.data);
        })
        .catch(err => console.log(err));

      api
        .get("characters")
        .then(response => setChars(response.data))
        .catch(err => console.log(err));
    }
  }, []);

  const signIn = async ({ email, password }: SignInData) => {
    try {
      const { data } = await api.post("/session", { email, password });

      if (data) {
        setCookie(undefined, "hoffens.token", data.token, {
          maxAge: 60 * 60 * 24, // 24 hours
        });

        api.defaults.headers["authorization"] = `Bearer ${data.token}`;

        setErrorSignIn(null);
        Router.push("/player/dashboard");
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

        setUser(data);

        api.defaults.headers["authorization"] = `Bearer ${data.token}`;

        setErrorSignUp(null);
        Router.push("/player/dashboard");
      }
    } catch (err) {
      setErrorSignUp(err.response.data.error);
    }
  };

  const logout = () => {
    destroyCookie(null, "hoffens.token");
    Router.push("/");
  };

  return (
    <AuthContext.Provider
      value={{
        user,
        chars,
        signIn,
        signUp,
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
