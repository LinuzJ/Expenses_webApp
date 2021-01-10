import Layout from "../components/layout";
import { Flex } from "@chakra-ui/react";
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
            <StatNumber fontSize="150px">
              {props.data.totalExpenses}€
            </StatNumber>
          </Stat>

          <Stat m="25px">
            <StatLabel fontSize="35px">Balance</StatLabel>
            <StatNumber fontSize="45px">
              {props.data.users[props.data.leaderIndex]} owes{" "}
              {props.data.users[(props.data.leaderIndex + 1) % 2]}
            </StatNumber>
            <StatHelpText fontSize="30px">
              <StatArrow type="decrease" />
              {props.data.difference} €
            </StatHelpText>
          </Stat>
        </StatGroup>
        <Graph
          data={props.graphData}
          users={props.data.users}
          border={1}
          borderStyle="solid"
          borderSpacing={0}
          borderColor="#e6e6e6"
        ></Graph>
      </Flex>
    </Layout>
  );
}
