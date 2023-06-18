import { Router } from "express";
import UserController from "./controller/UserController";
import {
  createRole,
  deleteRole,
  getAllRoles,
  getOneRole,
  updateRole,
} from "./controller/role.controller";

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

  routes.post("/user", createRole);
  routes.get("/users", getAllRoles);
  routes.get("/user/:id", getOneRole);
  routes.put("/user/:id", updateRole);
  routes.delete("/user/:id", deleteRole);

  return routes;
};

export { roleRouter, userRouter };
