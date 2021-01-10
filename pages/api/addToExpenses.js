import { open } from "sqlite";
import sqlite3 from "sqlite3";

export default async function handler(req, res) {
  const db = await open({ filename: "expenses.db", driver: sqlite3.Database });
  await db.run(
    `INSERT INTO expenses (user, what, amount, deleted) VALUES("${
      req.body.user
    }", "${req.body.what}", ${req.body.amount}, ${false})`
  );
  res.end();
}
