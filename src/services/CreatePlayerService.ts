import dbConnect from "../config/mongodb";
import Player from "../models/Player";
import { hash } from "bcrypt";
import { ObjectId } from "bson";
import { sign } from "jsonwebtoken";
import authConfig from "../config/auth";

interface RequestDTO {
  username: string;
  email: string;
  password: string;
  avatarUrl: string;
  masterKey: string;
}

interface ResponseDTO {
  player: {
    username: string;
    email: string;
    password: string;

    avatarUrl: string;
    _id: ObjectId;
    __v: number;
  };
  token: string;
}

export default class CreatePlayerService {
  public async execute({
    username,
    email,
    password,
    avatarUrl,
    masterKey,
  }: RequestDTO): Promise<ResponseDTO> {
    await dbConnect();

    const emailExists = await Player.findOne({ email });

    if (emailExists) {
      throw Error("This email already exists.");
    }

    const hashedPassword = await hash(password, 8);

    if (masterKey !== "hoffens5") {
      throw Error("Invalid master key.");
    }

    const player = await Player.create({
      username,
      email,
      password: hashedPassword,
      avatarUrl,
    });

    const { secret, expiresIn } = authConfig.jwt;

    const token = sign({}, secret, {
      subject: player._id.toString(),
      expiresIn,
    });

    return { token, player };
  }
}
