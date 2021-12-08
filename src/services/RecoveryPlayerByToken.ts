import dbConnect from "../config/mongodb";
import Player from "../models/Player";
import { ObjectId } from "bson";
import { verify } from "jsonwebtoken";
import authConfig from "../config/auth";

interface ResponseDTO {
  username: string;
  email: string;
  password: string;
  avatarUrl: string;
  _id: ObjectId;
  __v: number;
}

export default class RecoveryPlayerByToken {
  public async execute(token: string): Promise<ResponseDTO> {
    await dbConnect();

    const { sub } = verify(token, authConfig.jwt.secret);

    const player = await Player.findOne({ _id: sub });

    return player;
  }
}
