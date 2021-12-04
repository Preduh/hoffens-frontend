import dbConnect from "../config/mongodb";
import Player from "../models/Player";
import { hash } from "bcrypt";
import { ObjectId } from "bson";

interface RequestDTO {
  username: string;
  email: string;
  password: string;
}

interface ResponseDTO {
  username: string;
  email: string;
  password: string;
  _id: ObjectId;
  __v: number;
}

export default class CreatePlayerService {
  public async execute({
    username,
    email,
    password,
  }: RequestDTO): Promise<ResponseDTO> {
    await dbConnect();

    const emailExists = await Player.findOne({ email });

    if (emailExists) {
      throw Error("This email already exists.");
    }

    const hashedPassword = await hash(password, 8);

    const player = await Player.create({
      username,
      email,
      password: hashedPassword,
    });

    return player;
  }
}
