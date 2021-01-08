import FirstPost from "./list";
import Layout from "../components/layout";
import { Container, Box, Center, Flex } from "@chakra-ui/react";
import Graph from "../components/graph";

import {
  Stat,
  StatLabel,
  StatNumber,
  StatHelpText,
  StatArrow,
  StatGroup,
} from "@chakra-ui/react";

export async function getServerSideProps(context) {
  const response_overview = await fetch(
    "http://localhost:3000/api/overview"
  ).then((response) => response.json());

  const response_Linus = await fetch(
    "http://localhost:3000/api/graphDataLinus"
  ).then((response) => response.json());

  const response_Calle = await fetch(
    "http://localhost:3000/api/graphDataCalle"
  ).then((response) => response.json());
  return {
    props: {
      data: response_overview,
      graphDataLinus: response_Linus,
      graphDataCalle: response_Calle,
    },
  };
}

export default function Home(props) {
  let totalExpenses = props.data
    .filter((dataset) => !dataset.deleted)
    .reduce((sum, pair) => sum + pair.amount, 0);
  let leader;
  let notLeader;
  const calleTotal = props.data
    .filter((dataset) => dataset.user === "Calle" && !dataset.deleted)
    .reduce((sum, pair) => sum + pair.amount, 0);

  const linusTotal = props.data
    .filter((dataset) => dataset.user === "Linus" && !dataset.deleted)
    .reduce((sum, pair) => sum + pair.amount, 0);

  if (calleTotal < linusTotal) {
    leader = "Linus";
    notLeader = "Calle";
  } else {
    leader = "Calle";
    notLeader = "Linus";
  }

  let difference = Math.abs(calleTotal - linusTotal);
  return (
    <Layout>
      <Flex flexDirection="column" alignItems="center" justifyContent="center">
        <StatGroup>
          <Stat m="25px">
            <StatLabel fontSize="40px">Total Expenses</StatLabel>
            <StatNumber fontSize="150px">{totalExpenses}€</StatNumber>
          </Stat>

          <Stat m="25px">
            <StatLabel fontSize="30px">Balance</StatLabel>
            <StatNumber fontSize="45px">
              {notLeader} owes {leader}
            </StatNumber>
            <StatHelpText fontSize="30px">
              <StatArrow type="decrease" />
              {difference} €
            </StatHelpText>
          </Stat>
        </StatGroup>
        <Graph
          dataLinus={props.graphDataLinus}
          dataCalle={props.graphDataCalle}
          leader={leader}
        ></Graph>
      </Flex>
    </Layout>
  );
}
