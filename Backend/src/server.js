import express from "express";
import "dotenv/config";
import cookieParser from "cookie-parser";
import cors from "cors";
import { connectDb } from "./lib/db.js";
const app = express();
const PORT = process.env.PORT || 3000;

connectDb();

app.use(
  cors({
    origin: ["http://localhost:5173", "https://streamify-sigma-six.vercel.app"],
    credentials: true,
  })
);

//routes import
import authRoutes from "./routes/auth.route.js";
import userRoutes from "./routes/user.route.js";
import chatRoutes from "./routes/chat.route.js";

app.use(express.json());
app.use(cookieParser());

app.get("/", (req, res) => {
  res.send("Server is running!");
});

app.use("/api/auth", authRoutes);
app.use("/api/user", userRoutes);
app.use("/api/chat", chatRoutes);

app.listen(PORT, () => {
  console.log("Server is running on the port:", PORT);
});
