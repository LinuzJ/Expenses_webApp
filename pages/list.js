import Link from "next/link";
import Layout from "../components/layout";
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
        Header: "ID",
        accessor: "id",
      },
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
        <table {...getTableProps()}>
          <thead>
            {
              // Loop over the header rows
              headerGroups.map((headerGroup) => (
                // Apply the header row props
                <tr {...headerGroup.getHeaderGroupProps()}>
                  {
                    // Loop over the headers in each row
                    headerGroup.headers.map((column) => (
                      // Apply the header cell props
                      <th {...column.getHeaderProps()}>
                        {
                          // Render the header
                          column.render("Header")
                        }
                      </th>
                    ))
                  }
                </tr>
              ))
            }
          </thead>
          {/* Apply the table body props */}
          <tbody {...getTableBodyProps()}>
            {
              // Loop over the table rows
              rows.map((row) => {
                // Prepare the row for display
                prepareRow(row);
                return (
                  // Apply the row props
                  <tr {...row.getRowProps()}>
                    {
                      // Loop over the rows cells
                      row.cells.map((cell) => {
                        // Apply the cell props
                        return (
                          <td {...cell.getCellProps()}>
                            {
                              // Render the cell contents
                              cell.render("Cell")
                            }
                          </td>
                        );
                      })
                    }
                  </tr>
                );
              })
            }
          </tbody>
        </table>
        <Box padding="4" bg="gray.100" maxW="3xl">
          Epic location for the list
        </Box>
      </Flex>
    </Layout>
  );
}
