import { createContext, useEffect, useState } from "react";
import { parseCookies, setCookie } from "nookies";
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

interface AuthContextData {
  isAuthenticated: boolean;
  user: UserData;
  signIn: (data: SignInData) => Promise<void>;
  signUp: (data: SignUpData) => Promise<void>;
  errorSignIn: {};
  errorSignUp: {};
}

export const AuthContext = createContext({} as AuthContextData);

export function AuthProvider({ children }) {
  const [user, setUser] = useState<UserData | null>(null);
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
    }
  }, []);

  const signIn = async ({ email, password }: SignInData) => {
    try {
      const { data } = await api.post("/session", { email, password });

      if (data) {
        setCookie(undefined, "hoffens.token", data.token, {
          maxAge: 60 * 60 * 24, // 24 hours
        });

        setUser(data);

        api.defaults.headers["authorization"] = `Bearer ${data.token}`;

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

        setUser(data);

        api.defaults.headers["authorization"] = `Bearer ${data.token}`;

        setErrorSignUp(null);
        Router.push("/dashboard");
      }
    } catch (err) {
      setErrorSignUp(err.response.data.error);
    }
  };

  return (
    <AuthContext.Provider
      value={{
        user,
        signIn,
        signUp,
        isAuthenticated,
        errorSignIn,
        errorSignUp,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}
