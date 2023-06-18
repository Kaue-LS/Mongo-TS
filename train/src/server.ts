import express from "express";
import { roleRouter, userRouter } from "./routes";
import { runDB } from "./db_connections";

async function StartServer() {
  const app = express();
  app.use(express.json());
  await runDB();

  app.use("/", roleRouter());
  app.use("/", userRouter());

  app.listen(3000, () => {
    console.log("Server is listening on Port: http://localhost:3000");
  });
}

StartServer();
