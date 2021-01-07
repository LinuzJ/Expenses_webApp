import FirstPost from "./list";
import Layout from "../components/layout";
import { Container, Box, Center, Flex } from "@chakra-ui/react";
import Bar from "../components/bar";

import {
  Stat,
  StatLabel,
  StatNumber,
  StatHelpText,
  StatArrow,
  StatGroup,
} from "@chakra-ui/react";

export async function getServerSideProps(context) {
  const response = await fetch(
    "http://localhost:3000/api/overview"
  ).then((response) => response.json());

  return {
    props: {
      data: response,
    },
  };
}

export default function Home(props) {
  console.log(props.data);
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
            <StatLabel fontSize="30px">Tilannekuva :D</StatLabel>
            <StatNumber fontSize="50px">
              {notLeader} owes {leader}
            </StatNumber>
            <StatHelpText>
              <StatArrow type="decrease" />
              {difference} €
            </StatHelpText>
          </Stat>
        </StatGroup>
      </Flex>
    </Layout>
  );
}
