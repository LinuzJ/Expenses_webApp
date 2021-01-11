import React from "react";
import DeleteButton from "./deleteButton";
import { useTable, useSortBy } from "react-table";
import { Box } from "@chakra-ui/react";

export default function Table(props) {
  const { columns, data } = props;
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
          {rows.map((row, i) => {
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
                    >
                      {cell.value}
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
                  <DeleteButton
                    rowData={row.original.id}
                    refreshData={props.refreshData}
                  ></DeleteButton>
                </Box>
              </Box>
            );
          })}
        </Box>
      </Box>
      <Box>Showing {rows.length} rows</Box>
    </>
  );
}
