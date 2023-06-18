import dotenv from "dotenv";
import mongoose from "mongoose";

dotenv.config();

async function runDB() {
  const DB_User = process.env.DB_USER;
  const DB_Pass = process.env.DB_PASS;

  // mongoose.connect("mongodb://127.0.0.1/treino-node");
  await mongoose
    .connect(
      `mongodb+srv://${DB_User}:${DB_Pass}@cluster.mue3bkw.mongodb.net/treino-node?retryWrites=true&w=majority`
    )
    .then(() => console.log("Connected to the database"))
    .catch((err) => console.log("Error to connect the database: " + err));
}

export { runDB };
