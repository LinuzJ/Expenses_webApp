import Link from "next/link";
import Layout from "../components/layout";
import { Container, Box } from "@chakra-ui/react";
export default function list() {
  return (
    <Layout>
      <Container maxW="xl" centerContent position="absolute" top="500px">
        <Box padding="4" bg="gray.100" maxW="3xl">
          Epic location for the list
        </Box>
      </Container>
    </Layout>
  );
}
