import express, { Request, Response } from "express";
import cors from "cors";
import pool from "./db";

const app = express();

app.use(cors());
app.use(express.json());

app.get("/", (req: Request, res: Response) => {
  res.json({ message: "API running 🚀" });
});

// ✅ test DB route
app.get("/test-db", async (req: Request, res: Response) => {
  try {
    const result = await pool.query("SELECT NOW()");
    res.json(result.rows);
  } catch (err) {
    console.error(err);
    res.status(500).send("DB error");
  }
});

export default app;