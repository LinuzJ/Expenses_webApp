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

  const response_graph = await fetch(
    "http://localhost:3000/api/graphData"
  ).then((response) => response.json());

  return {
    props: {
      data: response_overview,
      graphData: response_graph,
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
        <StatGroup
          display="flex"
          m="20px auto 20px "
          background="#f2f2f2"
          borderRadius="10px"
          border={1}
          borderStyle="solid"
          flexDirection="row"
          alignItems="center"
          justifyContent="center"
        >
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
          data={props.graphData}
          border={1}
          borderStyle="solid"
          borderSpacing={0}
          borderColor="#e6e6e6"
        ></Graph>
      </Flex>
    </Layout>
  );
}
