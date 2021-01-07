import { open } from "sqlite";
import sqlite3 from "sqlite3";

export default async function handler(req, res) {
  const user = req.body.user;
  const amount = req.body.amount;
  const description = req.body.what;
  const isDeleted = false;
  console.log(user);
  const db = await open({ filename: "expenses.db", driver: sqlite3.Database });
  await db.run(
    `INSERT INTO expenses (user, what, amount, deleted) VALUES("${user}", "${description}", ${amount}, ${isDeleted})`
    // (user, desription, amount, isDeleted)
  );
  res.end();
}
