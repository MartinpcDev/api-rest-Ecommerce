import { User } from "../interfaces";
import { Schema, model } from "mongoose";


const UserSchema = new Schema<User>(
  {
    email: {
      type: String,
      required: true
    },
    password: {
      type: String,
      required: true
    },
    direccion: {
      type: String,
      required: true
    }
  },
  {
    timestamps: true,
    versionKey: false
  }
)

export const UserModel = model('usuarios',UserSchema)