import { open } from "sqlite";
import sqlite3 from "sqlite3";

export default async function handler(req, res) {
  const user = req.body.user;
  const amount = req.body.amount;
  const desription = req.body.what;

  const db = await open({ filename: "expenses.db", driver: sqlite3.Database });
  await db.run(
    "INSERT INTO expenses (user, what, amount, deleted) VALUES(?, ?, ?, ?)",
    (user, desription, amount, false)
  );
  res.end();
}
