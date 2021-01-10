import { open } from "sqlite";
import sqlite3 from "sqlite3";

export default async function handler(req, res) {
  const db = await open({ filename: "expenses.db", driver: sqlite3.Database });
  const overview = await db.all("select * from expenses");

  let totalExpenses = overview
    .filter((dataset) => !dataset.deleted)
    .reduce((overview, pair) => overview + pair.amount, 0);

  const User2Total = overview
    .filter((dataset) => dataset.user === "User2" && !dataset.deleted)
    .reduce((overview, pair) => overview + pair.amount, 0);

  const User1Total = overview
    .filter((dataset) => dataset.user === "User1" && !dataset.deleted)
    .reduce((overview, pair) => overview + pair.amount, 0);

  let leader;
  let notLeader;
  if (User2Total < User1Total) {
    leader = "User1";
    notLeader = "User2";
  } else {
    leader = "User2";
    notLeader = "User1";
  }

  let difference = Math.abs(User2Total - User1Total);

  const exportData = {
    overview: overview,
    totalExpenses: totalExpenses,
    User2Total: User2Total,
    User1Total: User1Total,
    leader: leader,
    notLeader: notLeader,
    difference: difference,
  };

  res.json(exportData);
}
