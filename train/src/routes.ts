import { Router } from "express";
import UserController from "./controller/UserController";
import {
  createRole,
  deleteRole,
  getAllRoles,
  getOneRole,
  updateRole,
} from "./controller/role.controller";
import {
  createUser,
  deleteUser,
  getAllUsers,
  getUser,
  updateUser,
} from "./controller/user.controller";

const roleRouter = () => {
  const routes = Router();

  routes.post("/roles", createRole);
  routes.get("/roles", getAllRoles);
  routes.get("/roles/:id", getOneRole);
  routes.put("/roles/:id", updateRole);
  routes.delete("/roles/:id", deleteRole);

  return routes;
};
const userRouter = () => {
  const routes = Router();

  routes.post("/user", createUser);
  routes.get("/users", getAllUsers);
  routes.get("/user/:id", getUser);
  routes.put("/user/:id", updateUser);
  routes.delete("/user/:id", deleteUser);

  return routes;
};

export { roleRouter, userRouter };
