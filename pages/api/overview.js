import { open } from "sqlite";
import sqlite3 from "sqlite3";

export default async function handler(req, res) {
  console.log(open);
  const db = await open({ filename: "expenses.db", driver: sqlite3.Database });
  const sum = await db.all("select * from expenses");

  res.json(sum);
}
