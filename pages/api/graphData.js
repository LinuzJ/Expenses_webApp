import { open } from "sqlite";
import sqlite3 from "sqlite3";

export default async function handler(req, res) {
  const db = await open({ filename: "expenses.db", driver: sqlite3.Database });
  const cumulative = await db.all(
    "SELECT user, created_at, amount, SUM(amount) OVER (PARTITION BY user ROWS UNBOUNDED PRECEDING) FROM (SELECT user, date(created_at) as created_at, sum(amount) as amount FROM  expenses WHERE deleted = false group by user, date(created_at))"
  );

  const nameChange = cumulative.map((original) => {
    return {
      user: original.user,
      date: original.created_at,
      amount: original.amount,
      cumulative:
        original[
          "SUM(amount) OVER (PARTITION BY user ROWS UNBOUNDED PRECEDING)"
        ],
    };
  });
  console.log(nameChange);
  res.json(nameChange);
}
