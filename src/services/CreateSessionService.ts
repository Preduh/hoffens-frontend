import dbConnect from "../config/mongodb";
import Player from "../models/Player";
import { ObjectId } from "bson";
import { sign } from "jsonwebtoken";
import { compare } from "bcrypt";
import authConfig from "../config/auth";

interface RequestDTO {
  email: string;
  password: string;
}

interface ResponseDTO {
  token: string;
  player: {
    username: string;
    email: string;
    password: string;
    avatarUrl: string;
    _id: ObjectId;
    __v: number;
  };
}

export default class CreateSessionService {
  public async execute({ email, password }: RequestDTO): Promise<ResponseDTO> {
    await dbConnect();

    const player = await Player.findOne({ email });

    if (!player) {
      throw Error("Email/Password invalid.");
    }

    const checkPassword = await compare(password, player.password);

    if (!checkPassword) {
      throw Error("Email/Password invalid.");
    }

    const { secret, expiresIn } = authConfig.jwt;

    const token = sign({}, secret, {
      subject: player._id.toString(),
      expiresIn,
    });

    return { token, player };
  }
}
