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
  ).then((respone) => respone.json());

  return {
    props: {
      data: response,
    },
  };
}

export default function Home(props) {
  console.log(props.data);
  let totalExpenses = props.data.reduce((sum, pair) => sum + pair.amount, 0);
  let leader;
  let notLeader;

  if (
    props.data
      .filter((dataset) => dataset.user === "Calle")
      .reduce((sum, pair) => sum + pair.amount, 0) <
    props.data
      .filter((dataset) => dataset.user === "Linus")
      .reduce((sum, pair) => sum + pair.amount, 0)
  ) {
    leader = "Linus";
    notLeader = "Calle";
  } else {
    leader = "Calle";
    notLeader = "Linus";
  }

  let difference = Math.abs(
    props.data
      .filter((dataset) => dataset.user === "Calle")
      .reduce((sum, pair) => sum + pair.amount, 0) -
      props.data
        .filter((dataset) => dataset.user === "Linus")
        .reduce((sum, pair) => sum + pair.amount, 0)
  );
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
              {difference}
            </StatHelpText>
          </Stat>
        </StatGroup>
      </Flex>
    </Layout>
  );
}
