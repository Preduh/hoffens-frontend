import { NextApiRequest, NextApiResponse } from "next";
import dbConnect from "../../config/mongodb";
import RecoveryPlayerByToken from "../../services/RecoveryPlayerByToken";
import authMiddleware from "./_authMiddleware";

async function handler(request: NextApiRequest, response: NextApiResponse) {
  const { method } = request;

  await dbConnect();

  switch (method) {
    case "POST":
      try {
        const { recoveryToken } = request.body;

        const recoveryPlayerByToken = new RecoveryPlayerByToken();

        if (recoveryToken) {
          const player = await recoveryPlayerByToken.execute(recoveryToken);

          if (!player) {
            return response.json({ error: "Invalid JWT token payload." });
          }

          const { _id, username, email, avatarUrl } = player;

          return response.json({ _id, username, email, avatarUrl });
        }
      } catch (err) {
        response.status(400).json({ error: err.message });
      }
      break;
    default:
      response.status(400).json({ success: false });
      break;
  }
}

export default authMiddleware(handler);
