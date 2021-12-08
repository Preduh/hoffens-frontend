import mongoose from "mongoose";

/* PetSchema will correspond to a collection in your MongoDB database. */
const PlayersSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  avatarUrl: {
    type: String,
  },
});

export default mongoose.models.Players ||
  mongoose.model("Players", PlayersSchema);
