import express from "express";
import cors from "cors";

import dotenv from "dotenv";
dotenv.config();

import genRouter from "./routes/genRoutes";

const app = express();
const PORT = process.env.PORT || 8000;

app.use(express.json());
app.use(
  cors({
    origin: "http://localhost:3000",
    credentials: true,
  }),
);

app.use("/gen", genRouter);

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
