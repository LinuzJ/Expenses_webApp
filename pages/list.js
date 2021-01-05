import Link from "next/link";
import Layout from "../components/layout";
import Table from "../components/Table";
import { Flex, Container, Box } from "@chakra-ui/react";
import { useTable } from "react-table";
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
export default function list(props) {
  const data = React.useMemo(() => props.data);

  const columns = React.useMemo(
    () => [
      {
        Header: "Person",
        accessor: "user",
      },
      {
        Header: "Comment",
        accessor: "what",
      },
      {
        Header: "Amount",
        accessor: "amount",
      },
      {
        Header: "Time",
        accessor: "created_at",
      },
    ],
    []
  );
  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    rows,
    prepareRow,
  } = useTable({ columns, data });
  return (
    <Layout>
      <Flex flexDirection="column" alignItems="center" justifyContent="center">
        <Table columns={columns} data={data} />
        <Box padding="4" bg="gray.100" maxW="3xl">
          Epic location for the list
        </Box>
      </Flex>
    </Layout>
  );
}
