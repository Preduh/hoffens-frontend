import axios from "axios";
import { parseCookies } from "nookies";

export function getApiClient(ctx?: any) {
  const { "hoffens.token": token } = parseCookies(ctx);

  const api = axios.create({
    baseURL: "https://hoffens-api.herokuapp.com/",
  });

  if (token) {
    api.defaults.headers["authorization"] = `Bearer ${token}`;
  }

  return api;
}
