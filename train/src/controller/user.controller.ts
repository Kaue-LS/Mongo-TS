import { Request, Response, response } from "express";
import crypto from "crypto";

import { User, UserInput } from "../database/schemas/User.model";

const hashPassword = (password: string) => {
  const salt = crypto.randomBytes(16).toString("hex");

  return crypto.pbkdf2Sync(password, salt, 100, 64, "sha512").toString("hex");
};

const createUser = async (req: Request, res: Response) => {
  const { email, enabled, fullName, password, role } = req.body;

  if (!email || !password || !fullName || !role) {
    return res.status(422).json({
      message: "The field: email, fullName, password and role are required",
    });
  }
  const userInput: UserInput = {
    fullName,
    email,
    password: hashPassword(password),
    enabled,
    role,
  };
  const userCreated = await User.create(userInput);
  return res.status(201).json({ data: userCreated });
};
const getAllUsers = async (req: Request, res: Response) => {
  const users = await User.find().populate("role").sort("-createdAt").exec();
  return res.status(200).json({ data: users });
};

const getUser = async (req: Request, res: Response) => {
  const { id } = req.params;

  const user = await User.findOne({ _id: id }).populate("role").exec();

  if (!user) {
    return res.status(404).json({ message: `User with id "${id}" not found` });
  }
  return res.status(200).json({ data: user });
};

const updateUser = async (req: Request, res: Response) => {
  const { id } = req.params;
  const { enabled, fullName, role } = req.body;

  const user = await User.findOne({ _id: id });

  if (!user)
    return res.status(404).json({ message: `User with id "${id}" not found` });

  if (!fullName || !role)
    return res
      .status(404)
      .json({ message: `The fields fullName and role are required` });

  await User.updateOne({ _id: id }, { enabled, fullName, role });
  const userUpdated = await User.findById(id);

  return res.status(200).json({ data: userUpdated });
};

const deleteUser = async (req: Request, res: Response) => {
  const { id } = req.params;

  await User.findByIdAndDelete(id);
  return res.status(200).json({ message: "User deleted successfully" });
};

export { createUser, getAllUsers, getUser, updateUser, deleteUser };
