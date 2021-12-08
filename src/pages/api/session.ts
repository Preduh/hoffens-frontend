import { NextApiRequest, NextApiResponse } from "next";
import dbConnect from "../../config/mongodb";
import CreateSessionService from "../../services/CreateSessionService";

export default async function handler(
  request: NextApiRequest,
  response: NextApiResponse,
) {
  const { method } = request;

  await dbConnect();

  switch (method) {
    case "POST":
      try {
        const { email, password } = request.body;

        const createSessionService = new CreateSessionService();

        const { token, player } = await createSessionService.execute({
          email,
          password,
        });

        const { _id, username, avatarUrl } = player;

        return response
          .status(200)
          .json({ _id, username, email, avatarUrl, token });
      } catch (err) {
        response.status(400).json({ error: err.message });
      }
      break;
    default:
      response.status(400).json({ success: false });
      break;
  }
}
