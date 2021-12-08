import axios from "axios";
import { parseCookies } from "nookies";

export function getApiClient(ctx?: any) {
  const { "hoffens.token": token } = parseCookies();

  const api = axios.create({
    baseURL: process.env.API_URL,
  });

  if (token) {
    api.defaults.headers["authorization"] = `Bearer ${token}`;
  }

  return api;
}
