import { open } from "sqlite";
import sqlite3 from "sqlite3";
import users from "../../config/users";

export default async function handler(req, res) {
  const selectedUsers = users.slice(0, 2);
  const db = await open({ filename: "expenses.db", driver: sqlite3.Database });
  const overview = await db.all("select * from expenses");

  let totalExpenses = overview
    .filter((dataset) => !dataset.deleted)
    .reduce((overview, pair) => overview + pair.amount, 0);

  const usersTotal = selectedUsers.map((user) => {
    return overview
      .filter((dataset) => dataset.user === user && !dataset.deleted)
      .reduce((overview, pair) => overview + pair.amount, 0);
  });

  const leaderIndex = usersTotal.indexOf(Math.max.apply(null, usersTotal));

  let difference = Math.abs(usersTotal[0] - usersTotal[1]);

  const exportData = {
    users: selectedUsers,
    overview: overview,
    totalExpenses: totalExpenses,
    usersTotal: usersTotal,
    leaderIndex: leaderIndex,
    difference: difference,
  };

  res.json(exportData);
}
