import { open } from "sqlite";
import sqlite3 from "sqlite3";

export default async function handler(req, res) {
  const user = req.body.user;
  const amount = req.body.amount;

  const db = await open({ filename: "expenses.db", driver: sqlite3.Database });
  const add = await db.all(
    "INSERT INTO expenses (user, amount) VALUES('".concat(
      user,
      "', ",
      amount,
      ")"
    )
  );
  res.json(add);
}
