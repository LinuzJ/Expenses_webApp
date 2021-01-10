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
  const datasetOther = {};
  const dataA = [];
  var x;
  var row;
  for (row of nameChange) {
    if (!(row.date in datasetOther)) {
      datasetOther[row.date] = {};
    }
    if (row.user === "User2") {
      datasetOther[row.date] = {
        ...datasetOther[row.date],
        User2: row.cumulative,
      };
    } else {
      datasetOther[row.date] = {
        ...datasetOther[row.date],
        User1: row.cumulative,
      };
    }
  }

  const keys = Object.keys(datasetOther);
  const values = Object.values(datasetOther);
  for (x in values) {
    dataA.push(values[x]);
    dataA[x] = {
      ...dataA[x],
      date: keys[x],
    };
  }
  res.json(dataA);
}
