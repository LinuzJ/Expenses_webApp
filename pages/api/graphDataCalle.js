import { open } from "sqlite";
import sqlite3 from "sqlite3";

export default async function handler(req, res) {
  const db = await open({ filename: "expenses.db", driver: sqlite3.Database });
  const cumulative = await db.all(
    'SELECT created_at, amount, SUM(amount) OVER (ROWS UNBOUNDED PRECEDING) FROM expenses WHERE deleted = false AND user = "Calle"'
  );
  const nameChange = cumulative.map((original) => {
    return {
      Time: original.created_at,
      amount: original.amount,
      Calle: original["SUM(amount) OVER (ROWS UNBOUNDED PRECEDING)"],
    };
  });

  res.json(nameChange);
}
