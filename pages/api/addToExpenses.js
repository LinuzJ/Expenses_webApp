import { open } from "sqlite";
import sqlite3 from "sqlite3";

export default async function handler(req, res) {
  const user = req.data.user;
  const amount = req.data.amount;

  const db = await open({ filename: "expenses.db", driver: sqlite3.Database });
  const add = await db.all(
    "INSERT INTO expenses.db (user, amount), VALUES(".concat(
      user,
      ", ",
      amount,
      ")"
    )
  );
  console.log(add);
}
