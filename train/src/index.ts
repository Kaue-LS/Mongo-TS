import { roleRoute } from "./routes/roles.route";
import dotenv from "dotenv";
import express, { Express } from "express";
// import { connectToDatabase } from "./db.connections";
import cors from "cors";
import { run } from "./db.connections";

dotenv.config();

const HOST = process.env.HOST || "http://localhost";
const PORT = parseInt(process.env.PORT || "3030");

const app: Express = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors());
app.use("/", roleRoute());

app.get("/", (req, res) => {
  return res.json({ message: "Hello World!" });
});

app.listen(PORT, async () => {
  await run().catch(console.dir);

  console.log(`Application started on URL ${HOST}:${PORT} 🎉`);
});
