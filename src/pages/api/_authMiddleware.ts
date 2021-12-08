import { verify } from "jsonwebtoken";

import authConfig from "../../config/auth";

interface TokenPayload {
  iat: number;
  exp: number;
  sub: string;
}

const authMiddleware = handler => {
  return async (request, response) => {
    const authHeader = request.headers.authorization;

    if (!authHeader) {
      return response.status(400).json({ error: "Missing JWT token." });
    }

    const [, token] = authHeader.split(" ");

    const { secret } = authConfig.jwt;

    const decoded = verify(token, secret);

    if (!decoded) {
      return response.status(400).json({ error: "Invalid JWT token." });
    }

    const { sub } = decoded as TokenPayload;

    request.user = {
      id: sub,
    };

    return handler(request, response);
  };
};

export default authMiddleware;
