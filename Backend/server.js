import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import { register, Login, logout } from "./controllers/authControllers.js";

dotenv.config();
const app = express();

app.use(cors());
app.use(express.json());

app.post("/api/login", Login);
app.post("/api/register", register);
app.post("api/logout", logout);

app.get("/", (req, res) => {
  res.json({ message: "API is running" });
});

app.listen(process.env.PORT || 5000, () => {
  console.log(`Server running on port ${process.env.PORT || 5000}`);
});

