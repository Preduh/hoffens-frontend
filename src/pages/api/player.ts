import { NextApiRequest, NextApiResponse } from "next";
import dbConnect from "../../../config/mongodb";
import CreatePlayerService from "../../../services/CreatePlayerService";

export default async function handler(
  request: NextApiRequest,
  response: NextApiResponse,
) {
  const { method } = request;

  await dbConnect();

  switch (method) {
    case "POST":
      try {
        const { username, email, password } = request.body;

        const createPlayerService = new CreatePlayerService();

        const { _id } = await createPlayerService.execute({
          username,
          email,
          password,
        });

        response.status(201).json({ _id, username, email });
      } catch (err) {
        response.status(400).json({ error: err.message });
      }
      break;
    default:
      response.status(400).json({ success: false });
      break;
  }
}
