import { open } from "sqlite";
import sqlite3 from "sqlite3";

export default async function handler(req, res) {
  const db = await open({ filename: "expenses.db", driver: sqlite3.Database });
  await db.run(
    `UPDATE expenses
    SET deleted = true
    WHERE id = ${req.body.id}`
  );
  res.end();
}
