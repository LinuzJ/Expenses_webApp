import React from "react";
import { useTable, useSortBy } from "react-table";
import { Box, ChakraProvider, CSSReset, CloseButton } from "@chakra-ui/react";
import theme from "@chakra-ui/theme";

export default function Table({ columns, data }) {
  // Use the state and functions returned from useTable to build your UI
  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    rows,
    prepareRow,
  } = useTable(
    {
      columns,
      data,
    },
    useSortBy
  );
  const firstPageRows = rows.slice(0, 100);

  // Render the UI for your table
  return (
    <>
      <Box
        as="table"
        border={1}
        borderStyle="solid"
        borderSpacing={0}
        borderColor="#e6e6e6"
        m="20px"
        {...getTableProps()}
      >
        <Box as="thead">
          {headerGroups.map((headerGroup) => (
            <Box
              as="tr"
              m={0}
              p="0.5rem"
              borderBottom={1}
              borderBottomStyle="solid"
              background="#f2f2f2"
              width="200px"
              {...headerGroup.getHeaderGroupProps()}
            >
              {headerGroup.headers.map((column) => (
                <Box
                  as="th"
                  m={0}
                  p="0.5rem"
                  borderBottom={1}
                  borderBottomStyle="solid"
                  background="#f2f2f2"
                  width="200px"
                  {...column.getHeaderProps(column.getSortByToggleProps())}
                >
                  {column.render("Header")}
                  <Box as="span">
                    {column.isSorted ? (column.isSortedDesc ? " ↓" : " ↑") : ""}
                  </Box>
                </Box>
              ))}
              <Box
                m={0}
                fontWeight="bold"
                p="0.5rem"
                background="#f2f2f2"
                width="200px"
                display="flex"
                justifyContent="center"
              >
                Delete
              </Box>
            </Box>
          ))}
        </Box>
        <Box as="tbody" {...getTableBodyProps()}>
          {firstPageRows.map((row, i) => {
            prepareRow(row);
            return (
              <Box as="tr" {...row.getRowProps()}>
                {row.cells.map((cell) => {
                  return (
                    <Box
                      as="td"
                      m={0}
                      p="0.5rem"
                      borderBottom={1}
                      borderBottomStyle="solid"
                      borderColor="#e6e6e6"
                      {...cell.getCellProps()}
                    >
                      {cell.render("Cell")}
                    </Box>
                  );
                })}
                <Box
                  display="flex"
                  justifyContent="center"
                  m={0}
                  p="0.5rem"
                  borderBottom={1}
                  borderBottomStyle="solid"
                  borderColor="#e6e6e6"
                >
                  <CloseButton></CloseButton>
                </Box>
              </Box>
            );
          })}
        </Box>
      </Box>
      <Box>Showing the first 100 results of {rows.length} rows</Box>
    </>
  );
}
