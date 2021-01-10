import { open } from "sqlite";
import sqlite3 from "sqlite3";
import users from "../../config/users";

export default async function handler(req, res) {
  const selectedUsers = users.slice(0, 2);
  const db = await open({ filename: "expenses.db", driver: sqlite3.Database });
  const data = await db.all(
    "SELECT user, created_at as date, amount, SUM(amount) OVER (PARTITION BY user ROWS UNBOUNDED PRECEDING) as cumulative FROM (SELECT user, date(created_at) as created_at, sum(amount) as amount FROM  expenses WHERE deleted = false group by user, date(created_at))"
  );
  const datasetOther = {};
  const dataA = [];
  var x;
  var row;
  for (row of data) {
    if (!(row.date in datasetOther)) {
      datasetOther[row.date] = {};
    }
    if (row.user === selectedUsers[0]) {
      datasetOther[row.date] = {
        ...datasetOther[row.date],
        [selectedUsers[0]]: row.cumulative,
      };
    } else {
      datasetOther[row.date] = {
        ...datasetOther[row.date],
        [selectedUsers[1]]: row.cumulative,
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
