import FirstPost from "./list";
import Layout from "../components/layout";
import { Container, Box, Center } from "@chakra-ui/react";
import { SimpleGrid } from "@chakra-ui/react";
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
      <SimpleGrid columns="3" spacing="10%" backgroundColor="#A9A9A9">
        <Center
          bg="Tomato"
          height="300px"
          width="300px"
          borderRadius="100%"
          fontSize="100px"
        >
          Linus
        </Center>
        <StatGroup width="600px" heigth="400px">
          <Stat>
            <StatLabel fontSize="25px">Total Expenses</StatLabel>
            <StatNumber fontSize="60px">{totalExpenses}€</StatNumber>
          </Stat>

          <Stat>
            <StatLabel fontSize="20px">Tilannekuva :D</StatLabel>
            <StatNumber fontSize="30px">
              {notLeader} owes {leader}
            </StatNumber>
            <StatHelpText>
              <StatArrow type="decrease" />
              {difference}
            </StatHelpText>
          </Stat>
        </StatGroup>
        <Center
          bg="Tomato"
          height="300px"
          width="300px"
          borderRadius="100%"
          fontSize="100px"
        >
          Calle
        </Center>
      </SimpleGrid>
    </Layout>
  );
}
