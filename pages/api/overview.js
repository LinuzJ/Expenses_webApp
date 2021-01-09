import { open } from "sqlite";
import sqlite3 from "sqlite3";

export default async function handler(req, res) {
  const db = await open({ filename: "expenses.db", driver: sqlite3.Database });
  const overview = await db.all("select * from expenses");

  let totalExpenses = overview
    .filter((dataset) => !dataset.deleted)
    .reduce((overview, pair) => overview + pair.amount, 0);

  const calleTotal = overview
    .filter((dataset) => dataset.user === "Calle" && !dataset.deleted)
    .reduce((overview, pair) => overview + pair.amount, 0);

  const linusTotal = overview
    .filter((dataset) => dataset.user === "Linus" && !dataset.deleted)
    .reduce((overview, pair) => overview + pair.amount, 0);

  let leader;
  let notLeader;
  if (calleTotal < linusTotal) {
    leader = "Linus";
    notLeader = "Calle";
  } else {
    leader = "Calle";
    notLeader = "Linus";
  }

  let difference = Math.abs(calleTotal - linusTotal);

  const exportData = {
    overview: overview,
    totalExpenses: totalExpenses,
    calleTotal: calleTotal,
    linusTotal: linusTotal,
    leader: leader,
    notLeader: notLeader,
    difference: difference,
  };

  res.json(exportData);
}
