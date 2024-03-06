import "dotenv/config";
import express from "express";
import authRoutes from "./routes/auth.routes.js";

const app = express();

const PORT = process.env.PORT || 5000;

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.use("/api/auth", authRoutes);

app.listen(PORT, () => {
  console.log(`Server Running on Port ${PORT}`);
  console.log(`Access it through http://localhost:${PORT}`);
});

// 22:35
