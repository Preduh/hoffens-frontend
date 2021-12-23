import { NextPage } from "next";
import Head from "next/head";
import { useEffect, useState } from "react";

import { Players } from "../styles/pages/Players";
import { api } from "../utils/api";

interface UserData {
  id: string;
  username: string;
}

const PlayersPage: NextPage = () => {
  const [users, setUsers] = useState(null);

  useEffect(() => {
    api.get("/users").then(response => setUsers(response.data));
  }, []);

  return (
    <>
      <Head>
        <title>Jogadores</title>
      </Head>
      <Players id="players">
        {users &&
          users.map((user: UserData) => {
            return (
              <div className="player" key={user.id}>
                <div className="avatar" />
                <label>{user.username}</label>
              </div>
            );
          })}
      </Players>
    </>
  );
};

export default PlayersPage;
