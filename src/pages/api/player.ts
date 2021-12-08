import { NextApiRequest, NextApiResponse } from "next";
import dbConnect from "../../config/mongodb";
import CreatePlayerService from "../../services/CreatePlayerService";

export default async function handler(
  request: NextApiRequest,
  response: NextApiResponse,
) {
  const { method } = request;

  await dbConnect();

  switch (method) {
    case "POST":
      try {
        const { username, email, password, avatarUrl, masterKey } =
          request.body;

        const createPlayerService = new CreatePlayerService();

        const { player, token } = await createPlayerService.execute({
          username,
          email,
          password,
          avatarUrl,
          masterKey,
        });

        response
          .status(201)
          .json({ _id: player._id, username, email, avatarUrl, token });
      } catch (err) {
        response.status(400).json({ error: err.message });
      }
      break;
    default:
      response.status(400).json({ success: false });
      break;
  }
}
