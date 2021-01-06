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
  console.log(props.data);
  const data = props.data.filter((dataset) => dataset.deleted === 0);

  const columns = [
    {
      Header: "Person",
      accessor: "user",
    },
    {
      Header: "Comment",
      accessor: "what",
    },
    {
      Header: "Amount (€)",
      accessor: "amount",
    },
    {
      Header: "Time",
      accessor: "created_at",
    },
  ];

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
      </Flex>
    </Layout>
  );
}
