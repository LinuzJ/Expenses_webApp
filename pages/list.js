import Link from "next/link";
import Layout from "../components/layout";
import Table from "../components/Table";
import { Flex, Container, Box } from "@chakra-ui/react";
import { useRouter } from "next/router";
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
  const router = useRouter();

  const refreshData = () => {
    router.replace(router.asPath);
  };

  const data = props.data.overview.filter((dataset) => !dataset.deleted);

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

  return (
    <Layout>
      <Flex flexDirection="column" alignItems="center" justifyContent="center">
        <Table columns={columns} data={data} refreshData={refreshData} />
      </Flex>
    </Layout>
  );
}
