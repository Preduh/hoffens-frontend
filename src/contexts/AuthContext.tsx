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
}

export const AuthContext = createContext({} as AuthContextData);

export function AuthProvider({ children }) {
  const [user, setUser] = useState<UserData | null>(null);
  const isAuthenticated = !!user;

  useEffect(() => {
    const { "hoffens.token": token } = parseCookies();

    if (token) {
      api
        .post("api/recoveryToken", {
          recoveryToken: token,
        })
        .then(response => {
          setUser(response.data);
        })
        .catch(err => console.log(err));
    }
  }, []);

  const signIn = async ({ email, password }: SignInData) => {
    try {
      const { data } = await api.post("api/session", { email, password });

      if (data) {
        setCookie(undefined, "hoffens.token", data.token, {
          maxAge: 60 * 60 * 24, // 24 hours
        });

        setUser(data);

        api.defaults.headers["authorization"] = `Bearer ${data.token}`;

        Router.push("/dashboard");
      }
    } catch (err) {
      console.log(err.response.data);
    }
  };

  const signUp = async ({
    email,
    password,
    username,
    masterKey,
  }: SignUpData) => {
    try {
      const { data } = await api.post("api/player", {
        email,
        password,
        username,
        masterKey,
      });

      if (data) {
        setCookie(undefined, "hoffens.token", data.token, {
          maxAge: 60 * 60 * 24, // 24 hours
        });

        setUser(data);

        api.defaults.headers["authorization"] = `Bearer ${data.token}`;

        Router.push("/dashboard");
      }
    } catch (err) {
      console.log(err.response.data);
    }
  };

  return (
    <AuthContext.Provider value={{ user, signIn, signUp, isAuthenticated }}>
      {children}
    </AuthContext.Provider>
  );
}
