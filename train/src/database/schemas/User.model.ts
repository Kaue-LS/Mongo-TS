import mongoose, { Schema, Model, Document } from "mongoose";

type UserDocument = Document & {
  fullName: string;
  email: string;
  password: string;
  enabled: string;
  role: string;
};

type UserInput = {
  fullName: UserDocument["fullName"];
  email: UserDocument["email"];
  password: UserDocument["password"];
  enabled: UserDocument["enabled"];
  role: UserDocument["role"];
};

const userSchema = new Schema(
  {
    fullName: {
      type: Schema.Types.String,
      required: true,
    },
    email: {
      type: Schema.Types.String,
      required: true,
      unique: true,
    },
    password: {
      type: Schema.Types.String,
      required: true,
    },
    enable: {
      type: Schema.Types.Boolean,
      required: true,
    },
    role: {
      type: Schema.Types.ObjectId,
      ref: "Role",
      required: true,
      index: true,
    },
  },
  {
    collection: "users",
    timestamps: true,
  }
);

const User: Model<UserDocument> = mongoose.model<UserDocument>(
  "User",
  userSchema
);

export { User, UserInput, UserDocument };
